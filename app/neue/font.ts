import localFont from "next/font/local";

export const neue = localFont({
  src: [
    {
      path: "./NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NeueHaasDisplayRoman.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NeueHaasDisplayMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./NeueHaasDisplayMediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./NeueHaasDisplayBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-neue",
});
