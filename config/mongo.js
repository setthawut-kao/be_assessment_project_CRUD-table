import mongoose from "mongoose";

export const connectMongo = async (uri = process.env.MONGO_URI) => {
  if (!uri) throw new Error("Missing MONGO_URI or MongoDB connection string");

  // Attach event listeners BEFORE connecting
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB database");
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connected error", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });

  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.error("Initial MongoDv connection failed", err);
    throw err;
  }
};
