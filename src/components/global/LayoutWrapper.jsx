"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import MobileBottomBar from "./MobileBottomBar";
import SuscriptionModal from "./SuscriptionModal";
import LoginModal from "./LoginModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/reducers/AuthReducers";
import useAuthTimeout from "@/utils/useAuthTimeout";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Define the routes where the Navbar, Footer, and Modals should be hidden
  const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];
  const hideNavbarFooter = authRoutes.includes(pathname);
  const hideModals = hideNavbarFooter;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  const user = useSelector(selectUser);

  useEffect(() => {
    if (!hideModals) {
      const initialTimeout = setTimeout(() => {
        if (user && user?.is_subscribed !== 0) {
          setIsModalOpen(true);
        }
        if (!user) {
          setLoginModalOpen(true);
        }
      }, 2000);

      return () => clearTimeout(initialTimeout);
    }
  }, [user, hideModals]);

  useEffect(() => {
    if (!hideModals && !timerActive && !isModalOpen) {
      const delayInterval = setInterval(() => {
        if (user && user?.is_subscribed !== 1) {
          setIsModalOpen(true);
        }
      }, 3 * 60 * 1000); 

      setTimerActive(true);

      return () => clearInterval(delayInterval);
    }
  }, [isModalOpen, timerActive, user, hideModals]);

  const closeModal = () => {
    setIsModalOpen(false);
    setLoginModalOpen(false);
    setTimerActive(false);
  };
  useAuthTimeout()
  return (
    <div className="w-full">
      {!hideNavbarFooter && <Navbar />}
      <div className="max-w-[1280px] mx-auto max-2xl:px-4  max-md:mb-20">
        {children}
        {!hideModals && (
          <>
            <SuscriptionModal isOpen={isModalOpen} onClose={closeModal} />
            {!user && <LoginModal isOpen={loginModalOpen} onClose={closeModal} />}
          </>
        )}
      </div>
      {!hideNavbarFooter && (
        <>
          <div className="max-md:hidden">
            <Footer />
          </div>
          <div className="md:hidden fixed bottom-0">
            <MobileBottomBar />
          </div>
        </>
      )}
    </div>
  );
}
