import { sql } from "drizzle-orm";
import { integer, serial, timestamp, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { event } from "./event";

export const sponsor = pgTable("sponsor", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  event: integer("event")
    .notNull()
    .references(() => event.id),
  // logo: varchar("logo", { length: 256 }).notNull(),
  // website: varchar("website", { length: 256 }).notNull(),
  // tier: varchar("tier", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").default(
    sql`CURRENT_TIMESTAMP(3) on update CURRENT_TIMESTAMP(3)`,
  ),
});
