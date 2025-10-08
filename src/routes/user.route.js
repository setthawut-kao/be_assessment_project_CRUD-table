import express from "express";

import {
  createUser,
  deleteUser,
  editUser,
  getUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
