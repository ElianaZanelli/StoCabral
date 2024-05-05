import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from 'react'
import Header from "@/components/widgets/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sargento Cabral",
  description: "Sargento Cabral",
};

export default function RootLayout({children,}: {children:
   ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-black text-gray-400 ${inter.className}
      `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
