import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as auth from "./schema/auth";
import * as bookmark from "./schema/bookmark";
import * as checkin from "./schema/checkin";
import * as checkinItem from "./schema/checkinItem";
import * as confirmation from "./schema/confirmation";
import * as email from "./schema/email";
import * as event from "./schema/event";
import * as post from "./schema/post";
import * as prize from "./schema/prize";
import * as profile from "./schema/profile";
import * as project from "./schema/project";
import * as recruiter from "./schema/recruiter";
import * as scheduleItem from "./schema/scheduleItem";
import * as settings from "./schema/settings";
import * as sponsor from "./schema/sponsor";
import * as team from "./schema/team";
import * as teamRequest from "./schema/teamRequest";
import * as user from "./schema/user";

export const schema = {
  ...auth,
  ...post,
  ...user,
  ...profile,
  ...team,
  ...teamRequest,
  ...event,
  ...checkin,
  ...checkinItem,
  ...prize,
  ...project,
  ...sponsor,
  ...recruiter,
  ...email,
  ...confirmation,
  ...settings,
  ...scheduleItem,
  ...bookmark,
};

export { pgTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const connection = postgres(process.env.DATABASE_URL!);

export const db = drizzle(connection, { schema });
