import mongoose from "mongoose";

const starStatusSchema = new mongoose.Schema({
    starId:{
        type:String,
        unique:true,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"        
    },
    // approvedBy:{

    // }
    status:{
        type:String
    },

}, {timestamps:true});

export const StarStatus = mongoose.model("StarStatus", starStatusSchema)