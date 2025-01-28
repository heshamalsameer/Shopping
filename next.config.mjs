// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   //   images: {
//   //     remotePatterns: [
//   //       {
//   //         protocol: "https",
//   //         hostname: "google.com",
//   //         // hostname:"photo.com" or any site or hosyname you need(import) image from it
//   //       },
//   //     ],
//   //   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:  ["res.cloudinary.com"], // Allow serving images from localhost in development
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
