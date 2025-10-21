import type { Metadata } from "next";

const archive: Metadata = {
  title: "Archive",
  description:
    "just another collection of writing. a random collection of stuff i want to write about, primarily documenting problems i've solved recently.",

  openGraph: {
    title: "Archive",
    description:
      "just another collection of writing. a random collection of stuff i want to write about, primarily documenting problems i've solved recently.",
    type: "article",
    authors: "Will Sather",
    url: "https://sather.ws/archive",
    images: ["/og"],
  },
  twitter: {
    images: ["/og"],
  },
  alternates: {
    canonical: "/archive",
  },
};

export default archive;
