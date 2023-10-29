/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: ['knex'],
  },
  images: {
    minimumCacheTTL: 9999999,
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/sprites/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
}

module.exports = nextConfig
