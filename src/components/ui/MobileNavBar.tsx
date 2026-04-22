"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTime } from "@/hooks/useTime";
import { useState } from "react";
import MoreModal from "./PopUp";
import {
  Home,
  Folder,
  BookOpen,
  MoreHorizontal,
  Briefcase,
} from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "home" },
  { href: "/projects", icon: Folder, label: "projects" },
  { href: "/work", icon: Briefcase, label: "work" },
  { href: "/blog", icon: BookOpen, label: "blog" },
  { href: "/more", icon: MoreHorizontal, label: "more" },
];

export default function MobileDockNav() {
  const pathname = usePathname();
  const time = useTime();
  const [moreOpen, setMoreOpen] = useState(false);
  
  const current =
    navItems.find((item) => item.href === pathname)?.label || "home";

  return (
    <>
      {/* 🔝 Top Indicator */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10  text-white text-sm flex items-center gap-2">
          <span className="capitalize">{current}</span>
          <span className="opacity-50">•</span>
          <span className="opacity-70 lowercase">
            {time || "--:--"}
          </span>
        </div>
      </div>

      {/* 🔽 Bottom Dock */}
      <div className="fixed bottom-0 left-1/2 w-full -translate-x-1/2 z-50 md:hidden">
        <div className="flex items-center justify-between px-25 py-3 w-full  bg-black/70 backdrop-blur-md border border-white/10 shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            if (item.label === "more") {
            return (
              <button
              key={item.href}
              onClick={() => setMoreOpen(true)}
              className="relative flex flex-col items-center group"
              >
              <Icon
              size={18}
              className="text-white/50 group-hover:text-white"
              />
            </button>
          );
        }

  return (
    <Link key={item.href} href={item.href}>
      <div className="relative flex flex-col items-center group">
        <Icon
          size={18}
          className={`transition ${
            isActive
              ? "text-white"
              : "text-white/50 group-hover:text-white"
          }`}
        />

        <span
          className={`absolute -bottom-2 h-1 w-1 rounded-full bg-white transition ${
            isActive
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0"
          }`}
        />
      </div>
    </Link>
  );
})}
        </div>
      </div>
      
      <MoreModal isOpen={moreOpen} onClose={() => setMoreOpen(false)} />
    </>
  );
}