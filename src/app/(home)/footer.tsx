import React, { Dispatch, SetStateAction } from "react";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import GitHubIcon from "@/public/icons/github.svg";
import PictureIcon from "@/public/icons/picture.svg";
import DotsIcon from "@/public/icons/dots.svg";

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
    <div className="fixed bottom-0 left-0 right-0 flex-row flex justify-between mx-4 mb-4">
      <div className="flex flex-row items-center justify-center">
        {Object.entries(socialLinks).map(([social, { icon, link }]) => (
          <div className="mr-6 hover:bg-gray-300 p-2 rounded-2xl" key={social}>
            <a href={link} target="_blank" aria-label={social}>
              {icon}
            </a>
          </div>
        ))}
      </div>

      <div className="flex">
        <button
          aria-label="particles"
          name="particles"
          onClick={() => setShowParticles(!showParticles)}
          className="hover:bg-gray-300 p-2 rounded-2xl"
        >
          <DotsIcon width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
