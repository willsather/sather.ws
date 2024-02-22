import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";

const about: Metadata = {
  title: "Experience",
  description: "check out my resume.",
  openGraph: {
    title: "Experience",
    description: "check out my resume.",
    type: "article",
    authors: "Will Sather",
    url: "https://sather.ws/experience",
  },
  icons,
  manifest,
};

export default about;
