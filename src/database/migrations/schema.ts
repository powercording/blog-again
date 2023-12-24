import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, serial, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const blogUser = mysqlTable("BlogUser", {
	id: serial("id").notNull(),
	name: varchar("name", { length: 64 }).notNull(),
	email: varchar("email", { length: 64 }).notNull(),
	password: varchar("password", { length: 60 }).notNull(),
	avatar: varchar("avatar", { length: 191 }),
},
(table) => {
	return {
		blogUserIdPk: primaryKey({ columns: [table.id], name: "BlogUser_id_pk"}),
		id: unique("id").on(table.id),
		blogUserEmailUnique: unique("BlogUser_email_unique").on(table.email),
	}
});