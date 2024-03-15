/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath: isProd ? '/react-challenge' : undefined,
};

export default nextConfig;
