"use client";

import "./globals.css";
import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../components/Sidebar/sidebar";
import Header from "../components/Header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Verifica se a rota é "/" e ignora o layout padrão
  const isLoginPage = pathname === "/";

  if (isLoginPage) {
    return (
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="pt-br">
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
