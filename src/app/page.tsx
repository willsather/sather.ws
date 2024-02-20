import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import ParticleProvider from "@/src/app/(layout)/particleProvider";

export default function HomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <ParticleProvider>
        <>
          <Stack flexDirection="row" justifyContent="center" mt={8}>
            <Typography variant="h1">WILL SATHER</Typography>
          </Stack>

          <Stack flexDirection="row" justifyContent="center" mt={4}>
            <Typography variant="h2">livin&apos; the dream.</Typography>
          </Stack>
        </>
      </ParticleProvider>
    </Box>
  );
}
