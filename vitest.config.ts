import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import type { PluginOption } from "vite";
import { configDefaults, defineConfig } from "vitest/config";

const mockSVG: PluginOption = {
  name: "mock-svg",
  enforce: "pre",
  transform(_, id) {
    if (id.endsWith(".svg")) {
      return "export default () => {}";
    }
  },
};

export default defineConfig({
  plugins: [react(), mockSVG],
  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    exclude: ["node_modules", "e2e"],
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/e2e": path.resolve(__dirname, "./e2e"),
      "@/public": path.resolve(__dirname, "./public"),
    },
  },
});
