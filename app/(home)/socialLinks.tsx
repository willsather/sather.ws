import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import GitHubIcon from "@/public/icons/github.svg";

const SocialLinks = () => {
  const socialLinks = {
    instagram: {
      icon: <InstagramIcon width={24} height={24} />,
      link: "https://www.instagram.com/will.sather/",
    },
    linkedin: {
      icon: <LinkedInIcon width={24} height={24} />,
      link: "https://www.linkedin.com/in/willsather",
    },
    github: {
      icon: <GitHubIcon width={24} height={24} />,
      link: "https://github.com/willsather/Will-Sather",
    },
  };

  return (
    <Box
      sx={{ position: "fixed", bottom: 0, left: 0, display: "flex", flexDirection: "row", width: "100%" }}
      ml={2}
      mb={2}
    >
      {Object.entries(socialLinks).map(([social, { icon, link }]) => (
        <Box key={social} mr={4}>
          <Link href={link} target="_blank" aria-label={social}>
            {icon}
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default SocialLinks;
