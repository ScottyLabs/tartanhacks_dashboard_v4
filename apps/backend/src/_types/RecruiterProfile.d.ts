import { ObjectId } from "bson";
import { Document } from "mongoose";

/**
 * Type for Bookmark Model
 */
export interface IRecruiterProfile extends Document {
  _id: ObjectId;
  event: ObjectId;
  user: ObjectId;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
}
