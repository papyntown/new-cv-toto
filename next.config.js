/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["localhost"],
        unoptimized: true,
    },
    env: {
        emailKey: "tQUM1GZWCUkTt-Ibe",
    },
};

module.exports = nextConfig;
