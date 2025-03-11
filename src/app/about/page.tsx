import type { Metadata } from "next";

import aboutMetadata from "@/metadata/about";
import Image from "next/image";

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

        <div className="mx-6 my-8 flex flex-col items-center justify-center gap-6 md:mx-8 md:my-10 md:flex-row-reverse">
          <div className="flex grow">
            <Image
              src="/assets/about.jpg"
              alt="Will Sather"
              width={0}
              height={0}
              sizes="100%"
              className="w-full min-w-96"
            />
          </div>

          <div>
            <p className="text-primary" aria-label="about">
              <strong className="font-bold">a little about me:</strong> i
              graduated from university of minnesota with bachelors in computer
              science and am currently working as a software engineer at vmware
              tanzu labs. recently, been building and modernizing modern web
              apps / cloud apps with a bunch of cool software.
              <br /> <br />
              <strong className="font-bold">outside of work: </strong> i have
              always enjoyed working on various software projects (like this
              website, plus lots of things on my github to keep me busy). i also
              love to travel, cook, and cuddle with our two dogs. hopefully you
              enjoy meandering around my site, i&apos;m trying to keep it fun,
              so a bulk of this is just about what software i'm building, and
              given enough time, maybe writing about it.
              <br /> <br />
              anyways, welcome and feel free to say{" "}
              <a href="mailto:hi@sather.ws" className="underline">
                hi
              </a>
              !
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="relative bottom-0 left-0 mx-6 my-8 justify-end font-mono text-gray-400 md:fixed md:mx-8 md:my-10">
          <p>Will Sather © 2020-{new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
