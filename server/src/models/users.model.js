import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN", "SUPER_ADMIN"], // 👈 enum
      default: "USER",
    },
    isStar: {
      type: Boolean,
      default: false,
    },
    bio: {
      type: String,
    },
    avatarUrl: {
      type: String, // claudinary URL
      default: "",
    },
    preferredLanguage: {
      type: String,
      defaul: "English",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema)