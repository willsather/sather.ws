import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";

const blog: Metadata = {
  title: "Tags",
  description:
    "just another coding blog. an assortment of blog post categories of the things i've recently written about.",

  openGraph: {
    title: "Tags",
    description:
      "just another coding blog. an assortment of blog post categories of the things i've recently written about.",
    type: "website",
    url: "https://sather.ws/blog/tags",
  },
  alternates: {
    canonical: `/blog/tags`,
  },
  icons,
  manifest,
};

export default blog;
