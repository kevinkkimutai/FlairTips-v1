import PricingPlans from '@/components/home/PricingPlans'
import React from 'react'

export const metadata = {
  title: "Pricing Plans | Affordable Betting Tips & Predictions",
  description: "Explore our flexible pricing plans for premium betting tips and expert match predictions. Choose the best plan that fits your needs and start making informed betting decisions today.",
  Keywords: ["pricing plans", "betting tips subscription", "premium predictions", "betting membership", "affordable betting tips", "expert betting insights"],
  alternates: {
    canonical: "https://flairtips.com/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pricing Plans | Affordable Betting Tips & Predictions",
    description:
      "Explore our flexible pricing plans for premium betting tips and expert match predictions. Choose the best plan that fits your needs and start making informed betting decisions today.",
    url: "https://flairtips.com/pricing",
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
    title: "Pricing Plans | Affordable Betting Tips & Predictions",
    site:  "https://flairtips.com/pricing",
    description:
      "Explore our flexible pricing plans for premium betting tips and expert match predictions. Choose the best plan that fits your needs and start making informed betting decisions today.",
    images: [
      "https://flairtips.com/flair.webp",
    ],
  },
};
export default function page() {
  return (
    <div className="text-black lg:py-5 max-md:px-0 max-2xl:px-4">
      <PricingPlans />
    </div>
  )
}
