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
  title: "Next JS",
  description: "Nextjs description",
  keywords: ["betting", "Tips", "predictions", "todays predictions", "Todays tips", "Todays matches"],
  alternates: {
    canonical: "hhttps://nextjs.com",
    languages: {
      "en-US": "https://nextjs.com/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nextjs",
    description:
      "Nextjs Predictions",
    url: "https://nextjs.com",
    type: "website",
    images: [
      {
        url: "https://nextjs.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Nextjs",
      },
    ],
  },
  twitter: {
    card: "Nextjs",
    title: "Flaitips Predictions",
    site:  "https://nextjs.com",
    description:
      "Nextjs Predictions",
    images: [
      "https://nextjs.com/favicon.ico",
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
