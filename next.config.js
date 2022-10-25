/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dsc-assets.imgix.net', 'face-assets.dollarshaveclub.com'],
  },
}

module.exports = nextConfig

