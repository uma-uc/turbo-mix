/** @type {import('next').NextConfig} */
//import i18Next from '@shared/i18n/next-config';
//const {i18n} = i18Next;
//i18n.locales = ['en', 'ar'] // 
//i18n.defaultLocale = 'en' //

const nextConfig = {
  //i18n,
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@shared/tailwind-config", "@shared/ui", "@shared/i18n", "@shared/ui2"],
  images: {
    remotePatterns: [
      
    ],
  },
  experimental: {
    optimizePackageImports: [],
    typedRoutes: false,
  },
}

module.exports = nextConfig