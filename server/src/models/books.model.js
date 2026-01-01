import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bookId: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: "Book For Sale",
    },
    description: {
      type: String,
      required: true,
      default: "Book For Sale",
    },
    price: {
      type: Number,
      required: [true, "Price is Required"],
    },
    discount: {
        type:Number
    },
    // type:{
    //     type:String
    // }
    language:{
        type:String,
        required:true,
    },
  },
  { timestamps: true }
);
export const Books = mongoose.model("Books", booksSchema)