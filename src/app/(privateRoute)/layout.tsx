import { getSession } from "@/service/user";
import { redirect } from "next/navigation";

type PublicLayoutProps = {
  children: React.ReactElement;
};

export default async function PublicLayout({ children }: PublicLayoutProps) {
  const session = await getSession();

  // if user is not logged in, redirect to home page ( not allowed to navigate to private pages)
  if (!session.isLoggedIn) {
    redirect("/");
  }

  return <>{children}</>;
}
