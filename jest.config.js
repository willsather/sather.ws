const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "^@/src/(.*)$": "<rootDir>/src/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/__mocks__/(.*)$": "<rootDir>/__mocks__/$1",
  },
  modulePathIgnorePatterns: ["node_modules", ".netlify"],
  testEnvironment: "jest-environment-jsdom",
  watchPathIgnorePatterns: ["node_modules", "globalConfig"],
};

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
