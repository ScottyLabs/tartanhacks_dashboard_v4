import { model, Schema } from "mongoose";

import { ITeam } from "../_types/Team";
import isProduction from "../util/isProduction";

/**
 * A team with a single admin and other members
 */
const Team: Schema<ITeam> = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    name: { type: String, required: true, unique: true },
    description: { type: String },
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      required: true,
    },
    visible: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    autoIndex: true,
  },
);

Team.index({ name: "text" });

export default model<ITeam>("Team", Team, "teams", !isProduction);
