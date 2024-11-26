"use client";

import React, { type FC } from "react";

export interface FileNameProps {
  fileName?: string;
}

const FileName: FC<FileNameProps> = ({ fileName }) => {
  if (fileName == null) {
    return <div className="my-4" />;
  }

  return (
    <div className="mb-2 flex justify-between overflow-x-auto bg-gray-300 p-2 font-mono">
      <p className="ml-2 font-bold text-gray-700">{fileName}</p>
    </div>
  );
};

export default FileName;
