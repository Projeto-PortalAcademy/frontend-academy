// src/app/layout.tsx ou src/app/RootLayout.tsx
import type { Metadata } from "next";
import "./globals.css";
import React from 'react';
import Sidebar from '../components/Sidebar/sidebar';
import Header from '../components/Header/header';

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
      <body className="flex">
        {/* Sidebar em todas as páginas */}
        <Sidebar />
        {/* Conteúdo principal da página */}
        <div className="flex-grow">
          {children}
        </div>
        <div className="flex-1">
        <Header />
        </div>
      </body>
    </html>
  );
}
