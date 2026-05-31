import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from 'next/font/google';
import '../assets/styles/globals.css';
import '../assets/styles/style.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
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
      className={`${dmSans.variable} ${dmSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-rcode-bg text-rcode-white">
        {children}
      </body>
    </html>
  );
}