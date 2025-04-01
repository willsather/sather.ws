import type { Metadata } from "next";
import Image from "next/image";

import aboutMetadata from "@/metadata/about";
import ExternalLink from "@/ui/external-link";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
          <h1>ABOUT</h1>
          <h2 className="font-mono font-normal">hi, i&apos;m will.</h2>
        </div>

        <div className="mx-6 my-8 flex flex-col items-center justify-center gap-6 md:mx-8 md:my-10 md:flex-row-reverse">
          <div className="flex grow">
            <Image
              src="/assets/about.jpg"
              alt="Will Sather"
              width={0}
              height={0}
              sizes="100%"
              className="w-full md:min-w-96"
            />
          </div>

          <div>
            <p className="text-primary" aria-label="about">
              <strong className="font-bold">a little about me:</strong> i was
              born and raised in minnesota, where i graduated from university of
              minnesota with bachelors in computer science. i'm currently a{" "}
              <ExternalLink href="/work">sales engineer</ExternalLink> at{" "}
              <ExternalLink href="https://www.vercel.com/home">
                vercel
              </ExternalLink>
              . previously, i was a software engineer building and modernizing
              web apps / cloud apps for{" "}
              <ExternalLink href="https://www.vmware.com/solutions/app-platform/tanzu-labs">
                vmware tanzu labs
              </ExternalLink>{" "}
              &{" "}
              <ExternalLink href="https://www.ivanti.com/">ivanti</ExternalLink>
              .
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
              <ExternalLink href="mailto:hi@sather.ws" className="inline">
                hi
              </ExternalLink>
              !
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="relative bottom-0 left-0 mx-6 my-8 justify-end font-mono text-gray-400 md:fixed md:mx-8 md:my-10">
          <p>will sather © 2020-{new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
