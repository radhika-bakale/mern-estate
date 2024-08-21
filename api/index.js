import dotenv from 'dotenv';

import express from 'express';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import mongoose from 'mongoose';
dotenv.config();


mongoose.connect(process.env.MONGO).then( ()=>
    console.log("Connected to MongoDB")).catch( (err)  =>
        {console.log("Error",err)}
    );

const app=express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
    }
);

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);