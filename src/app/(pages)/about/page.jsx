'use client';

import React from "react";
import ContactUs from "@/components/global/ContactUs";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import PricingPlans from "@/components/home/PricingPlans";
import Subscription from "@/components/home/Subscription";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";


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
