
import type { Metadata } from "next";
import "./globals.css";
import packageJson from '../../package.json';
import Navbar from "@/components/Navbar";

const version = packageJson.version;

export const metadata: Metadata = {
  title: "Tadeu Marques Portfolio",
  description: "Portfolio of Frontend developer and manager Tadeu Marques",
  keywords: ['frontend', 'developer', 'engineering manager', 'engineer', 'software development'],
  other: {
    version
  }
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
