import { relations } from "drizzle-orm";
import { boolean, integer, pgEnum, serial, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { confirmation } from "./confirmation";
import { event } from "./event";
import { sponsor } from "./sponsor";
import { user } from "./user";

export const CMUCollegeEnum = pgEnum("cmu_college", [
  "scs",
  "cit",
  "cfa",
  "dietrich",
  "mcs",
  "tepper",
  "heinz",
]);

export const CollegeLevelEnum = pgEnum("college_level", [
  "undergraduate",
  "masters",
  "doctorate",
  "other",
]);

export const GenderEnum = pgEnum("gender", [
  "male",
  "female",
  "prefer_not_to_say",
  "other",
]);

export const EthnicityEnum = pgEnum("ethnicity", [
  "native_american",
  "asian",
  "black",
  "pacific_islander",
  "white",
  "hispanic",
  "prefer_not_to_say",
  "other",
]);

export const HackathonExperienceEnum = pgEnum("hackathon_experience", [
  "zero",
  "one_to_three",
  "four_plus",
]);

export const WorkPermissionEnum = pgEnum("work_permission", [
  "citizen",
  "sponsorship",
  "no_sponsorship",
]);

export const ShirtSizeEnum = pgEnum("shirt_size", [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "wxs",
  "ws",
  "wm",
  "wl",
  "wxl",
  "wxxl",
]);

export const RegionEnum = pgEnum("region", ["rural", "suburban", "urban"]);

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  event: integer("event")
    .notNull()
    .references(() => event.id),
  user: integer("user")
    .notNull()
    .references(() => user.id),
  firstName: varchar("first_name", { length: 256 }).notNull(),
  middleName: varchar("middle_name", { length: 256 }),
  lastName: varchar("last_name", { length: 256 }).notNull(),
  displayName: varchar("display_name", { length: 256 }).notNull(),
  age: integer("age"),
  school: varchar("school", { length: 256 }).notNull(),
  college: CMUCollegeEnum("college"),
  collegeLevel: CollegeLevelEnum("college_level"),
  graduationYear: integer("graduation_year").notNull(),
  gender: GenderEnum("gender").notNull(),
  genderOther: varchar("gender_other", { length: 256 }),
  ethnicity: EthnicityEnum("ethnicity"),
  totalPoints: integer("total_points").default(0),
  major: varchar("major", { length: 256 }),
  linkedin: varchar("linkedin", { length: 256 }),
  hackathonExperience: HackathonExperienceEnum("hackathon_experience"),
  workPermission: WorkPermissionEnum("work_permission"),
  workLocation: varchar("work_location", { length: 256 }),
  workStrengths: varchar("work_strengths", { length: 256 }),
  resume: varchar("resume", { length: 256 }),
  github: varchar("github", { length: 256 }).notNull(),
  design: varchar("design", { length: 256 }),
  website: varchar("website", { length: 256 }),
  essays: varchar("essays", { length: 256 }).array(),
  dietaryRestrictions: varchar("dietary_restrictions", { length: 256 }).array(),
  shirtSize: ShirtSizeEnum("shirt_size"),
  wantHardware: boolean("want_hardware"),
  address: varchar("address", { length: 256 }),
  region: RegionEnum("region"),
  confirmation: integer("confirmation").references(() => confirmation.id),
  attendingPhysically: boolean("attending_physically").default(false),
  notes: varchar("notes", { length: 256 }),
});

export const profileRelations = relations(profile, ({ many }) => ({
  sponsorRanking: many(sponsor),
}));
