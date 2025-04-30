import type { MetadataRoute } from "next";

import description from "@/metadata/description";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Will Sather",
    short_name: "Will Sather",
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "/favicon-192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/favicon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
