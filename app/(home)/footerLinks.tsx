import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import GitHubIcon from "@/public/icons/github.svg";
import PictureIcon from "@/public/icons/picture.svg";
import DotsIcon from "@/public/icons/dots.svg";

const FooterLinks = ({
  showParticles,
  setShowParticles,
}: {
  showParticles: boolean;
  setShowParticles: Dispatch<SetStateAction<boolean>>;
}) => {
  const socialLinks = {
    instagram: {
      icon: <InstagramIcon width={24} height={24} />,
      link: "https://www.instagram.com/will.sather/",
    },
    github: {
      icon: <GitHubIcon width={24} height={24} />,
      link: "https://github.com/willsather/Will-Sather",
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
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      ml={2}
      mr={2}
      mb={2}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {Object.entries(socialLinks).map(([social, { icon, link }]) => (
          <Box key={social} mr={2}>
            <IconButton href={link} target="_blank" aria-label={social}>
              {icon}
            </IconButton>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <IconButton onClick={() => setShowParticles(!showParticles)} aria-label="particles">
          <DotsIcon width={24} height={24} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FooterLinks;
