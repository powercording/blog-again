"use server";

import { db } from "@/database/client";
import { blogUser } from "@/database/schema/userSchema";
import { eq } from "drizzle-orm";

export const findOneUser = async (email: string) => {
  const select = await db
    .select()
    .from(blogUser)
    .where(eq(blogUser.email, email));

  const user = select.length >= 1 ? select[0] : null;
  return user;
};

export const signupUser = async (email: string) => {
  const user = await findOneUser(email);
  if (user) {
    console.log("이미 존재하는 유저입니다.");
    return null;
  }
  const insert = await db.insert(blogUser).values({
    email: "갑분이@naver.com",
    name: "갑분이",
    password: "1234",
  });

  return insert;
};
