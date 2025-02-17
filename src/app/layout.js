import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/services/ClientProvider";
import LayoutWrapper from "@/components/global/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlairTips",
  description: "FlairTips description",
  keywords: ["betting", "Tips", "predictions", "todays predictions", "Todays tips", "Todays matches"],
  alternates: {
    canonical: "hhttps://flairtips.com",
    languages: {
      "en-US": "https://flairtips.com/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Flairtips",
    description:
      "FlairTips Predictions",
    url: "https://flairtips.com",
    type: "website",
    images: [
      {
        url: "https://flairtips.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "FlairTips",
      },
    ],
  },
  twitter: {
    card: "FlairTips",
    title: "Flaitips Predictions",
    site:  "https://flairtips.com",
    description:
      "FlairTips Predictions",
    images: [
      "https://flairtips.com/favicon.ico",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ClientProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ClientProvider>
      </body>
    </html>
  );
}
