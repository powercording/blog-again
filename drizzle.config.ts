import { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path:
    process.env.NODE_ENV === "production" ? ".env.production" : ".env.local",
});

export default {
  schema: ["./src/database/schema/userSchema.ts"],
  out: "./src/database/migrations",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DATABASE_URL as string,
  },
} satisfies Config;
