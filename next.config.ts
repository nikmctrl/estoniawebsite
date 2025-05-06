import type { NextConfig } from "next"
import createNextIntlPlugin from 'next-intl/plugin'


const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [ "nikbook", "192.168.86.50" ],
  trailingSlash: false,
  reactStrictMode: true,
  experimental: {
    // typedRoutes: true,
    
  },
  
  
}


const withNextIntl = createNextIntlPlugin();


// export const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });



export default withNextIntl(nextConfig);
