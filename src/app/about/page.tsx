import About from "@/src/app/about/about";
import { Metadata } from "next";
import aboutMetadata from "@/src/metadata/about";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-10">
        <h1>ABOUT</h1>
      </div>

      <div className="flex justify-center mt-5">
        <h2>hi, i&apos;m will.</h2>
      </div>

      <About />
    </div>
  );
}
