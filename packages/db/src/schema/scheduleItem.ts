import {
  boolean,
  integer,
  pgEnum,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { event } from "./event";

export const platformEnum = pgEnum("platformEnum", [
  "in_person",
  "zoom",
  "hop_in",
  "discord",
  "youtube",
  "hybrid",
  "other",
]);

export const scheduleItem = pgTable("scheduleItem", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  event: integer("event")
    .notNull()
    .references(() => event.id),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  startTime: timestamp("startTime").notNull(),
  endTime: timestamp("endTime").notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  lat: varchar("lat", { length: 255 }),
  lng: varchar("lng", { length: 255 }),
  platform: platformEnum("platform").default("in_person"),
  platformURL: varchar("platformURL", { length: 255 }),
  active: boolean("active").default(true),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});
