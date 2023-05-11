/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
}
