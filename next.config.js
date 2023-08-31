/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GET_ALL_REPO: process.env.GET_ALL_REPO,
    SECRET_TOKEN: process.env.SECRET_TOKEN,
    DATABASE_URL: process.env.DATABASE_URL,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    NEXT_URL: process.env.NEXT_URL,
  },
};

module.exports = nextConfig;
