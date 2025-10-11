import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https' as const,
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // In a future major version of Next.js, you will need to explicitly configure
  // "allowedDevOrigins" in next.config to allow cross-origin requests.
  // The value below is based on the warning from the server logs.
  // For more information, see:
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
  allowedDevOrigins: [
    'https://6000-firebase-studio-1759255500892.cluster-fdkw7vjj7bgguspe3fbbc25tra.cloudworkstations.dev',
  ],
};

export default nextConfig;
