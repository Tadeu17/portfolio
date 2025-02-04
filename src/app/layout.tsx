
import type { Metadata } from "next";
import "./globals.css";
import packageJson from '../../package.json';
import Navbar from "@/components/Navbar";

const version = packageJson.version;

export const metadata: Metadata = {
  title: "Tadeu Marques Portfolio",
  description: "Portfolio of Frontend developer and manager Tadeu Marques",
  keywords: [
    "frontend",
    "developer",
    "engineering manager",
    "engineer",
    "software development"
  ],
  openGraph: {
    title: "Tadeu Marques Portfolio",
    description: "Discover my projects, skills, and experience as a frontend developer.",
    url: "https://tadeu-marques.com",
    siteName: "Tadeu Marques Portfolio",
    images: [
      {
        url: "https://tadeu-marques.com/main-background.webp",
        width: 1200,
        height: 630,
        alt: "Tadeu Marques Portfolio Background"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tadeu Marques Portfolio",
    description: "Explore my projects and frontend expertise.",
    images: ["https://tadeu-marques.com/main-background.webp"]
  },
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
