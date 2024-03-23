import { Typography } from "@mui/material";
import About from "@/src/app/about/about";
import { Metadata } from "next";
import aboutMetadata from "@/src/metadata/about";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-10">
        <Typography variant="h1">ABOUT</Typography>
      </div>

      <div className="flex justify-center mt-3 md:mt-5">
        <Typography variant="h2">hi, i&apos;m will.</Typography>
      </div>

      <About />
    </div>
  );
}
