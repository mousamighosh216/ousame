"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideNavbar =
    pathname.startsWith("/blog/") && pathname !== "/blog";

  return (
    <>
      {!hideNavbar && <Header />}
      {children}
      {!hideNavbar && <Footer />}
    </>
  );
}