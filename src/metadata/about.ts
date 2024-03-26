import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";

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
  },
  icons,
  manifest,
};

export default about;
