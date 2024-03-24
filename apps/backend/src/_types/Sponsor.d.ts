import { ObjectId } from "bson";
import { Document } from "mongoose";

/**
 * Type for the Sponsor model
 */
export interface ISponsor extends Document {
  _id: ObjectId;
  name: string;
  event: ObjectId;
  createdAt: Date;
  updatedAt?: Date;
}
