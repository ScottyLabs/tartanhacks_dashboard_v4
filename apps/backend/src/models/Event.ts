import { model, Schema } from "mongoose";

import { IEvent } from "../_types/Event";
import isProduction from "../util/isProduction";

/**
 * Schema for entire events e.g. TartanHacks, WDW
 * Added to model to support creating cross-event backend
 */
const Event: Schema<IEvent> = new Schema(
  {
    name: { type: String, required: true },
    website: { type: String, required: true },
    startTime: Number,
    endTime: Number,
    enableCheckin: { type: Boolean, required: true },
    enableProjects: { type: Boolean, required: true },
    enableTeams: { type: Boolean, required: true },
    enableSponsors: { type: Boolean, required: true },
    logoUrl: String,
    essayQuestions: [String],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  },
);

export default model<IEvent>("Event", Event, "events", !isProduction);
