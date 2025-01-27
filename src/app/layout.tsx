
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Tadeu Marques Portfolio",
  description: "Portfolio of Frontend developer and manager Tadeu Marques",
  keywords: ['frontend', 'developer', 'engineering manager', 'engineer', 'software development']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
