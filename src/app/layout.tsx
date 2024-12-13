import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { gilroy } from "../../public/fonts/config/config";

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
    <html lang="en">
      <body className={`${gilroy.className}`}>
        <Sidebar />
        <div className="container">
          <main>{children}</main>
          <footer className={""}>dsds</footer>
        </div>
      </body>
    </html>
  );
}
