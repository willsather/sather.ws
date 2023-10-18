"use client";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import menuLinks from "@/src/app/(header)/menuLinks";
import React, { useState } from "react";
import MenuIcon from "@/public/icons/menu.svg";
import CloseIcon from "@/public/icons/close.svg";

const Links = () => {
  return (
    <>
      {Object.entries(menuLinks).map(([text, link]) => (
        <Box margin={{ md: 2 }} marginTop={{ xs: 2, md: 0 }} key={text}>
          <Box
            sx={[
              {
                "&:hover": {
                  textDecoration: "underline",
                },
              },
            ]}
            onClick={() => setM}
          >
            <Link
              href={link}
              target="_self"
              style={{
                color: "black",
                textDecoration: "none",
                textAlign: "right",
              }}
            >
              <Typography variant="body1">{text}</Typography>
            </Link>
          </Box>
        </Box>
      ))}
    </>
  );
};

const NavigationBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const getShowMobileLinks = () => (mobileOpen ? "block" : "none");

  return (
    <Stack flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" pt={2}>
      <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "end" }}>
        <Box onClick={() => setMobileOpen(!mobileOpen)} aria-label="open-nav">
          {mobileOpen ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
        </Box>
      </Box>

      <Box sx={{ display: { xs: getShowMobileLinks(), md: "flex" } }}>
        {Object.entries(menuLinks).map(([text, link]) => (
          <Box margin={{ md: 2 }} marginTop={{ xs: 2, md: 0 }} key={text}>
            <Box
              sx={[
                {
                  "&:hover": {
                    textDecoration: "underline",
                  },
                },
              ]}
              onClick={() => setMobileOpen(false)}
            >
              <Link
                href={link}
                target="_self"
                style={{
                  color: "black",
                  textDecoration: "none",
                  textAlign: "right",
                }}
              >
                <Typography variant="body1">{text}</Typography>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default NavigationBar;
