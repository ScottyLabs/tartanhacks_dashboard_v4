import { ObjectId } from "bson";
import { Document } from "mongoose";

import * as TeamRequest from "../_enums/TeamRequest";

/**
 * Type for the TeamRequest model
 */
export interface ITeamRequest extends Document {
  _id: ObjectId;
  event: ObjectId;
  type: TeamRequest.TeamRequestType;
  user: ObjectId;
  team: ObjectId;
  status: TeamRequest.TeamRequestStatus;
  message?: string;
  seen: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
