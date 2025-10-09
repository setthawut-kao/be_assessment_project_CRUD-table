import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler.js";
import setupRoutes from "./routes/index.js";

const app = express();

// CORS Configuration
const corsOptions = {
  origin: [
    process.env.FRONTEND_URL,
    "http://localhost:5173",
    "https://fe-assessment-project-crud-table.vercel.app",
  ],
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running...",
    environment: process.env.NODE_ENV || "development",
  });
});

// API Routes
setupRoutes(app);

// 404 Handler
app.use((req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.status = 404;
  next(error);
});

// Error Handler
app.use(errorHandler);

export default app;
