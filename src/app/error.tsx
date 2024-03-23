"use client";

import { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import ArrowLeft from "@/public/icons/arrow-left.svg";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-8 mx-4">
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          ugh, we had an error :(
        </Typography>
      </div>

      <div className="flex justify-center mt-12">
        <Button href="/" variant="outlined">
          <div className="flex flex-row gap-2 justify-center">
            <ArrowLeft width={24} height={24} />
            <Typography>home</Typography>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Error;
