import React, { type Dispatch, type SetStateAction } from "react";

import DotsIcon from "@/icons/dots";
import GitHubIcon from "@/icons/github";
import InstagramIcon from "@/icons/instagram";
import LinkedInIcon from "@/icons/linkedin";
import PictureIcon from "@/icons/picture";

export default function Footer({
  showParticles,
  setShowParticles,
}: {
  showParticles: boolean;
  setShowParticles: Dispatch<SetStateAction<boolean>>;
}) {
  const socialLinks = {
    instagram: {
      icon: <InstagramIcon width={24} height={24} />,
      link: "https://www.instagram.com/will.sather",
    },
    github: {
      icon: <GitHubIcon width={24} height={24} />,
      link: "https://github.com/willsather",
    },
    linkedin: {
      icon: <LinkedInIcon width={24} height={24} />,
      link: "https://www.linkedin.com/in/willsather",
    },
    vsco: {
      icon: <PictureIcon width={24} height={24} />,
      link: "https://vsco.co/willsather/gallery",
    },
    // rss: {
    //   icon: <RSSIcon width={24} height={24} />,
    //   link: "/blog/rss.xml",
    // },
  };

  return (
    <div className="fixed right-0 bottom-0 left-0 mx-4 mb-4 flex flex-row justify-between">
      <div className="flex flex-row items-center justify-center">
        {Object.entries(socialLinks).map(([social, { icon, link }]) => (
          <div className="mr-6 rounded-lg p-2 hover:bg-gray-100" key={social}>
            <a href={link} target="_blank" aria-label={social} rel="noreferrer">
              {icon}
            </a>
          </div>
        ))}
      </div>

      <div className="flex">
        <button
          type="button"
          aria-label="particles"
          name="particles"
          onClick={() => setShowParticles(!showParticles)}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          <DotsIcon width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
