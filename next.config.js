/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['knex'],
  },
  images: {
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
