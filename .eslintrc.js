module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    "next",
    "prettier",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["testing-library", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "prettier/prettier": "warn",
  },
  parser: "@typescript-eslint/parser",
};
