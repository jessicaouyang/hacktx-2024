import { pgEnum, pgTableCreator, text, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

const createTable = pgTableCreator((name) => `uncle_iroh_${name}`);

const getCreatedAtColumn = () => timestamp("created_at").defaultNow().notNull();
const getUpdatedAtColumn = () =>
  timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => sql`current_timestamp`)
    .notNull();

export const roleEnum = pgEnum("role", [
  "user",
  "assistant",
  "function",
  "data",
  "system",
  "tool",
]);

export const messageTable = createTable("messages", {
  id: text("id").primaryKey(),
  user_id: text("user_id").notNull(),
  role: roleEnum("role").notNull(),
  content: text("content").notNull(),
  date: timestamp("date", { mode: "date" }).notNull(),
  created_at: getCreatedAtColumn(),
  updated_at: getUpdatedAtColumn(),
});
