/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "images.unsplash.com",
      //   port: "",
      //   pathname: "/**",
      // },
      {
        protocol: "https",
        hostname: "images2.imgbox.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig; // ← difference is here
