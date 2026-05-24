/**
 * EKAM Design System — Example Root Layout
 *
 * Copy this into your Next.js project at src/app/layout.tsx.
 * It loads the three fonts that define the design system's typography.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

/* ── Font Loading ── */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

/* ── Metadata (customize per project) ── */

export const metadata: Metadata = {
  title: "Your Project Name",
  description: "Your project description.",
};

/* ── Layout ── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
