"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const authRoutes = ["/login", "/register"]; 
  const hideNavbarFooter = authRoutes.includes(pathname);

  return (
    <div className="w-full">
      {!hideNavbarFooter && <Navbar />}
      <div className="max-w-[1280px] mx-auto">{children}</div>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}
