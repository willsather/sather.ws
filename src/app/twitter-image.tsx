import fs from "node:fs/promises";
import path from "node:path";
import Logo from "@/icons/Logo";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Will Sather";
export const contentType = "image/png";

export default async function DefaultTwitterImage() {
  const fontPath = path.join(process.cwd(), "public/fonts/Geist-Bold.ttf");
  const fontData = await fs.readFile(fontPath);

  return new ImageResponse(
    <div tw="flex flex-col w-full h-full items-center justify-center bg-black text-2xl text-white gap-8 text-4xl">
      <Logo fill="white" />
      <h1>Will Sather</h1>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "JetBrains Mono",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
