import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { prize } from "./prize";
import { team } from "./team";

export const project = pgTable("project", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  url: varchar("url", { length: 256 }),
  location: varchar("location", { length: 256 }),
  slides: varchar("slides", { length: 256 }),
  video: varchar("video", { length: 256 }),
  team: integer("team")
    .notNull()
    .references(() => team.id),
  presentingVirtually: boolean("presenting_virtually").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const projectRelations = relations(project, ({ many }) => ({
  prizes: many(prize),
}));
