import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";

const about: Metadata = {
  title: "About",
  description: "hi, i'm will.",
  openGraph: {
    title: "About",
    description: "hi, i'm will.",
    type: "website",
    url: "https://sather.ws/about",
  },
  icons,
  manifest,
};

export default about;
