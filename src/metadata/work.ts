import type { Metadata } from "next";

const work: Metadata = {
  title: "Work",
  description:
    "just another personal resume. a brief overview of the cool work i've had the pleasure of doing along with some recent projects.",

  openGraph: {
    title: "Work",
    description:
      "just another personal resume. a brief overview of the cool work i've had the pleasure of doing along with some recent projects.",
    type: "website",
    url: "https://sather.ws/work",
    images: ["/og"],
  },
  alternates: {
    canonical: "/work",
  },
};

export default work;
