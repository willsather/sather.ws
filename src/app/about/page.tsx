import About from "@/src/app/about/about";
import { Metadata } from "next";
import aboutMetadata from "@/src/metadata/about";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="flex justify-center mt-10">
          <h1>ABOUT</h1>
        </div>

        <div className="flex justify-center mt-5">
          <h2>hi, i&apos;m will.</h2>
        </div>

        <About />
      </div>

      <footer>
        <div className="relative justify-end md:fixed bottom-0 left-0 mx-6 md:mx-8 my-8 md:my10 text-gray-400 font-mono">
          <p>Will Sather © 2020-{new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
