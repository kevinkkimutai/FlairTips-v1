'use client';

import React, { useEffect, useState } from "react";
import ContactUs from "@/components/global/ContactUs";
import SuscriptionModal from "@/components/global/SuscriptionModal";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import PricingPlans from "@/components/home/PricingPlans";
import Subscription from "@/components/home/Subscription";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import { selectUser } from "@/redux/reducers/AuthReducers";
import { useSelector } from "react-redux";
import LoginModal from "@/components/global/LoginModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timerActive, setTimerActive] = useState(false); // Track the 3-minutes delay
  const user = useSelector(selectUser);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      if (!user || user.is_subscribed !== 1) {
        setIsModalOpen(true);
      }
    }, 2000);

    return () => clearTimeout(initialTimeout);
  }, [user]);

  useEffect(() => {
    if (!timerActive && !isModalOpen) {
      const delayInterval = setInterval(() => {
        if (!user || user.is_subscribed !== 1) {
          setIsModalOpen(true);
        }
      }, 3 * 60 * 1000); 

      setTimerActive(true);

      return () => clearInterval(delayInterval);
    }
  }, [isModalOpen, timerActive, user]);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimerActive(false);
  };

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
      <SuscriptionModal isOpen={isModalOpen} onClose={closeModal} />
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
