"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "@/src/theme/theme";

export default function About() {
  const isMediumScreenSize = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignContent: "center",
      }}
      my={{ xs: 6, md: 8 }}
    >
      {!isMediumScreenSize && (
        <Box
          sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center" }}
          mx={{ xs: 4, md: 8 }}
          mb={{ xs: 6, md: 8 }}
        >
          <Image
            src="/assets/about.jpg"
            alt="About | Will Sather"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "85%", height: "auto" }}
          />
        </Box>
      )}

      <Box mx={{ xs: 4, md: 8 }} mb={4}>
        <Typography variant="body1" sx={{ color: "primary.main" }} aria-label="about">
          <strong>a little about me:</strong> i graduated from university of minnesota in 2022 with bachelors in
          computer science and am currently working as a software engineer at vmware tanzu labs. recently, been working
          building and modernizing modern web apps / cloud apps with a bunch of cool software.
          <br />
          <br />
          <strong>outside of work: </strong> i have always enjoyed working on various software projects (like this
          website, plus lots of things on my github to keep me busy). i also love to travel, cook, and cuddle with our
          two dogs. hopefully you enjoy meandering around my site, i&apos;m trying to not take it too seriously ... but
          i also personally find a lot value between randomly improving, testing, and writing some posts.
          <br />
          <br />
          anyways, welcome and feel free to say hi!
        </Typography>
      </Box>

      {isMediumScreenSize && (
        <Box sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center" }} mx={8}>
          <Image
            src="/assets/about.jpg"
            alt="About | Will Sather"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%", minWidth: "600px", height: "auto", maxHeight: "336px" }}
          />
        </Box>
      )}
    </Box>
  );
}
