import dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        NEXT_PUBLIC_AWS_ACCESS_KEY_ID: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        NEXT_PUBLIC_AWS_REGION: process.env.NEXT_PUBLIC_AWS_REGION,
    },
    async redirects() {
        return [
            {
                source: '/', // 리다이렉트할 기존 경로
                destination: '/resume', // 리다이렉트될 새로운 경로
                permanent: true, // true는 301 리다이렉트, false는 307 리다이렉트(임시 리다이렉트)
            },
        ];
    },
};

export default nextConfig;
