"use client";

import ParticleOverlay from "@/src/components/shared/particles";
import { Box, Typography } from "@mui/material";
import Footer from "@/src/app/(home)/footer";
import React, { useState } from "react";

export default function Home() {
  const [showParticles, setShowParticles] = useState(true);

  return (
    <>
      {showParticles && <ParticleOverlay />}

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Typography variant="h1">WILL SATHER</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={4}>
        <Typography variant="h4">livin&apos; the dream.</Typography>
      </Box>

      <Footer showParticles={showParticles} setShowParticles={setShowParticles} />
    </>
  );
}
