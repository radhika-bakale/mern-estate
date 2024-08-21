import User from '../models/user.model.js';
import bcrypt from 'bcrypt'; // For hashing the password

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance with the hashed password
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the user to the database
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
