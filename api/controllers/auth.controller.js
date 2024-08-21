import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; // For hashing the password 
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res,next) => {

        const { username, email, password } = req.body;

        

        // Hash the password before saving it
        const hashedPassword = bcryptjs.hashSync(password,10);

        // Create a new user instance with the hashed password
        const newUser = new User({ username, email, password: hashedPassword });
    try{
        // Save the user to the database
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        // Handle any errors that occur
        
        next(error);
    }
};
    export const signin =async(req,res,next) =>{
        const {email, password} =req.body;
        try{
            const validUser =await User.findOne({email});
            if(!validUser) return next(errorHandler(404,'User Not Found'));
            const validPassword =bcryptjs.compareSync(password,validUser.password);
            if(!validPassword) return next(errorHandler(401,'Wrong credentials'));
            const token=jwt.sign({ id: validUser._id},process.env.JWT_SECRET);
            const {password:pass,...rest} =validUser._doc;
            res
    
            .cookie('access_token',token,{httpOnly:true})
            .status(200)
            .json(rest);
        }
        catch(error)
        {
            next(error);
        }
    }

