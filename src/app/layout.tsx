import { Analytics } from "@vercel/analytics/react";
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
        <Analytics />
      </body>
    </html>
  );
}
