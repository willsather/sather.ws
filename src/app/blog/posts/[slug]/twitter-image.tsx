import { ImageResponse } from "next/og";

import Logo from "@/app/(shared)/logo";
import { getPost } from "@/lib/blog";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Blog | Will Sather";
export const contentType = "image/png";

export default async function TwitterImage({
  params,
}: {
  params: { slug: string };
}) {
  const { frontMatter } = await getPost(params?.slug);

  return new ImageResponse(
    <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
      <div tw="flex flex-none items-center justify-center h-[160px] w-[160px]">
        <Logo width="64" height="58" fill="white" />
      </div>
      <div tw="flex items-center justify-center mt-12 mx-16">
        <h1 tw="text-7xl text-center font-bold text-white font-sans font-bold">
          {frontMatter.title}
        </h1>
      </div>

      <div tw="flex items-center justify-center mx-16">
        <h2 tw="text-3xl text-center font-bold text-white font-sans font-bold">
          {frontMatter.date.toLocaleDateString()}
        </h2>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
