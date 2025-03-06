import ContactUs from '@/components/global/ContactUs'
import React from 'react'

export const metadata = {
  title: "Contact Us | Get in Touch for Betting Tips & Support",
  description: "Have questions or need support? Contact us for inquiries about betting tips, match predictions, and expert insights. We're here to help you make informed betting decisions.",
  Keywords: ["contact us", "betting support", "betting tips help", "match predictions", "customer support", "expert betting advice"],
  alternates: {
    canonical: "hhttps://flairtips.com/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | Get in Touch for Betting Tips & Support",
    description:
      "Have questions or need support? Contact us for inquiries about betting tips, match predictions, and expert insights. We're here to help you make informed betting decisions.",
    url: "https://flairtips.com/contact-us",
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
    title: "Contact Us | Get in Touch for Betting Tips & Support",
    site:  "https://flairtips.com/contact-us",
    description:
      "Have questions or need support? Contact us for inquiries about betting tips, match predictions, and expert insights. We're here to help you make informed betting decisions.",
    images: [
      "https://flairtips.com/flair.webp",
    ],
  },
};

export default function page() {
  return (
    <ContactUs />
  )
}
