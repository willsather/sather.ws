import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "@/app/(header)/header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Will Sather</title>
        <meta name="description" content="Will Sather." />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="196x196" href="%PUBLIC_URL%/favicons/favicon-196.png" />
        <link rel="icon" type="image/png" sizes="160x160" href="%PUBLIC_URL%/favicons/favicon-160.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="%PUBLIC_URL%/favicons/favicon-96.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="%PUBLIC_URL%/favicons/favicon-64.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicons/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="%PUBLIC_URL%/favicons/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="%PUBLIC_URL%/favicons/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="%PUBLIC_URL%/favicons/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="%PUBLIC_URL%/favicons/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="%PUBLIC_URL%/favicons/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="%PUBLIC_URL%/favicons/favicon-76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="%PUBLIC_URL%/favicons/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/favicons/favicon-180.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
