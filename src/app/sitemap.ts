import { MetadataRoute } from 'next';
import { metadata } from './layout';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/blog',
    '/blog/customer-retention-management',
    '/blog/churn-meaning-in-business',
    '/blog/saas-churn-reduction-strategies',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/churn-rate',
    '/clv',
    '/churn-risk',
    '/mrr-churn',
    '/ltv-cac-ratio',
    '/payback-period',
    '/dau-mau-ratio',
    '/customer-retention',
    '/net-revenue-churn',
  ];

  const url = metadata.metadataBase!;

  return routes.map((route) => ({
    url: new URL(route, url).toString(),
    lastModified: new Date(),
  }));
}
