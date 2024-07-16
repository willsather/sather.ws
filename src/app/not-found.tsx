"use client";

import ArrowLeftIcon from "@/icons/ArrowLeft";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="bg-secondary">
      <div className="mx-4 mt-8 flex justify-center">
        <h3 className="text-center">ugh, we can&apos;t find that page :(</h3>
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="rounded-md border-2 border-primary p-2 hover:bg-gray-300"
        >
          <div className="flex flex-row justify-center gap-2">
            <ArrowLeftIcon width={24} height={24} />
            <p className="font-extrabold">home</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
