import { ObjectId } from "bson";
import { Document } from "mongoose";

/**
 * Type for the Team model
 */
export interface ITeam extends Document {
  _id: ObjectId;
  event: ObjectId;
  name: string;
  description: string;
  admin: ObjectId;
  members: ObjectId[];
  visible: boolean;
  createdAt: Date;
  updatedAt: Date;
}
