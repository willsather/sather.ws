import ExternalLinkIcon from "@/icons/external-link";
import Logo from "@/icons/logo";
import XIcon from "@/icons/x";
import { getFeaturedPosts } from "@/lib/blog";
import { headers } from "next/headers";
import Link from "next/link";
import { connection } from "next/server";

const statusConfigs = [
  {
    text: "sleeping",
    timeRange: { start: 1, end: 7 }, // 1am to 7am
  },
  {
    text: "vibe engineering",
    timeRange: { start: 7, end: 24 }, // 7am to midnight
  },
];

async function getCurrentStatus() {
  await connection();
  const now = new Date();

  const utcHour = now.getUTCHours();
  const centralTimeHour = (utcHour - 5 + 24) % 24; // convert to UTC-5 (us central time)

  const status = statusConfigs.find(
    (config) =>
      centralTimeHour >= config.timeRange.start &&
      centralTimeHour < config.timeRange.end,
  );

  return <>{status?.text ?? statusConfigs[1].text}</>;
}

export default async function HomePage() {
  const featuredPosts = getFeaturedPosts();

  const headersList = await headers();
  const vercelId = headersList.get("x-vercel-id") || "local";
  const gitHash = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local";

  const status = await getCurrentStatus();

  return (
    <main className="min-h-screen px-6 py-12 text-muted-light md:px-24 md:py-16">
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

            <p className="flex items-center gap-1 font-mono text-muted-light text-sm">
              <span className="animate-spin">*</span>
              {status}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 md:ml-26">
          <p className="text-muted-light leading-relaxed">
            software engineer. football watcher. star wars enjoyer.
            <br className="hidden md:block" /> divorced dad rock playlist
            curator. water drinker.
          </p>
        </div>

        {/*<div className="mb-12 space-y-3 md:ml-24">
          <Link
            href="https://x.com/willsather"
            className="flex items-center gap-2 text-muted-light transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="h-4 w-4" fill="currentColor" />
            <span className="font-mono text-xs">@willsather</span>
          </Link>
          <Link
            href="https://github.com/willsather"
            className="flex items-center gap-2 text-muted-light transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-4 w-4" fill="currentColor" />
            <span className="font-mono text-xs">@willsather</span>
          </Link>
          <Link
            href="https://linkedin.com/in/willsather"
            className="flex items-center gap-2 text-muted-light transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-4 w-4" fill="currentColor" />
            <span className="font-mono text-xs">@willsather</span>
          </Link>
        </div>*/}

        {/* Work section */}
        <section className="mb-12 md:ml-26">
          <h2 className="mb-4 flex items-baseline gap-3 font-bold text-white text-xl">
            work
          </h2>
          <ul className="space-y-2 font-mono text-muted-light text-sm">
            <li>* field eng @ vercel</li>
            <li>* software eng @ vmware</li>
            <li>* intern @ dell</li>
            <li>* intern @ ivanti</li>
            <li className="pt-2">
              <Link
                href="https://linkedin.com/in/willsather"
                className="flex items-center gap-1 font-mono text-muted text-xs transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>linkedin →</span>
              </Link>
            </li>
          </ul>
        </section>

        {/* thoughts section */}
        <section className="mb-12 md:ml-26">
          <h2 className="mb-4 flex items-baseline gap-3 font-bold text-white text-xl">
            thoughts
          </h2>
          <ul className="space-y-2 font-mono text-sm">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                {post.external ? (
                  <Link
                    href={post.external}
                    className="text-muted-light transition-colors hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    * {post.title.split(" ").slice(0, -1).join(" ")}
                    {post.title.split(" ").length > 1 ? " " : ""}
                    <span className="whitespace-nowrap">
                      {post.title.split(" ").slice(-1)[0]}{" "}
                      <ExternalLinkIcon className="mb-1 inline size-3" />
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={`/writing/${post.slug}`}
                    className="text-muted-light transition-colors hover:text-white"
                  >
                    * {post.title}
                  </Link>
                )}
              </li>
            ))}
            <li className="flex items-center gap-4 pt-2">
              <Link
                href="/archive"
                className="flex items-center gap-1 font-mono text-muted text-xs transition-colors hover:text-white"
              >
                <span>archive →</span>
              </Link>
              <Link
                href="https://x.com/willsather"
                className="flex items-center gap-1 font-mono text-muted text-xs transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Will Sather on X"
              >
                <XIcon className="size-3" fill="currentColor" aria-hidden="true" />
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </section>

        {/* Code section */}
        <section className="md:ml-26">
          <h2 className="mb-4 flex items-baseline gap-3 font-bold text-white text-xl">
            code
          </h2>

          <ul className="space-y-2 font-mono text-muted-light text-sm">
            <li>
              <Link
                href="https://sather.wedding"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                * sather.wedding
              </Link>
            </li>
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
                href="https://github.com/willsather/ai-agent-starter"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                * agent-starter
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/vercel-labs/open-agents"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                * open-agents
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="https://github.com/willsather"
                className="flex items-center gap-1 font-mono text-muted text-xs transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>github →</span>
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer with git hash and request ID */}
        <footer className="mt-16 md:ml-26">
          <div className="font-mono text-muted text-xs">
            {gitHash} | {vercelId}
          </div>
        </footer>
      </div>
    </main>
  );
}
