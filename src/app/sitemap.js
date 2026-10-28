const siteUrl = 'https://www.rcode.website';

export default function sitemap() {
  return [
    { path: '', changeFrequency: 'monthly', priority: 1 },
    { path: '/pos', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/hris', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/cashier', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/cashflow', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/cashier/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/cashier/terms', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/cashflow/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/cashflow/terms', changeFrequency: 'yearly', priority: 0.2 },
  ].map(({ path, ...metadata }) => ({
    url: `${siteUrl}${path}`,
    ...metadata,
  }));
}
