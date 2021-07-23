const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['img2-static.emmerson.pl'],
  },
  withBundleAnalyzer: withBundleAnalyzer({})
}