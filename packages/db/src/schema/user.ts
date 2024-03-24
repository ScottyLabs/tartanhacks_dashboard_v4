import { sql } from "drizzle-orm";
import {
  integer,
  pgEnum,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { sponsor } from "./sponsor";

export const roleEnum = pgEnum("role", ["user", "judge", "admin"]);
export const statusEnum = pgEnum("status", [
  "unverified",
  "verified",
  "completed_profile",
  "admitted",
  "rejected",
  "confirmed",
  "declined",
  "waitlisted",
]);

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  externalId: varchar("external_id", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  role: roleEnum("role").default("user"),
  sponsor: integer("sponsor").references(() => sponsor.id),
  status: statusEnum("status").default("unverified"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").default(
    sql`CURRENT_TIMESTAMP(3) on update CURRENT_TIMESTAMP(3)`,
  ),
});
