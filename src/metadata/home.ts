import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";

const home: Metadata = {
  metadataBase: new URL("https://sather.ws"),
  title: {
    template: "%s | Will Sather",
    default: "Will Sather",
  },
  description: "a software engineer based out of boston, ma.",
  icons,
  manifest,
};

export default home;
