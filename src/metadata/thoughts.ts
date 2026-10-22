import type { Metadata } from "next";

const thoughts: Metadata = {
  title: "Thoughts",
  description:
    "just another collection of writing. a random collection of stuff i want to write about, primarily documenting problems i've solved recently.",

  openGraph: {
    title: "Thoughts",
    description:
      "just another collection of writing. a random collection of stuff i want to write about, primarily documenting problems i've solved recently.",
    type: "article",
    authors: "Will Sather",
    url: "https://sather.ws/thoughts",
    images: ["/og"],
  },
  twitter: {
    images: ["/og"],
  },
  alternates: {
    canonical: "/thoughts",
  },
};

export default thoughts;
