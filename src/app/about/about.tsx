"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "@/src/theme/theme";

export default function About() {
  const isLargeScreenSize = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        alignContent: "center",
      }}
      mt={8}
    >
      {!isLargeScreenSize && (
        <Box sx={{ display: "flex", justifyContent: "center" }} ml={8} mr={8} mb={8}>
          <Image
            src="/assets/about.jpg"
            alt="About"
            width={0}
            height={0}
            sizes="100%"
            style={{ minWidth: "350px", height: "auto", maxHeight: "250px" }}
          />
        </Box>
      )}

      <Box mx={{ xs: 4, md: 8 }} mb={4}>
        <Typography variant="body1" sx={{ color: "primary.main" }} aria-label="about">
          i graduated university of minnesota with bachelors in computer science, currently working as a software
          engineer at vmware. recently, been working building cloud apps with react/angular frontends and java/c#
          backends.
          <br />
          <br />
          outside of work, i have always enjoyed working on various projects like this website, byt8, and other small
          projects in my github. i also love to travel, cook, and cuddle with our two dogs. don&apos;t hesitate to reach
          out if you want to connect for any particular reason.
        </Typography>
      </Box>

      {isLargeScreenSize && (
        <Box sx={{ display: "flex", justifyContent: "center" }} ml={8} mr={8}>
          <Image
            src="/assets/about.jpg"
            alt="About"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "50%", minWidth: "600px", height: "auto", maxHeight: "520px" }}
          />
        </Box>
      )}
    </Box>
  );
}
