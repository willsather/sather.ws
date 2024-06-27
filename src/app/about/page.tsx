import type { Metadata } from "next";

import About from "@/app/about/about";
import aboutMetadata from "@/metadata/about";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="mt-10 flex justify-center">
          <h1>ABOUT</h1>
        </div>

        <div className="mt-5 flex justify-center">
          <h2>hi, i&apos;m will.</h2>
        </div>

        <About />
      </div>

      <footer>
        <div className="relative bottom-0 left-0 mx-6 my-8 justify-end font-mono text-gray-400 md:fixed md:mx-8 md:my-10">
          <p>Will Sather © 2020-{new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
