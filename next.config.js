/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "fr",
  },
}

module.exports = nextConfig
