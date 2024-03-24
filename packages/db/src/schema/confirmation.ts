import { boolean, serial } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";

export const confirmation = pgTable("confirmation", {
  id: serial("id").primaryKey(),
  signatureLiability: boolean("signature_liability").notNull(),
  signatureCodeOfConduct: boolean("signature_code_of_conduct").notNull(),
  signaturePhotoRelease: boolean("signature_photo_release").default(false),
});
