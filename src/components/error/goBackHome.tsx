import { Box, Typography, Button } from "@mui/material";
import ArrowLeft from "@/public/icons/arrow-left.svg";

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
        <Button href="/" variant="outlined">
          <Box sx={{ display: "flex", gap: 2 }}>
            <ArrowLeft width={24} height={24} />
            <Typography variant="h2">go back home</Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default GoBackHome;
