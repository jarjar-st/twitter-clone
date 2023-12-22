import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import SideNav from "./_components/SideNav";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Sup?",
  description: "A simple social media app built with Next.js and TRPC",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
      <SessionProvider session={session}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <div className=" container mx-auto flex items-start">
            <SideNav />
            <div className=" min-h-screen flex-grow border-x">
              {children}
            </div>
          </div>
        </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
