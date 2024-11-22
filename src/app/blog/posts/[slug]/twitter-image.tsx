import fs from "node:fs/promises";
import path from "node:path";
import Logo from "@/icons/Logo";
import { getPost } from "@/lib/blog";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Will Sather";
export const contentType = "image/png";

export default async function BlogPostTwitterImage({
  params,
}: {
  params: { slug: string };
}) {
  const geistBold = await fetch(
    `${process.env.BASE_URL}/fonts/Geist-Bold.ttf`,
  ).then((res) => res.arrayBuffer());

  const blogPost = await getPost(params?.slug);

  return new ImageResponse(
    <div tw="flex flex-col justify-center items-start w-full h-full p-12 bg-black text-white relative">
      <Logo fill="white" style={{ marginBottom: 50 }} />

      {/* Website Domain */}
      <div tw="text-xl text-gray-400 mb-4">sather.ws</div>

      {/* Blog Title */}
      <div tw="text-5xl font-bold leading-tight mb-4">
        {blogPost.frontMatter.title}
      </div>

      <div tw="text-3xl text-gray-400">Will Sather</div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Geist Bold",
          data: geistBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
