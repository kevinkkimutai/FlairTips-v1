import ProfileCompiler from "@/components/profile/ProfileCompiler";
import React from "react";

export const metadata = {
  title: "Profile | FlairTips",
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
    title: "Profile | FlairTips",
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
    title: "Profile | FlairTips",
    site:  "https://flairtips.com",
    description:
      "FlairTips Predictions",
    images: [
      "https://flairtips.com/favicon.ico",
    ],
  },
};
export default function page() {
  return (
    <div className="text-black lg:py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
     <ProfileCompiler />
    </div>
  );
}
