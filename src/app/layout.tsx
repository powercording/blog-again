import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en" className="dark text-foreground bg-background ">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="w-screen h-[100dvh]">
        <Providers className="w-full flex flex-col items-center">
          <TopNavBar className={""} />
          <main className="w-full flex flex-col items-center h-full lg:w-2/3 xl:w-1/2 px-2">
            {children}
            {modal}
          </main>
        </Providers>
      </body>
    </html>
  );
}
