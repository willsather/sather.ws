import React, { ReactNode } from "react";
import Header from "@/src/app/(header)/header";
import ThemeLayout from "@/src/app/(layout)/themeLayout";
import { Metadata } from "next";
import homeMetadata from "@/src/metadata/home";

export const metadata: Metadata = homeMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeLayout>
          <Header />
          {children}
        </ThemeLayout>
      </body>
    </html>
  );
}
