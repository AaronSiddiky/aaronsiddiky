import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaron Siddiky — Entrepreneur, Computer Scientist, Investor",
  description:
    "Aaron Siddiky is an American entrepreneur and computer scientist. Founder & CEO of Enagrams. 2026 Venture Fellow at New Enterprise Associates (NEA). Computer Science at Columbia University.",
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "EI5dsjfZ2duC8OuVTHOwaRDDkqOdwuHlitxxM15wlWo",
  },
  metadataBase: new URL("https://www.aaronsiddiky.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aaron Siddiky — Entrepreneur, Computer Scientist, Investor",
    description:
      "Founder & CEO of Enagrams. 2026 Venture Fellow at NEA. Computer Science at Columbia University.",
    url: "https://www.aaronsiddiky.com",
    siteName: "Aaron Siddiky",
    images: [
      {
        url: "/siddikypic.png",
        width: 800,
        height: 800,
        alt: "Aaron Siddiky",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Aaron Siddiky — Entrepreneur, Computer Scientist, Investor",
    description:
      "Founder & CEO of Enagrams. 2026 Venture Fellow at NEA. Computer Science at Columbia University.",
    images: ["/siddikypic.png"],
    creator: "@AaronSiddiky",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
