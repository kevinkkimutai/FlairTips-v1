/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.nerdytips.com', 'api.flairtips.com'],
      },
      // async rewrites() {
      //   return [
      //     {
      //       source: "/api/:path*",
      //       destination: "https://api.flairtips.com/api/v1/:path*",
      //     },
      //   ];
      // },
};

export default nextConfig;
