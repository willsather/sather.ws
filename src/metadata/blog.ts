import type { Metadata } from "next";

import icons from "@/metadata/icons";
import manifest from "@/metadata/manifest";

const blog: Metadata = {
  title: "Blog",
  description:
    "just another coding blog. a random collection of blog posts i want to write about, primarily documenting problems i've solved recently.",

  openGraph: {
    title: "Blog",
    description:
      "just another coding blog. a random collection of blog posts i want to write about, primarily documenting problems i've solved recently.",
    type: "article",
    authors: "Will Sather",
    url: "https://sather.ws/blog",
    images: ["/og"],
  },
  twitter: {
    images: ["/og"],
  },
  alternates: {
    canonical: "/blog",
  },
  icons,
  manifest,
};

export default blog;
