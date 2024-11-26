import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

import authRouter from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to Database")
}).catch(err=> {console.log("Error connectiong to database:" ,err)})
const app = express();
app.use(express.json())
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})


app.use("/api/auth",authRouter)