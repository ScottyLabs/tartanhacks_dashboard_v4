import { boolean, integer, timestamp, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { event } from "./event";

export const settings = pgTable("settings", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  event: varchar("event", { length: 255 })
    .notNull()
    .references(() => event.id),
  timeOpen: timestamp("timeOpen").notNull(),
  timeClose: timestamp("timeClose").notNull(),
  timeConfirm: timestamp("timeConfirm").notNull(),
  enableWhitelist: boolean("enableWhitelist"),
  whitelistedEmails: varchar("whitelistedEmails", { length: 255 }).array(),
  maxParticipants: integer("maxParticipants"),
  autoWaitlist: boolean("autoWaitlist"),
  waitlistText: varchar("waitlistText", { length: 255 }),
  acceptanceText: varchar("acceptanceText", { length: 255 }),
  confirmationText: varchar("confirmationText", { length: 255 }),
  allowMinors: boolean("allowMinors"),
  maxTeamSize: integer("maxTeamSize"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});
