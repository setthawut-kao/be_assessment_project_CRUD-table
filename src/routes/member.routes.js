import express from "express";

import {
  createMember,
  deleteMember,
  editMember,
  getMembers,
} from "../controllers/member.controller.js";

const router = express.Router();

router.post("/", createMember);
router.get("/", getMembers);
router.put("/:id", editMember);
router.delete("/:id", deleteMember);

export default router;
