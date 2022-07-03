/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["image.tmdb.org"],
  },
};
