import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React, { type ReactNode } from "react";

import Header from "@/app/(layout)/header";
import homeMetadata from "@/metadata/home";

import "./tailwind.css";

export const metadata: Metadata = homeMetadata;

const JetBrainsFont = localFont({
  src: [
    // Extra Bold
    { path: "../../public/fonts/JetBrainsMono-ExtraBold.ttf", weight: "800" },

    // Bold
    { path: "../../public/fonts/JetBrainsMono-Bold.ttf", weight: "700" },

    // Semi Bold
    { path: "../../public/fonts/JetBrainsMono-SemiBold.ttf", weight: "600" },

    // Medium
    { path: "../../public/fonts/JetBrainsMono-Medium.ttf", weight: "500" },

    // Regular
    { path: "../../public/fonts/JetBrainsMono-Regular.ttf", weight: "400" },
  ],
  variable: "--font-jetbrains",
});

const fonts = `${GeistSans.variable} ${JetBrainsFont.variable}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fonts}>
      <body>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
