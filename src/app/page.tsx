import { Stack, Typography } from "@mui/material";
import ParticleProvider from "@/src/app/(layout)/particleProvider";

export default function HomePage() {
  return (
    <div className="bg-secondary">
      <ParticleProvider>
        <>
          <div className="flex justify-center mt-10">
            <Typography variant="h1">WILL SATHER</Typography>
          </div>

          <div className="flex justify-center mt-3 md:mt-5">
            <Typography variant="h2">livin&apos; the dream.</Typography>
          </div>
        </>
      </ParticleProvider>
    </div>
  );
}
