"use client";

import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";
import { Box, Typography } from "@mui/material";
import FooterLinks from "@/app/(home)/footerLinks";
import ParticleOverlay from "@/src/components/shared/particles";

export default function Home() {
  const [showParticles, setShowParticles] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "secondary.main",
        }}
      >
        {showParticles && <ParticleOverlay />}

        <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
          <Typography variant="h1">WILL SATHER</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
          <Typography variant="h4">livin&apos; the dream.</Typography>
        </Box>

        <FooterLinks showParticles={showParticles} setShowParticles={setShowParticles} />
      </Box>
    </ThemeProvider>
  );
}
