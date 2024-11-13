/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        KASSAL_API_TOKEN: process.env.KASSAL_API_TOKEN,
    },
};

export default nextConfig;
