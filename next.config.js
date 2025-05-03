/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
  },
  // Optimize image loading
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  // Optimize bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize page loading
  swcMinify: true,
  // Disable unnecessary features that might cause issues
  experimental: {
    esmExternals: true,
    scrollRestoration: true,
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
    
    // Add performance optimization for large libraries
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
    };
    
    return config;
  },
}

module.exports = nextConfig
