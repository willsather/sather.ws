import ExternalLinkIcon from "@/icons/external-link";
import Logo from "@/icons/logo";
import { getFeaturedPosts } from "@/lib/blog";
import { headers } from "next/headers";
import Link from "next/link";

export const revalidate = 3600; // 60 minutes in seconds

interface StatusConfig {
  text: string;
  timeRange: { start: number; end: number };
}

const statusConfigs: StatusConfig[] = [
  {
    text: "sleeping",
    timeRange: { start: 1, end: 7 }, // 1am to 7am
  },
  {
    text: "vibe engineering",
    timeRange: { start: 7, end: 24 }, // 7am to midnight
  },
];

function getCurrentStatus(): StatusConfig {
  const now = new Date();
  const hour = now.getHours();

  const status = statusConfigs.find(
    (config) => hour >= config.timeRange.start && hour < config.timeRange.end,
  );

  return status || statusConfigs[1];
}

export default async function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const status = getCurrentStatus();

  const headersList = await headers();
  const vercelId = headersList.get("x-vercel-id") || "local";
  const gitHash = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local";

  return (
    <main className="min-h-screen px-6 py-12 text-gray-100 md:px-24 md:py-16">
      <div className="max-w-2xl">
        {/* Logo and name/subtitle section */}
        <div className="mb-8 flex flex-col md:flex-row md:gap-6">
          <div className="md:-mt-2 md:w-20 md:flex-shrink-0">
            <a href="/" className="mb-4 inline-block md:mb-0">
              <Logo fill="white" width={80} height={80} />
            </a>
          </div>
          <div className="md:flex-1">
            <h1 className="mb-2 font-bold text-4xl text-white">will sather</h1>

            <p className="flex items-center gap-1 font-mono text-gray-400 text-sm">
              <span
                className={
                  status.text === "vibe engineering" ? "animate-spin" : ""
                }
              >
                *
              </span>
              {status.text}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 md:ml-26">
          <p className="text-gray-300 leading-relaxed">
            field eng @ vercel. football watcher. star wars enjoyer.
            <br className="hidden md:block" /> divorced dad rock playlist
            curator. water drinker.
          </p>
        </div>

        {/*<div className="mb-12 space-y-3 md:ml-24">
          <Link
            href="https://x.com/willsather"
            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="h-4 w-4" fill="currentColor" />
            <span className="font-mono text-xs">@willsather</span>
          </Link>
          <Link
            href="https://github.com/willsather"
            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-4 w-4" fill="currentColor" />
            <span className="font-mono text-xs">@willsather</span>
          </Link>
          <Link
            href="https://linkedin.com/in/willsather"
            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-4 w-4" fill="currentColor" />
            <span className="font-mono text-xs">@willsather</span>
          </Link>
        </div>*/}

        {/* Work section */}
        <section className="mb-12 md:ml-26">
          <h2 className="mb-4 flex items-center gap-3 font-bold text-lg text-white">
            work
            <Link
              href="https://linkedin.com/in/willsather"
              className="text-gray-400 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-mono text-xs">@willsather</span>
            </Link>
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>* field eng @ vercel</li>
            <li>* software eng @ vmware</li>
            <li>* intern @ dell</li>
            <li>* intern @ ivanti</li>
          </ul>
        </section>

        {/* Writing section */}
        <section className="mb-12 md:ml-26">
          <h2 className="mb-4 flex items-center gap-3 font-bold text-lg text-white">
            writing
            <Link
              href="https://x.com/willsather"
              className="text-gray-400 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-mono text-xs">@willsather</span>
            </Link>
          </h2>
          <ul className="space-y-2">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                {post.external ? (
                  <Link
                    href={post.external}
                    className="text-gray-300 transition-colors hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    * {post.title}{" "}
                    <ExternalLinkIcon className="mb-1 inline size-3" />
                  </Link>
                ) : (
                  <Link
                    href={`/writing/${post.slug}`}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    * {post.title}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/archive"
                className="flex items-center gap-1 font-mono text-gray-400 text-xs transition-colors hover:text-white"
              >
                <span>archive →</span>
              </Link>
            </li>
          </ul>
        </section>

        {/* Code section */}
        <section className="md:ml-26">
          <h2 className="mb-4 flex items-center gap-3 font-bold text-lg text-white">
            code
            <Link
              href="https://github.com/willsather"
              className="text-gray-400 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-mono text-xs">@willsather</span>
            </Link>
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                href="https://github.com/willsather/ws-starter"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                * pnpm create ws-starter
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/vercel/registry-starter"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                * registry starter
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/willsather/ai-agent-starter"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                * agent starter
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/willsather/workflows-starter"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                • workflows starter
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer with git hash and request ID */}
        <footer className="mt-16 md:ml-26">
          <div className="font-mono text-gray-600 text-xs">
            {gitHash} | {vercelId}
          </div>
        </footer>
      </div>
    </main>
  );
}
