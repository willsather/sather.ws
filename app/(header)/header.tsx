"use client";

import Image from "next/image";
import { Box } from "@mui/material";
import HeaderMenuItem from "@/app/(header)/MenuItem";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";

const Header = () => {
  const menuLinks = {
    home: "/",
    experience: "/experience",
    blog: "https://blog.sather.ws",
    // byt8: "https://byt8.app",
    about: "/about",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "space-between", position: "sticky" }} margin={4}>
        <Image src="/assets/logo.png" alt="Will Sather" width={100} height={100} />

        <Box>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {Object.entries(menuLinks).map(([text, link]) => (
              <HeaderMenuItem text={text} link={link} key={text} />
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
