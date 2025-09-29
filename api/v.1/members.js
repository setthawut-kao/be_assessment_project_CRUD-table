import express from "express";

import {
  createMember,
  deleteMember,
  editMember,
  getMembers,
} from "./controllers/reactAssController.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res
      .status(200)
      .send("Hello!, This is an Express API server for a ReactAssessment!");
  } catch (err) {
    next(err);
  }
});

router.post("/members", createMember);

router.get("/members", getMembers);

router.put("/members/:id", editMember);

router.delete("/members/:id", deleteMember);

export default router;
