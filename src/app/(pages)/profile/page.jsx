import ProfileCompiler from "@/components/profile/ProfileCompiler";
import React from "react";

export const metadata = {
  title: "Profile | FlairTips",
  description: "FlairTips description",
  keywords: ["betting", "Tips", "predictions", "todays predictions", "Todays tips", "Todays matches"],
  alternates: {
    canonical: "hhttps://flairtips.com/profile",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Profile | FlairTips",
    description:
      "FlairTips Predictions",
    url: "https://flairtips.com/profile",
    type: "website",
    images: [
      {
        url: "https://flairtips.com/flair.webp",
        width: 1200,
        height: 630,
        alt: "FlairTips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profile | FlairTips",
    site:  "https://flairtips.com/profile",
    description:
      "FlairTips Predictions",
    images: [
      "https://flairtips.com/flair.webp",
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
