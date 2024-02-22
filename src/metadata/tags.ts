import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";

const blog: Metadata = {
  title: "Tags",
  description: "a category i wrote about.",
  openGraph: {
    title: "Blog",
    description: "a category i wrote about.",
    type: "website",
    url: "https://sather.ws/blog/tags",
  },
  icons,
  manifest,
};

export default blog;
