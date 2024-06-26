"use client";

import React, { FC } from "react";

export interface FileNameProps {
  fileName?: string;
}

const FileName: FC<FileNameProps> = ({ fileName }) => {
  if (fileName == null) {
    return <div className="my-4" />;
  }

  return (
    <div className="overflow-x-auto flex justify-between p-2 mb-2 rounded-t-lg bg-gray-300 font-mono">
      <p className="font-bold text-gray-700 ml-2">{fileName}</p>
    </div>
  );
};

export default FileName;
