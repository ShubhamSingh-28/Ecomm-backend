import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())
dotenv.config({
    path: './config.env'
})
const PORT = process.env.PORT || 5000
console.log(PORT);

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})