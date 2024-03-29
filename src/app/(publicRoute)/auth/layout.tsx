import { getSession } from "@/service/user";
import { redirect } from "next/navigation";
import React from "react";

type PublicLayoutProps = {
  children: React.ReactElement;
};

export default async function PublicLayout({ children }: PublicLayoutProps) {
  const session = await getSession();

  // if user is logged in, redirect to home page ( no need to navigate to login page )
  if (session.isLoggedIn) {
    redirect("/");
  }

  return <>{children}</>;
}
