import mongoose from "mongoose";

const  ConnectDb = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected...")
    } catch (error) {
        console.log(error);
        throw error
    }
}