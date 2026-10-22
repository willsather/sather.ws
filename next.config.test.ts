import config from "./next.config";

describe("legacy redirects", () => {
  it.each([
    ["/about", "/"],
    ["/experience/:path*", "/"],
    ["/archive", "/thoughts"],
    ["/writing/:path*", "/thoughts/:path*"],
    ["/blog/posts/:path*", "/thoughts/:path*"],
    ["/blog/rss.xml", "/thoughts/rss.xml"],
    ["/blog", "/thoughts"],
    ["/blog/tags/:path*", "/thoughts"],
  ])("permanently redirects %s to %s", async (source, destination) => {
    const redirects = await config.redirects?.();

    expect(redirects).toContainEqual({ source, destination, permanent: true });
  });
});
