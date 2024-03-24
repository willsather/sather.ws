import React, { ReactNode } from "react";
import { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/src/app/(header)/header";
import homeMetadata from "@/src/metadata/home";

import "./tailwind.css";

export const metadata: Metadata = homeMetadata;

const Matter = localFont({
  src: [
    { path: "../../public/fonts/Matter-Medium.woff2" },
    { path: "../../public/fonts/Matter-Regular.woff2" },
    { path: "../../public/fonts/Matter-SemiBold.woff2", weight: "600" },
  ],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={Matter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
