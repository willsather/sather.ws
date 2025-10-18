import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import homeMetadata from "@/metadata/home";
import ConsoleLog from "@/ui/console-log";

import "@/styles/tailwind.css";
import "@/styles/mdx.css";

export const metadata: Metadata = homeMetadata;

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const JetBrainsFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const fonts = `${GeistSans.variable} ${JetBrainsFont.variable}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fonts}>
      <body className="bg-secondary font-sans">
        {children}

        <ConsoleLog />

        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
