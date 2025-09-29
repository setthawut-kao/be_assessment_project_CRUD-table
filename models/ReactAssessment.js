import { Schema, model } from "mongoose";

const ReactAssessmentSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  position: { type: String, required: true },
  createOn: { type: Date, default: new Date().getTime() },
});

export const ReactAssSchema = model("ReactAssSchema", ReactAssessmentSchema);
