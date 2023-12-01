import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as userSchema from "@/database/schema/userSchema";

// import schema for type checking
// import * as userSchema from "@/lib/UserSchema/schema";
// import * as postSchema from "@/lib/PostSchema/schema";
// import * as tokenSchema from "@/lib/TokenSchema/schema";
// import * as commentSchema from "@/lib/CommentSchema/schema";

const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

export const db = drizzle(connection, {
  schema: {
    ...userSchema,
  },
});
