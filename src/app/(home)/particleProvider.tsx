"use client";

import ParticleOverlay from "@/src/app/(home)/particles";
import Footer from "@/src/app/(home)/footer";
import React, { ReactNode, useState } from "react";

export default function ParticleProvider({ children }: { children: ReactNode }) {
  const [showParticles, setShowParticles] = useState(true);

  return (
    <>
      {showParticles && <ParticleOverlay />}

      {children}

      <Footer showParticles={showParticles} setShowParticles={setShowParticles} />
    </>
  );
}
