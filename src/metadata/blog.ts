import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";

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
  },
  alternates: {
    canonical: `/blog`,
  },
  icons,
  manifest,
};

export default blog;
