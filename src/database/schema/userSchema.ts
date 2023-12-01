import {
  mysqlTable,
  index,
  int,
  varchar,
  text,
  char,
  datetime,
  json,
  serial,
} from "drizzle-orm/mysql-core";
export const blogUser = mysqlTable("BlogUser", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 64 }).notNull(),
  email: varchar("email", { length: 64 }).unique().notNull(),
  password: varchar("password", { length: 256 }).notNull(),
  avatar: varchar("avatar", { length: 191 }),
  // createdAt: datetime().notNull().defaultCurrentTimestamp(),
  // updatedAt: datetime().notNull().defaultCurrentTimestamp(),
});
