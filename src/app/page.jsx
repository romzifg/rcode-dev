import HomePageClient from '@/components/pages/HomePageClient';

const siteUrl = 'https://www.rcode.website';

export const metadata = {
  title: 'Romzi Farhan Ghozi — Web Developer & Founder RCode.dev',
  description:
    'Portofolio Romzi Farhan Ghozi, web developer dan founder RCode.dev yang membangun website profesional, dashboard, sistem bisnis, dan automasi custom.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Romzi Farhan Ghozi — Web Developer & Founder RCode.dev',
    description:
      'Website profesional, dashboard, sistem bisnis, dan automasi custom oleh Romzi Farhan Ghozi melalui RCode.dev.',
    url: siteUrl,
    siteName: 'RCode.dev',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Romzi Farhan Ghozi — Web Developer dan Founder RCode.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romzi Farhan Ghozi — Web Developer & Founder RCode.dev',
    description: 'Website, dashboard, sistem bisnis, dan automasi custom oleh Romzi Farhan Ghozi.',
    images: ['/opengraph-image'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#romzi-farhan-ghozi`,
      name: 'Romzi Farhan Ghozi',
      alternateName: 'Romzi',
      url: siteUrl,
      jobTitle: 'Web Developer',
      worksFor: { '@id': `${siteUrl}/#rcode` },
      sameAs: [
        'https://www.linkedin.com/in/romzifg',
        'https://github.com/romzifg',
        'https://instagram.com/rfghozi',
      ],
      knowsAbout: [
        'Web Development',
        'Business Dashboard',
        'Business Automation',
        'System Integration',
        'Point of Sale',
        'HRIS',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#rcode`,
      name: 'RCode.dev',
      url: siteUrl,
      logo: `${siteUrl}/ic_rcode.png`,
      founder: { '@id': `${siteUrl}/#romzi-farhan-ghozi` },
      description: 'Jasa pembuatan website, dashboard, sistem bisnis, integrasi, dan automasi custom.',
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Layanan RCode.dev',
        itemListElement: [
          'Pembuatan Website Profesional',
          'Dashboard Monitoring Bisnis',
          'Integrasi Sistem Bisnis',
          'Automasi Bisnis',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'RCode.dev',
      alternateName: 'Portfolio Romzi Farhan Ghozi',
      inLanguage: 'id-ID',
      author: { '@id': `${siteUrl}/#romzi-farhan-ghozi` },
      publisher: { '@id': `${siteUrl}/#rcode` },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <HomePageClient />
    </>
  );
}
