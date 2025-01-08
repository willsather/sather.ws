import type { Post } from "@/types/post";

export const posts: Post[] = [
  {
    slug: "50-states",
    title: "50 under 25",
    date: new Date("2024-05-20T12:00:00Z"),
    tags: ["travel"],
    summary:
      "A brief reflection on traveling to all 50 US States before turning 25 years old.",
  },
  {
    slug: "estimating-pi",
    title: "Estimating Pi",
    date: new Date("2023-10-10T12:00:00Z"),
    tags: ["python", "math", "ui"],
    summary:
      "How to estimate Pi using a Python Monte Carlo simulation, along fun Turtle visualization of a dart board.",
  },
  {
    slug: "github-action-semver-script",
    title: "GitHub Action Script for Semantic Versioning",
    date: new Date("2024-07-15T12:00:00Z"),
    tags: ["deploy"],
    summary:
      "Automating GitHub releases and using a basic semantic versioning action",
  },
  {
    slug: "hello-world",
    title: "Hello World 🌎",
    date: new Date("2023-01-01T12:00:00Z"),
    tags: [],
    summary:
      "Welcome to my very first blog post. A very brief and unimportant post to kick things off.",
  },
  {
    slug: "kill-port",
    title: "Simple ZSH Utility to Kill a Port",
    date: new Date("2024-08-28T12:00:00Z"),
    tags: ["setup", "snippets"],
    summary: "Simple ZSH utility function to find and kill running ports",
  },
  {
    slug: "mui-custom-styled-props",
    title: "Custom Material UI Styled Component with Props",
    date: new Date("2023-09-08T12:00:00Z"),
    tags: ["typescript", "ui"],
    summary:
      "How to add custom props to a styled Material UI component, allowing for error handling and customization.",
  },
  {
    slug: "mysql-docker-container",
    title: "Running MySQL in a Docker Container",
    date: new Date("2024-03-23T12:00:00Z"),
    tags: ["data", "setup"],
    summary:
      "A super easy local setup to get a MySQL database up and running using a Docker container.",
  },
  {
    slug: "netlify-deploy",
    title: "Deploy Next.js app to Netlify using GitHub Actions",
    date: new Date("2023-08-07T12:00:00Z"),
    tags: ["next.js", "deploy"],
    summary:
      "How to manually build and deploy a Next.js App Router application to Netlify using a GitHub Action pipeline.",
  },
  {
    slug: "nextjs-api-unit-tests",
    title: "Unit Testing Next.js App Router API Handlers",
    date: new Date("2023-10-31T12:00:00Z"),
    tags: ["next.js", "typescript", "testing"],
    summary:
      "How to write valuable unit tests for Next.js App Router API handlers using Jest and React Testing Library.",
  },
  {
    slug: "nextjs-opengraph-images",
    title: "Generate Open Graph images using Next.js App Router",
    date: new Date("2023-10-08T12:00:00Z"),
    tags: ["next.js", "typescript"],
    summary:
      "How to use a Next.js feature to dynamically generate Open Graph / Twitter images styled with Tailwind.",
  },
  {
    slug: "ts-generic-data-builder",
    title: "Pattern for Building Data with Typescript Generics",
    date: new Date("2024-07-25T12:00:00Z"),
    tags: ["typescript"],
    summary:
      "Using a builder pattern to properly translate data between integration points when utilizing Typescript generic functions",
  },
  {
    slug: "vercel-deploy",
    title: "Deploy Next.js app to Vercel using GitHub Actions",
    date: new Date("2023-01-09T12:00:00Z"),
    tags: ["next.js", "deploy"],
    summary:
      "How to manually build and deploy a Next.js App Router application to Vercel using a GitHub Action pipeline.",
  },
  {
    slug: "zod-parse-transforms",
    title: "Parsing and Transforming Data with Zod",
    date: new Date("2024-04-19T12:00:00Z"),
    tags: ["typescript", "snippets"],
    summary:
      "How to use Zod to parse and transform untyped data for type safety",
  },
];
