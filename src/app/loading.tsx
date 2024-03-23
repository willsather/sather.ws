"use client";

import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-">
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loading;
