import { MetadataRoute } from 'next';
import { metadata } from './layout';

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = new URL('/sitemap.xml', metadata.metadataBase!).toString();
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: sitemapUrl,
  };
}
