"use client";

import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";
import Link from "next/link";
import Image from "next/image";
import menuLinks from "@/app/(header)/menuLinks";
import styles from "@/app/(header)/header.module.scss";

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "space-between", position: "sticky" }} margin={4}>
        <Image src="/assets/logo.png" alt="Will Sather" width={100} height={100} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between" }}>
          {Object.entries(menuLinks).map(([text, link]) => (
            <Box margin={{ md: "15px" }} key={text}>
              <Link
                className={styles.headerMenuItem}
                href={link}
                target="_self"
                style={{
                  color: "black",
                  textDecoration: "none",
                  textAlign: "right",
                }}
              >
                <Typography variant="h4">{text}</Typography>
              </Link>
            </Box>
          ))}
        </Box>

        {/*<ThemeSwitch />*/}
      </Box>
    </ThemeProvider>
  );
};

export default Header;
