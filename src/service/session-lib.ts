import { SessionOptions } from "iron-session";

export interface SessionData {
  userName: string;
  isLoggedIn: boolean;
  email: string;
  avatarUrl: string;
}

export const defaultSession: SessionData = {
  userName: "",
  isLoggedIn: false,
  email: "",
  avatarUrl: "",
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD as string,
  cookieName: "blog-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
