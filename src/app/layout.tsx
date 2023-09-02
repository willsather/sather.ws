import React, { ReactNode } from "react";
import Header from "@/src/app/(header)/header";
import siteMetadata from "@/src/metadata/metadata";
import { Metadata } from "next";
import Layout from "@/src/components/layout/layout";

export const metadata: Metadata = siteMetadata;

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
