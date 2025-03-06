import React from "react";
import ContactUs from "@/components/global/ContactUs";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import PricingPlans from "@/components/home/PricingPlans";
import Subscription from "@/components/home/Subscription";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "About Us - Your Trusted Betting Tips & Predictions Source",
  description: "Learn more about our mission, expertise, and commitment to providing accurate betting tips and match predictions. Discover how we help bettors make informed decisions with data-driven insights.",
  Keywords: ["about us", "betting tips", "match predictions", "todays tips", "betting insights", "expert predictions"],
  alternates: {
    canonical: "https://flairtips.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Us - Your Trusted Betting Tips & Predictions Source",
    description:
      "Learn more about our mission, expertise, and commitment to providing accurate betting tips and match predictions. Discover how we help bettors make informed decisions with data-driven insights.",
    url: "https://flairtips.com/about",
    type: "website",
    images: [
      {
        url: "https://flairtips.com/flair.webp",
        width: 1200,
        height: 630,
        alt: "Flairtips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Your Trusted Betting Tips & Predictions Source",
    site:  "https://flairtips.com/about",
    description:
      "Learn more about our mission, expertise, and commitment to providing accurate betting tips and match predictions. Discover how we help bettors make informed decisions with data-driven insights.",
    images: [
      "https://flairtips.com/flair.webp",
    ],
  },
};
export default function Home() {


  return (
    <div className="text-black lg:py-5 max-md:px-0 max-2xl:px-4">
      <HeroSection />
      <Features />
      {/* <Unlock /> */}
      <Testimonials />
      <PricingPlans />
      <Team />
      <ContactUs />
      <Subscription />

    </div>
  );
}
