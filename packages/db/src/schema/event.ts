import { sql } from "drizzle-orm";
import { boolean, serial, timestamp, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";

export const event = pgTable("event", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  logo: varchar("logo", { length: 256 }).notNull(),
  questions: varchar("questions", { length: 256 }).array(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  checkin: boolean("checkin").notNull(),
  projects: boolean("projects").notNull(),
  teams: boolean("teams").notNull(),
  mentors: boolean("mentors").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").default(
    sql`CURRENT_TIMESTAMP(3) on update CURRENT_TIMESTAMP(3)`,
  ),
});
