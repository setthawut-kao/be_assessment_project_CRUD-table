import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
