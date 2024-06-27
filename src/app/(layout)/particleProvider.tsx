"use client";

import React, { type ReactNode, useState } from "react";

import Footer from "@/app/(home)/footer";
import ParticleOverlay from "@/app/(layout)/particles";

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
