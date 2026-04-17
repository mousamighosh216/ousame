"use client";

import DesktopNavBar from "../ui/DesktopNavBar";
import MobileNavBar from "../ui/MobileNavBar";

export default function Header() {
    return (
        <>
        {/* 💻 Desktop */}
      <div className="hidden md:block">
        <DesktopNavBar/>
      </div>

      {/* 📱 Mobile */}
      <div className="md:hidden">
        <MobileNavBar />
      </div>
        </>
    )
}
