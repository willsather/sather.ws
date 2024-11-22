import type { Metadata } from "next";

import description from "@/metadata/description";
import icons from "@/metadata/icons";
import manifest from "@/metadata/manifest";

const home: Metadata = {
  metadataBase: new URL("https://www.sather.ws"),
  title: {
    template: "%s | Will Sather",
    default: "Will Sather",
  },
  description,
  applicationName: "Will Sather",
  authors: [{ name: "Will Sather" }],
  keywords: [
    "will sather",
    "blog",
    "code",
    "react",
    "typescript",
    "javascript",
    "web development",
    "web dev",
    "node.js",
    "next.js",
    "netlify",
    "mysql",
    "mui",
    "python",
    "travel",
    "vercel",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Will Sather",
  publisher: "Will Sather",
  openGraph: {
    title: "Will Sather",
    description,
    type: "website",
    url: "https://www.sather.ws",
    images: ["/og"],
  },
  alternates: {
    canonical: "/",
  },
  icons,
  manifest,
};

export default home;
