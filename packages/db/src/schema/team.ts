import { relations } from "drizzle-orm";
import { boolean, serial, timestamp, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { user } from "./user";

export const team = pgTable("table", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).unique().notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  visible: boolean("visible").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const teamRelations = relations(team, ({ one, many }) => ({
  admin: one(user),
  members: many(user),
}));
