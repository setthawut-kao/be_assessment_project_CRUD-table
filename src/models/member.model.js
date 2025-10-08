import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const Member = mongoose.model("Member", memberSchema);
