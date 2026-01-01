import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    buyerId:{
        
    }
},{timestamps:true})

export const Order = mongoose.model("Order", orderSchema)