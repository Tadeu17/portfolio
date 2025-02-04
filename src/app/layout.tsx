
import type { Metadata } from "next";
import "./globals.css";
import packageJson from '../../package.json';
import Navbar from "@/components/Navbar";

const version = packageJson.version;
const siteTitle = "Tadeu Marques Portfolio";
const siteDescription = "Tadeu Marques is a frontend developer and engineering manager with extensive experience in building modern, high-performance web applications. Explore his portfolio to see projects, skills, and achievements.";
const siteUrl = "https://tadeu-marques.com";
const siteImage = "/main-background.webp";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: ['frontend', 'developer', 'engineering manager', 'engineer', 'software development'],
  authors: [{ name: "Tadeu Marques", url: siteUrl }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [{ url: siteImage, width: 1200, height: 630, alt: siteTitle }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
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
