
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'colorrig.com',
            },
            {
                protocol: 'https',
                hostname: 'colorrig.com.ng',
            },
            {
                protocol: 'https',
                hostname: '*.vercel.app',
            },
        ],
    },
    typescript: {
        // Allow production builds even with type errors during migration.
        ignoreBuildErrors: true,
    },
    eslint: {
        // Allow production builds even with lint warnings during migration.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
