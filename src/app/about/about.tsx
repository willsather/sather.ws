"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="md:my10 mx-6 my-8 flex flex-col items-center justify-center gap-6 md:mx-8 md:flex-row-reverse">
      <div className="flex grow">
        <Image
          src="/assets/about.jpg"
          alt="About | Will Sather"
          width={0}
          height={0}
          sizes="100%"
          className="w-full min-w-96"
        />
      </div>

      <div>
        <p className="text-primary" aria-label="about">
          <strong className="font-bold">a little about me:</strong> i graduated
          from university of minnesota with bachelors in computer science and am
          currently working as a software engineer at vmware tanzu labs.
          recently, been working building and modernizing modern web apps /
          cloud apps with a bunch of cool software.
          <br /> <br />
          <strong className="font-bold">outside of work: </strong> i have always
          enjoyed working on various software projects (like this website, plus
          lots of things on my github to keep me busy). i also love to travel,
          cook, and cuddle with our two dogs. hopefully you enjoy meandering
          around my site, i&apos;m trying to not take it too seriously ... but i
          also personally find a lot value getting to write some code and when
          given time, also get to randomly improving and testing fun software.
          <br /> <br />
          anyways, welcome and feel free to say hi!
        </p>
      </div>
    </div>
  );
}
