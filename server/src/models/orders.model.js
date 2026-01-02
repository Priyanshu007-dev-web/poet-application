import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required:true
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book", // pending to create
      required:true
    },
    orderId:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
    },
    returnRequest:{
        type:Boolean,
        default:false
    },
    refundAmount:{
        type:Number
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema)