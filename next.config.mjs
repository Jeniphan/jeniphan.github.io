/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // If deploying to a GitHub Pages *project* page (username.github.io/repo-name),
  // uncomment and set these to your repo name:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
};

export default nextConfig;
