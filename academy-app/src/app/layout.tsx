import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Sidebar from "../components/Sidebar/sidebar";
import Header from "../components/Header/header";

export const metadata: Metadata = {
  title: "App Academy",
  description: "Portal do Academy 2RP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          <div className="flex-grow overflow-auto p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
