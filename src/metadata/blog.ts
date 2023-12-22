import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";

const blog: Metadata = {
  title: "Blog",
  description: "a random collection of stuff i want to write about.",
  openGraph: {
    title: "Blog",
    description: "a random collection of stuff i want to write about.",
    type: "article",
    authors: "Will Sather",
    url: "https://sather.ws/blog",
  },
  alternates: {
    canonical: "/blog",
  },
  icons,
  manifest,
};

export default blog;
