import React, { ReactNode } from "react";
import Header from "@/src/app/(header)/header";
import Layout from "@/src/components/layout/layout";
import { Metadata } from "next";
import homeMetadata from "@/src/metadata/home";

export const metadata: Metadata = homeMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
