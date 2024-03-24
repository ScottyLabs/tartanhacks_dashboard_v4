import {
  integer,
  pgEnum,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { project } from "./project";
import { user } from "./user";

export const bookmarkTypeEnum = pgEnum("bookmarkEnum", [
  "participant",
  "project",
]);

export const bookmark = pgTable("bookmark", {
  id: serial("id").primaryKey(),
  user: integer("user").references(() => user.id),
  participant: integer("participant").references(() => user.id),
  project: varchar("project", { length: 255 })
    .notNull()
    .references(() => project.id),
  type: bookmarkTypeEnum("type").notNull(),
  description: varchar("description", { length: 255 }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});
