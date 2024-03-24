import { integer, serial, timestamp, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { event } from "./event";
import { project } from "./project";
import { sponsor } from "./sponsor";

export const prize = pgTable("prize", {
  id: serial("id").primaryKey(),
  event: integer("event")
    .notNull()
    .references(() => event.id),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  eligibility: varchar("eligibility", { length: 256 }),
  provider: integer("provider").references(() => sponsor.id),
  winner: integer("winner").references(() => project.id),
  createdAt: timestamp("created_at").defaultNow(),
});
