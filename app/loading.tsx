"use client";

import { CircularProgress, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";

const Loading = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ width: 1, height: "100vh" }}>
        <CircularProgress color="primary" />
      </Stack>
    </ThemeProvider>
  );
};

export default Loading;
