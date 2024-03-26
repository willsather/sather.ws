import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";
import description from "@/src/metadata/description";
import { getAllTags } from "@/lib/blog/tags";

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
  },
  icons,
  manifest,
};

export default home;
