import type { NextConfig } from "next"
import createNextIntlPlugin from 'next-intl/plugin'


const nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = createNextIntlPlugin();



// export const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });



export default withNextIntl(nextConfig);
