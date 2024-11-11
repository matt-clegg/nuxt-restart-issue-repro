import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("users", {
  id: integer("id").primaryKey({autoIncrement: true}),
  name: text("name").notNull()
})