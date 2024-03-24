import {
  integer,
  pgEnum,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { event } from "./event";
import { user } from "./user";

export const emailGroupEnum = pgEnum("email_group", [
  "participants_verified",
  "participants_completed",
  "participants_confirmed",
  "sponsors",
  "admins",
]);
export const emailStatusEnum = pgEnum("email_status", [
  "queued",
  "sent",
  "error",
  "deleted",
]);
export const email = pgTable("email", {
  id: serial("id").primaryKey(),
  event: integer("event")
    .notNull()
    .references(() => event.id),
  sender: integer("sender")
    .notNull()
    .references(() => user.id),
  group: emailGroupEnum("group").default("admins"),
  status: emailStatusEnum("status").default("queued"),
  subject: varchar("subject", { length: 256 }).notNull(),
  body: varchar("body", { length: 256 }).notNull(),
  sentTime: timestamp("sent_time"),
});
