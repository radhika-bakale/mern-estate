import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; // For hashing the password 
import { errorHandler } from '../utils/error.js';

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
