"use client";

import { Button, Typography } from "@mui/material";
import ArrowLeft from "@/public/icons/arrow-left.svg";

const NotFound = () => {
  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-8 mx-4">
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          ugh, we can&apos;t find that page :(
        </Typography>
      </div>

      <div className="flex justify-center mt-12">
        <Button href="/" variant="outlined">
          <div className="flex flex-row justify-center gap-2">
            <ArrowLeft width={24} height={24} />
            <Typography>home</Typography>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
