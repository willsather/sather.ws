import React, { type Dispatch, type SetStateAction } from "react";

import DotsIcon from "@/public/icons/dots.svg";
import GitHubIcon from "@/public/icons/github.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import PictureIcon from "@/public/icons/picture.svg";

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
  };

  return (
    <div className="fixed right-0 bottom-0 left-0 mx-4 mb-4 flex flex-row justify-between">
      <div className="flex flex-row items-center justify-center">
        {Object.entries(socialLinks).map(([social, { icon, link }]) => (
          <div className="mr-6 rounded-2xl p-2 hover:bg-gray-300" key={social}>
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
          className="rounded-2xl p-2 hover:bg-gray-300"
        >
          <DotsIcon width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
