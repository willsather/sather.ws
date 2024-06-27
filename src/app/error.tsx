"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import ArrowLeft from "@/public/icons/arrow-left.svg";

const ErrorPage = ({ error }: { error: Error }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-secondary">
      <div className="mx-4 mt-8 flex justify-center">
        <h3 className="text-center">ugh, we had an error :(</h3>
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="rounded-md border-2 border-primary p-2 hover:bg-gray-300"
        >
          <div className="flex flex-row justify-center gap-2">
            <ArrowLeft width={24} height={24} />
            <p className="font-extrabold">home</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
