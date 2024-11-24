import { readFileSync } from "node:fs";
import { join } from "node:path";
import Logo from "@/icons/Logo";
import { getAllPosts, getPost } from "@/lib/blog";
import { ImageResponse } from "next/og";

export async function generateStaticParams() {
  const posts = await getAllPosts();

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
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;

  const post = await getPost(slug);

  if (post == null) {
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
        {post.frontMatter.title}
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
