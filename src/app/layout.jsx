import { Geist, Fraunces, JetBrains_Mono } from 'next/font/google';
import '../assets/styles/globals.css';
import '../assets/styles/style.css';

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.rcode.website'),
  title: 'RCode.dev — Website & Sistem Bisnis oleh Romzi Farhan Ghozi',
  description:
    'Website, dashboard, sistem bisnis, dan automasi custom oleh Romzi Farhan Ghozi melalui RCode.dev.',
  applicationName: 'RCode.dev',
  authors: [{ name: 'Romzi Farhan Ghozi', url: 'https://www.rcode.website' }],
  creator: 'Romzi Farhan Ghozi',
  publisher: 'RCode.dev',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'RCode.dev — Website & Sistem Bisnis oleh Romzi Farhan Ghozi',
    description: 'Solusi digital custom oleh Romzi Farhan Ghozi untuk membuat operasional bisnis lebih cepat dan efisien.',
    siteName: 'RCode.dev',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geist.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-rcode-bg text-rcode-white">
        {children}
      </body>
    </html>
  );
}
