import { integer, serial, timestamp } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { checkinItem } from "./checkinItem";
import { event } from "./event";
import { user } from "./user";

export const checkin = pgTable("checkin", {
  id: serial("id").primaryKey(),
  event: integer("event")
    .notNull()
    .references(() => event.id),
  user: integer("user")
    .notNull()
    .references(() => user.id),
  item: integer("item")
    .notNull()
    .references(() => checkinItem.id),
  createdAt: timestamp("created_at").defaultNow(),
});
