import mongoose from "mongoose";

const bookReviewsSchema = new mongoose.Schema(
  {
    // userId reviewId rating BookId ReviewText createdAt
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviewId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    bookID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },

    reviewText: {
      type: String,
    },
  },
  { timestamps: true }
);

export const BookReviews = mongoose.model("BookReviews", bookReviewsSchema);
