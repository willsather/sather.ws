import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig: import("jest").Config = {
  roots: ["<rootDir>"],
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  modulePathIgnorePatterns: [
    "<rootDir>/e2e",
    "<rootDir>/node_modules",
    "<rootDir>/.netlify",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["next/babel"] }],
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  moduleNameMapper: {
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "^@/src/(.*)$": "<rootDir>/src/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/__mocks__/(.*)$": "<rootDir>/__mocks__/$1",
  },
  watchPathIgnorePatterns: ["node_modules", "globalConfig"],
  preset: "ts-jest",
};

// Workaround to reconcile issues with Next/SVG rendering in JSDOM
// https://github.com/vercel/next.js/issues/37542#issuecomment-1151075024
const jestConfig = async () => {
  const customConfig = await createJestConfig(customJestConfig)();
  return {
    ...customConfig,
    moduleNameMapper: {
      "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
      ...customConfig.moduleNameMapper,
    },
  };
};

module.exports = jestConfig;
