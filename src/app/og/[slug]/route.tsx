import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import Logo from "@/icons/logo";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const geistBold = readFileSync(
  join(
    process.cwd(),
    "node_modules",
    "geist",
    "dist",
    "fonts",
    "geist-sans",
    "Geist-Bold.ttf",
  ),
);

const jetBrainsMono = readFileSync(
  join(process.cwd(), "public", "fonts", "JetBrainsMono-Regular.ttf"),
);

export async function GET(
  request: Request,
  props: { params: Promise<{ slug: string }> },
) {
  const params = await props.params;
  const slug = params.slug;

  const postData = getPost(slug);

  if (postData == null) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    <div tw="flex flex-col justify-center items-start w-full h-full p-12 bg-black text-white relative">
      <Logo fill="white" style={{ marginBottom: 50 }} />

      {/* Website Domain */}
      <div tw="text-xl text-gray-400 mb-4" style={font("JetBrains Mono")}>
        sather.ws
      </div>

      {/* Blog Title */}
      <div
        tw="text-5xl font-bold leading-tight mb-4"
        style={font("Geist Bold")}
      >
        {postData.title}
      </div>

      <div tw="text-3xl text-gray-400" style={font("Geist Bold")}>
        Will Sather
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "JetBrains Mono",
          data: jetBrainsMono,
        },
        {
          name: "Geist Bold",
          data: geistBold,
        },
      ],
    },
  );
}

function font(fontFamily: string) {
  return { fontFamily };
}
