"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Define the routes where the Navbar and Footer should be hidden
  const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];
  const hideNavbarFooter = authRoutes.includes(pathname);

  return (
    <div className="w-full">
      {!hideNavbarFooter && <Navbar />}
      <div className="max-w-[1280px] mx-auto max-2xl:px-4 min-h-screen">{children}</div>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}
