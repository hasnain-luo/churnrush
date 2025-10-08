import { MetadataRoute } from 'next';

const URL = 'https://churnrush.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/blog',
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

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));
}
