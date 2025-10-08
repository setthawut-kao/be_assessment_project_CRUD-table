import dotenv from "dotenv";
import app from "./src/app.js";
import { database } from "./src/config/database.js";

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 8080;

// Start server
(async () => {
  try {
    // Connect to database
    await database();

    // Start listening
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📦 Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (err) {
    console.error("❌ Startup error:", err.message);
    process.exit(1);
  }
})();
