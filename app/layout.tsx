import React, { ReactNode } from "react";
import Header from "@/app/(header)/header";
import siteMetadata from "@/src/metadata/metadata";
import { Metadata } from "next";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
