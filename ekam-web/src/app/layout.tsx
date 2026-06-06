import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://ekaminstituteofadvancemedicalstudies.com"),
  title: {
    default: "EKAM Institute of Advanced Medical Studies",
    template: "%s | EKAM Institute of Advanced Medical Studies",
  },
  description:
    "Where Medicine Meets Advanced Technology. Shaping the future of advanced medical education through fellowships in interventional sciences, robotic surgery, clinical innovation, and undergraduate programmes in nursing, physiotherapy, and allied health sciences.",
  keywords: [
    "EKAM",
    "EKAM Institute",
    "EKAM Institute of Advanced Medical Studies",
    "medical fellowship",
    "interventional sciences",
    "robotic surgery",
    "clinical innovation",
    "nursing programmes",
    "physiotherapy",
    "allied health sciences",
    "advanced medical education",
    "medical studies India",
  ],
  openGraph: {
    title: "EKAM Institute of Advanced Medical Studies",
    description:
      "Where Medicine Meets Advanced Technology. Shaping the future of advanced medical education through fellowships in interventional sciences, robotic surgery, and clinical innovation.",
    url: "https://ekaminstituteofadvancemedicalstudies.com",
    siteName: "EKAM Institute of Advanced Medical Studies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EKAM Institute of Advanced Medical Studies",
    description:
      "Where Medicine Meets Advanced Technology. Shaping the future of advanced medical education.",
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
