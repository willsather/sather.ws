import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const GoBackHome = ({ title }: { title: string }) => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Typography variant="h3">{title}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Link href="/">
          <Typography variant="h4" sx={{ color: "grey" }}>
            go back home
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default GoBackHome;
