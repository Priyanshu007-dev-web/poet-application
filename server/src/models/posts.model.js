import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:["Text", "Video", "Picture"],
        required:true
    },
    title:{
        type:String,
        trim:true,
        default:true
    },
    content:{
        type:String,
        trim:true,
        required:true
    },
    mediaUrl:{
        type:String,
        default:null
    },
    tags:{
        type:[String],
        default:[]
    },
    language:{
        type:String,
        enum:["Hindi", "English", "Urdu"],
        required:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }


},{timestamps:true})

export const Post = mongoose.model("Post", postSchema)