"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTime } from "@/hooks/useTime";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function DesktopNavbar() {
  const pathname = usePathname();
  const time = useTime();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg">
        
        {/* Time pill */}
        <div className="px-4 py-1.5 rounded-full bg-white/5 text-sm text-white/70">
          {time || "--:--"}
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm transition-all duration-200",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}