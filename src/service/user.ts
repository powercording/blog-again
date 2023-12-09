"use server";

import { db } from "@/database/client";
import { blogUser } from "@/database/schema/userSchema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import handler from "./handler";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, defaultSession, sessionOptions } from "./session-lib";
import { revalidatePath } from "next/cache";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.userName = defaultSession.userName;
    session.avatarUrl = defaultSession.avatarUrl;
    session.email = defaultSession.email;
  }

  return session;
};

// basic find user done.
export const findOneUser = async (email: string) => {
  const select = await db
    .select()
    .from(blogUser)
    .where(eq(blogUser.email, email));

  const user = select.length >= 1 ? select[0] : null;
  return user;
};

// basic login
export const signinUser = handler(async (email: string, password: string) => {
  const user = await findOneUser(email);

  if (!user) redirect("/auth/signin?result=failed&message=login_failed");

  const comparePassword = await bcrypt.compare(
    password,
    user?.password as string
  );

  if (!comparePassword)
    return redirect("/auth/signin?result=failed&message=login_failed");

  const session = await getSession();
  session.isLoggedIn = true;
  session.userName = user?.name as string;
  session.avatarUrl = user?.avatar as string;
  session.email = user?.email as string;

  await session.save();
  redirect("/");
});

// basic signup
export const signupUser = handler(async (email: string, password: string) => {
  const user = await findOneUser(email);

  if (user)
    return redirect("/auth/signup?result=failed&message=duplicated_email");

  const cryptPassword = await bcrypt.hash(password, 10);
  const newUser = await db.insert(blogUser).values({
    email,
    password: cryptPassword,
    name: "anonymous",
  });

  if (newUser.rowsAffected === 1) redirect("/auth/signin");
});

export const signout = async (to?: string) => {
  const session = await getSession();
  session.destroy();

  if (to) {
    revalidatePath(to);
  }

  redirect("/");
};
