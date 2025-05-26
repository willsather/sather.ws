"use client";

import React, { type ReactNode, useState } from "react";

import Footer from "@/ui/footer";
import ParticleOverlay from "@/ui/particles";

export default function ParticleProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [showParticles, setShowParticles] = useState(true);

  return (
    <>
      {showParticles && <ParticleOverlay />}

      {children}

      <Footer
        showParticles={showParticles}
        setShowParticles={setShowParticles}
      />
    </>
  );
}
