import { ObjectId } from "bson";
import { Document } from "mongoose";

/**
 * Type for Bookmark Model
 */
export interface IBookmark extends Document {
  _id: ObjectId;
  event: ObjectId;
  user: ObjectId;
  participant: ObjectId;
  project: ObjectId;
  bookmarkType: ObjectId;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}
