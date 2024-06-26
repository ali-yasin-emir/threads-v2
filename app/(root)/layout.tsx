import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "/components/Topbar";
import Leftbar from "/components/Leftbar";
import Rightbar from "/components/Rightbar";
import Bottombar from "/components/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <Leftbar />
          <div className="bg-gray-700 min-h-screen flex justify-center pt-40 px-96 max-xl:px-72 max-lg:px-56 max-md:px-12">
            <div className="flex flex-col w-[1400px] gap-9 max-md:items-center pb-24">
              {children}
            </div>
          </div>
          <Rightbar />
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
