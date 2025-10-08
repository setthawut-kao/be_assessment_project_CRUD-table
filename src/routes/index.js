import memberRoutes from "./member.routes.js";

export default function setupRoutes(app) {
  app.use("/api/members", memberRoutes);
}
