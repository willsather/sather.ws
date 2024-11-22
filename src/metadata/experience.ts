import type { Metadata } from "next";

import icons from "@/metadata/icons";
import manifest from "@/metadata/manifest";

const experience: Metadata = {
  title: "Experience",
  description:
    "just another personal resume. a brief overview of the cool work i've had the pleasure of doing along with some recent projects.",

  openGraph: {
    title: "Experience",
    description:
      "just another personal resume. a brief overview of the cool work i've had the pleasure of doing along with some recent projects.",
    type: "website",
    url: "https://sather.ws/experience",
    images: "/opengraph-image",
  },
  alternates: {
    canonical: "/experience",
  },
  icons,
  manifest,
};

export default experience;
