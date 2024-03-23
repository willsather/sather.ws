"use client";

import { Button } from "@mui/material";
import ArrowLeft from "@/public/icons/arrow-left.svg";

const NotFound = () => {
  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-8 mx-4">
        <h3 className="text-center">ugh, we can&apos;t find that page :(</h3>
      </div>

      <div className="flex justify-center mt-12">
        <Button href="/" variant="outlined">
          <div className="flex flex-row justify-center gap-2">
            <ArrowLeft width={24} height={24} />
            <p className="font-extrabold">home</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
