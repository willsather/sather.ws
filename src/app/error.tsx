"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";
import React, { useEffect } from "react";
import GoBackHome from "@/src/components/error/goBackHome";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ThemeProvider theme={theme}>
      <GoBackHome title="ugh, we had an error :(" />
    </ThemeProvider>
  );
};

export default Error;
