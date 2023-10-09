"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowLeft from "@/public/icons/arrow-left.svg";

const NotFound = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Stack justifyContent="center" mt={8} mx={4}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          ugh, we can&apos;t find that page :(
        </Typography>
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Button href="/" variant="outlined">
          <Stack gap={2} flexDirection="row" justifyContent="center">
            <ArrowLeft width={24} height={24} />
            <Typography>home</Typography>
          </Stack>
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
