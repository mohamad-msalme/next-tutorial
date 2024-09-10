/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //     loaderFile: "./src/loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};

export default nextConfig;
