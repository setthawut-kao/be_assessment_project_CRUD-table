import mongoose from "mongoose";

export const database = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri)
    throw new Error("Missing MONGO_URI or MongoDB in environment variables");

  mongoose.connection.on("connected", () => {
    console.log("✅ Connected to MongoDB database");
  });

  mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB connected error", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB disconnected");
  });

  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.error("❌ Initial MongoDB connection failed", err.message);
    throw err;
  }
};
