/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
  },
  // Configure webpack to handle CSS properly
  webpack: (config) => {
    // Existing CSS rule
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    // Modify CSS handling
    rules.forEach((rule) => {
      const cssLoader = rule.use.find(({ loader }) => loader?.includes('css-loader'));
      if (cssLoader) {
        cssLoader.options = {
          ...cssLoader.options,
          url: true,
          import: true,
        };
      }
    });

    return config;
  },
}

module.exports = nextConfig
