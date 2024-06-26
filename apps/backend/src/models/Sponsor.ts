import { model, Schema } from "mongoose";

import { ISponsor } from "../_types/Sponsor";
import isProduction from "../util/isProduction";

/**
 * Corporate/other sponsors with special access to public participant information
 */
const Sponsor: Schema<ISponsor> = new Schema(
  {
    name: { type: String, required: true },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  },
);

export default model<ISponsor>("Sponsor", Sponsor, "sponsors", !isProduction);
