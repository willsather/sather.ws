"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import menuLinks from "@/src/app/(header)/menuLinks";
import styles from "@/src/app/(header)/header.module.scss";

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", position: "sticky" }} margin={4}>
      <Image src="/assets/logo.png" alt="Will Sather" width={100} height={100} />

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between" }}>
        {Object.entries(menuLinks).map(([text, link]) => (
          <Box margin={{ md: "15px" }} marginTop={{ xs: "15px", md: 0 }} key={text}>
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
              <Typography variant="body1">{text}</Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
