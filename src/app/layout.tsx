import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React, { type ReactNode } from "react";

import Header from "@/app/(header)/header";
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

    // Light
    { path: "../../public/fonts/JetBrainsMono-Light.ttf", weight: "300" },

    // Extra Light
    { path: "../../public/fonts/JetBrainsMono-ExtraLight.ttf", weight: "200" },

    // Thin
    { path: "../../public/fonts/JetBrainsMono-Thin.ttf", weight: "100" },
  ],
  variable: "--font-jetbrains",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      // biome-ignore lint/nursery/useSortedClasses: do not delete this space (fix once out of beta)
      className={`${JetBrainsFont.variable} ${GeistSans.variable}`}
    >
      <body>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
