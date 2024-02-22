import { Metadata } from "next";
import icons from "@/src/metadata/icons";
import manifest from "@/src/metadata/manifest";
import description from "@/src/metadata/description";

const home: Metadata = {
  metadataBase: new URL("https://www.sather.ws"),
  title: {
    template: "%s | Will Sather",
    default: "Will Sather",
  },
  description,
  openGraph: {
    title: "Will Sather",
    description,
    type: "website",
    url: "https://www.sather.ws",
  },
  icons,
  manifest,
};

export default home;
