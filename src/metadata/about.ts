import icons from "@/metadata/icons";
import manifest from "@/metadata/manifest";
import type { Metadata } from "next";

const about: Metadata = {
  title: "About",
  description:
    "just a little about myself. a dedicated and curious software engineer who love solving problems and writing about it too.",

  openGraph: {
    title: "About",
    description:
      "just a little about myself. a dedicated and curious software engineer who love solving problems and writing about it too.",

    type: "website",
    url: "https://sather.ws/about",
    images: "/opengraph-image",
  },
  twitter: {
    images: "/twitter-image",
  },
  alternates: {
    canonical: "/about",
  },
  icons,
  manifest,
};

export default about;
