// Engagement.model.js
import mongoose from "mongoose";

const engagementSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: ["LIKE", "COMMENT", "REPOST", "REPORT"],
      required: true,
    },

    commentText: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

engagementSchema.index({
    post:1,
    userid:1,
    Type:1
},{unique:true})

export const Engagement = mongoose.model("Engagement", engagementSchema);
