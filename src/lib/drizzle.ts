import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { pgTable, serial, text, date } from "drizzle-orm/pg-core";

export const formTable = pgTable("form_table", {
  id: serial("id").primaryKey(),
  country: text("country"),
  city: text("city"),
  countrytravelto: text("countrytravelto"),
  firstname: text("firstname"),
  lastname: text("lastname"),
  dateofbirth: date("dateofbirth"),
  gender: text("gender"),
  martialstatus: text("martialstatus"),
  passportno: text("passportno").unique(),
  confirmpassportno: text("confirmpassportno"),
  passportissuedate: date("passportissuedate"),
  passportissueplace: text("passportissueplace"),
  passportexpirydate: date("passportexpirydate"),
  visatype: text("visatype"),
  email: text("email").unique(),
  phoneno: text("phoneno"),
  nationalid: text("nationalid"),
  postionappliedfor: text("postionappliedfor"),
  other: text("other"),
});

export type InsertUser = typeof formTable.$inferInsert;
export type SelectUser = typeof formTable.$inferSelect;
export const db = drizzle(sql);
