"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import MobileBottomBar from "./MobileBottomBar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Define the routes where the Navbar and Footer should be hidden
  const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];
  const hideNavbarFooter = authRoutes.includes(pathname);

  return (
    <div className="w-full">
      {!hideNavbarFooter && <Navbar />}
      <div className="max-w-[1280px] mx-auto max-2xl:px- min-h-sreen max-md:mb-20">{children}</div>
      <div className="max-md:hidden">
      {!hideNavbarFooter && <Footer />}
      </div>
      <div className="md:hidden fixed bottom-0">
<MobileBottomBar />
      </div>
    </div>
  );
}
