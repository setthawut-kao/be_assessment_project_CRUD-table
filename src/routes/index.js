import userRoutes from "./user.route.js";

export default function setupRoutes(app) {
  app.use("/api/users", userRoutes);
}
