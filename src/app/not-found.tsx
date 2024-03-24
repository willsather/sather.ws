"use client";

import ArrowLeft from "@/public/icons/arrow-left.svg";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-8 mx-4">
        <h3 className="text-center">ugh, we can&apos;t find that page :(</h3>
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => router.push("/")}
          className="border-primary border-2 p-2 rounded-md hover:bg-gray-300"
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

export default NotFound;
