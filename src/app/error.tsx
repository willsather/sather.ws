"use client";

import { useEffect } from "react";
import GoBackHome from "@/src/components/error/goBackHome";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <GoBackHome title="ugh, we had an error :(" />;
};

export default Error;
