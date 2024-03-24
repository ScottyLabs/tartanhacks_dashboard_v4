import { boolean, pgEnum, timestamp, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { event } from "./event";
import { team } from "./team";
import { user } from "./user";

export const TeamRequestTypeEnum = pgEnum("teamRequestType", [
  "invite",
  "join",
]);

export const TeamRequestStatusEnum = pgEnum("teamRequestStatus", [
  "pending",
  "accepted",
  "declined",
  "cancelled",
]);

export const teamRequest = pgTable("teamRequest", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  event: varchar("event", { length: 255 })
    .notNull()
    .references(() => event.id),
  type: TeamRequestTypeEnum("type").notNull(),
  user: varchar("user", { length: 255 })
    .notNull()
    .references(() => user.id),
  team: varchar("team", { length: 255 })
    .notNull()
    .references(() => team.id),
  status: TeamRequestStatusEnum("status").default("pending"),
  message: varchar("message", { length: 255 }),
  seen: boolean("seen").default(false),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});
