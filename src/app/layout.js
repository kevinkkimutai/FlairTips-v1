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
  title: "The Ultimate Betting Tips & Predictions Platform",
  description: "Get expert betting tips, accurate match predictions, and today's top picks with our flairtips platform. Stay ahead with real-time updates and winning insights for all your favorite matches.",
  keywords: ["betting", "Tips", "predictions", "todays predictions", "Todays tips", "Todays matches"],
  alternates: {
    canonical: "https://flairtips.com",
    languages: {
      "en-US": "https://flairtips.com/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "The Ultimate Betting Tips & Predictions Platform",
    description:
      "Get expert betting tips, accurate match predictions, and today's top picks with our flairtips platform. Stay ahead with real-time updates and winning insights for all your favorite matches.",
    url: "https://flairtips.com",
    type: "website",
    images: [
      {
        url: "https://flairtips.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Flairtips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ultimate Betting Tips & Predictions Platform",
    site:  "https://flairtips.com",
    description:
      "Get expert betting tips, accurate match predictions, and today's top picks with our flairtips platform. Stay ahead with real-time updates and winning insights for all your favorite matches.",
    images: [
      "https://flairtips.com/flair.webp",
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
