module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    });
    return config;
  },
  i18n: {
    locales: ["de", "fr"],
    defaultLocale: "de",
  },
};
