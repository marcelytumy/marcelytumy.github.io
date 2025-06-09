import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "marcelytumy",
  description: "Experienced developer specializing in React, TypeScript, and modern web technologies. Building responsive, accessible, and performant web applications with clean code and user-focused design.",
  keywords: ["developer", "React Developer", "TypeScript", "JavaScript", "Web Development", "UI/UX", "Responsive Design", "marcelytumy"],
  authors: [{ name: "marcelytumy" }],
  creator: "marcelytumy",
  publisher: "marcelytumy",
  openGraph: {
    type: "website",
    title: "marcelytumy",
    description: "Experienced developer specializing in React, TypeScript, and modern web technologies.",
    siteName: "marcelytumy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "marcelytumy",
    description: "developer specializing in React, TypeScript, and modern web technologies.",
    creator: "@marcelytumy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://marcelytumy.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
