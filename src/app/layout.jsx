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
  title: 'RCode.dev — Website & Sistem Aplikasi untuk Bisnis',
  description:
    'Kami membantu bisnis Anda go digital dengan website modern, sistem otomatis, dan integrasi platform.',
  openGraph: {
    title: 'RCode.dev — Website & Sistem Aplikasi untuk Bisnis',
    description: 'Website modern, sistem otomatis, integrasi platform untuk bisnis tumbuh.',
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