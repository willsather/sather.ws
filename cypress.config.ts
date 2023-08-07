import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3333",
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
