import localFont from "next/font/local";

export const Merriweather = localFont({
  src: [
    {
      path: "../fonts/Merriweather-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Merriweather-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-Merriweather",
});

export const Playwrite = localFont({
  src: [
    {
      path: "../fonts/PlaywriteIE-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PlaywriteIE-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-Playwrite",
});