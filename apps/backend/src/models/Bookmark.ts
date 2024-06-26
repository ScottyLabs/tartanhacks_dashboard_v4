import { model, Schema } from "mongoose";

import { BookmarkType } from "../_enums/BookmarkType";
import { IBookmark } from "../_types/Bookmark";
import isProduction from "../util/isProduction";

/**
 * Checkin items, e.g. arrival, attending a workshop
 */
const Bookmark: Schema<IBookmark> = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    participant: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
    bookmarkType: {
      type: String,
      enum: Object.values(BookmarkType),
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  },
);

export default model<IBookmark>(
  "Bookmark",
  Bookmark,
  "bookmarks",
  !isProduction,
);
