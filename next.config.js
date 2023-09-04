module.exports = {
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ["src", "__mocks__", "lib"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
            dimensions: false,
          },
        },
      ],
    });

    return config;
  },
};
