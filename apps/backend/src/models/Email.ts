import { model, Schema } from "mongoose";

import { EmailGroup, EmailStatus } from "../_enums/Email";
import { IEmail } from "../_types/Email";
import isProduction from "../util/isProduction";

/**
 * Email logs for sent emails
 */
const Email: Schema<IEmail> = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    groups: {
      type: [
        {
          type: String,
          enum: Object.values(EmailGroup),
          default: EmailGroup.ADMINS,
          required: true,
        },
      ],
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    sendTime: Number,
    status: {
      type: String,
      enum: Object.values(EmailStatus),
      default: EmailStatus.QUEUED,
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

export default model<IEmail>("Email", Email, "emails", !isProduction);
