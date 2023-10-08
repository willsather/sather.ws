import { ImageResponse } from "next/server";
import Logo from "@/src/components/shared/logo";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Will Sather";
export const contentType = "image/png";

export default async function DefaultOpengraphImage() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center h-[160px] w-[160px]">
          <Logo width="64" height="58" fill="white" />
        </div>
        <div tw="flex items-center justify-center mt-12 mx-16">
          <h1 tw="text-7xl text-center font-bold text-white font-sans font-bold">Will Sather</h1>
        </div>
      </div>
    ),
    size
  );
}
