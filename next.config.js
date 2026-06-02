/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: [
      "media.giphy.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "res.cloudinary.com",
      "m.media-amazon.com",
      "assets-v2.lottiefiles.com",
      "www.satxbounce.com",
    ],
    unoptimized: true, // disable Next.js image optimization
  },
};

module.exports = nextConfig;
