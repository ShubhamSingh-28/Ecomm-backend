import { Schema, model, models } from "mongoose";

const CartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref:"Product"
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    brands:{
        type: String,
        required: true
    },
},{timestamps:true})

const Product = models.Product || model("Product", ProductSchema)