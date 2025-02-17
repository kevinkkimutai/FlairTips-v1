/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.nerdytips.com', 'api.flairtips.com'],
      },
      async headers() {
        return [
          {
            source: "/(.*)", 
            headers: [
              {
                key: "X-Robots-Tag",
                value: "index, follow",
              },
            ],
          },
        ];
      },
};

export default nextConfig;
