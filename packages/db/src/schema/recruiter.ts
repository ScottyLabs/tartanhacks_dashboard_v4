import { integer, serial, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { event } from "./event";
import { user } from "./user";

export const recruiter = pgTable("recruiter", {
  id: serial("id").primaryKey(),
  event: integer("event")
    .notNull()
    .references(() => event.id),
  user: integer("user")
    .notNull()
    .references(() => user.id),
  firstName: varchar("firstName", { length: 255 }),
  lastName: varchar("lastName", { length: 255 }),
});
