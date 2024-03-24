import {
  boolean,
  integer,
  pgEnum,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { event } from "./event";

export const checkinAccessLevelEnum = pgEnum("checkin_access_level", [
  "all",
  "sponsors_only",
  "participants_only",
  "admins_only",
]);

export const checkinItem = pgTable("checkin_item", {
  id: serial("id").primaryKey(),
  event: integer("event")
    .notNull()
    .references(() => event.id),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  points: integer("points").default(0),
  accessLevel: checkinAccessLevelEnum("access_level").default("all"),
  active: boolean("active").default(true),
  enableSelfCheckin: boolean("enable_self_checkin").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
