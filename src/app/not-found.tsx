"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";
import React, { useEffect } from "react";
import GoBackHome from "@/src/components/error/goBackHome";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ThemeProvider theme={theme}>
      <GoBackHome title="ugh, we can't find that page :(" />
    </ThemeProvider>
  );
};

export default Error;
