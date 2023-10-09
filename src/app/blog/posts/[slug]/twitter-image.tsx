import { ImageResponse } from "next/server";
import { loadMdxFromSlug } from "@/lib/blog/utils";
import { BlogFrontMatter } from "@/src/types/blogFrontMatter";
import Logo from "@/src/app/(shared)/logo";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Blog | Will Sather";
export const contentType = "image/png";

export default async function TwitterImage({ params }: { params: { slug: string } }) {
  const { data } = await loadMdxFromSlug(params?.slug);
  const frontMatter = data as BlogFrontMatter;

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center h-[160px] w-[160px]">
          <Logo width="64" height="58" fill="white" />
        </div>
        <div tw="flex items-center justify-center mt-12 mx-16">
          <h1 tw="text-7xl text-center font-bold text-white font-sans font-bold">{frontMatter.title}</h1>
        </div>

        <div tw="flex items-center justify-center mx-16">
          <h2 tw="text-3xl text-center font-bold text-white font-sans font-bold">
            {frontMatter.date.toLocaleDateString()}
          </h2>
        </div>
      </div>
    ),
    size
  );
}
