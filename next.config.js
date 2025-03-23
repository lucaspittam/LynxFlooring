/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
  },
  // Disable unnecessary features that might cause issues
  experimental: {
    esmExternals: true,
  },
  // Configure webpack to handle CSS properly
  webpack: (config, { isServer }) => {
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

    // Module alias for the problematic dependency
    config.resolve.alias['micromark-util-sanitize-uri'] = path.resolve('./src/app/_lib/polyfills.js');
    
    return config;
  },
}

module.exports = nextConfig
