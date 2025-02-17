import ContactUs from '@/components/global/ContactUs'
import React from 'react'

export const metadata = {
  title: "Contact-Us | FlairTips",
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
    title: "Contact-Us | FlairTips",
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
    title: "Contact-Us | FlairTips",
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
    <ContactUs />
  )
}
