"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import NavigationBar from "@/src/app/(header)/navigationBar";

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", position: "sticky" }} margin={4}>
      <Image src="/assets/logo.png" alt="Will Sather" width={100} height={100} />

      <NavigationBar />
    </Box>
  );
};

export default Header;
