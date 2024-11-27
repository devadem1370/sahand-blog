import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

import authRouter from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to Database")
}).catch(err=> {console.log("Error connectiong to database:" ,err)})

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Your Vite frontend development server
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
app.use(express.json())
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})


app.use("/api/auth",authRouter)



app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})