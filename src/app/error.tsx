"use client";

import { useEffect } from "react";
import { Button, Stack, Typography } from "@mui/material";
import ArrowLeft from "@/public/icons/arrow-left.svg";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-secondary">
      <Stack justifyContent="center" mt={8} mx={4}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          ugh, we had an error :(
        </Typography>
      </Stack>

      <div className="flex justify-center mt-12">
        <Button href="/" variant="outlined">
          <Stack gap={2} flexDirection="row" justifyContent="center">
            <ArrowLeft width={24} height={24} />
            <Typography>home</Typography>
          </Stack>
        </Button>
      </div>
    </div>
  );
};

export default Error;
