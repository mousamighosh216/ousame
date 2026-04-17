import type { Metadata } from "next";
import { Merriweather, Playwrite } from "@/lib/fonts";
import "./globals.css";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import LayoutClient from "./blog/LayoutClient";

export const metadata: Metadata = {
  title: 'Mousami Ghosh - Portfolio',
  description: 'Full Stack Developer & Tech Enthusiast',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${Playwrite.variable} ${Merriweather.variable}`}>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
