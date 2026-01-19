/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/garmaz",
  assetPrefix: "/garmaz/",
  trailingSlash: true,
}

export default nextConfig
