'use client';

import { useState, useEffect } from 'react';
import { services, works, reasons, apps, footerLinks, stats, ctaTags, navItems, faqs, processSteps } from '../common/data';
import Navbar from '@/components/layouts/Navbar';
import HeroSection from '@/components/layouts/HeroSection';
import CTASection from '@/components/layouts/CTASection';
import WhySection from '@/components/layouts/WhySection';
import WorkSection from '@/components/layouts/WorkSection';
import ServicesSection from '@/components/layouts/ServiceSection';
import Ticker from '@/components/core/Ticker';
import Footer from '@/components/layouts/Footer';
import FAQ from '@/components/layouts/FAQ';
import WorkProcess from '@/components/layouts/WorkProcess';

const whatsappUrl = 'https://wa.me/6289560214608?text=Halo%20RCode.dev%2C%20saya%20ingin%20konsultasi%20tentang%20website%20atau%20sistem%20untuk%20bisnis%20saya.';

export default function RCodePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="noise-overlay-wrapper relative min-h-screen bg-rcode-bg text-rcode-white overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navItems={navItems} />
      <main>
        <HeroSection stats={stats} />
        <Ticker apps={apps} />
        <ServicesSection services={services} />
        <WorkSection works={works} />
        <WhySection reasons={reasons} />
        <WorkProcess processSteps={processSteps} />
        <FAQ faqs={faqs} />
        <CTASection ctaTags={ctaTags} />
      </main>
      <Footer footerLinks={footerLinks} />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float group fixed bottom-5 right-5 z-90 flex items-center gap-2.5 rounded-full border border-white/12 bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#07150c] shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-1 hover:bg-[#4ade80] md:bottom-7 md:right-7"
        aria-label="Konsultasi gratis via WhatsApp"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12.04 2a9.84 9.84 0 0 0-8.44 14.9L2 22l5.23-1.55A9.97 9.97 0 1 0 12.04 2Zm0 17.99a8.05 8.05 0 0 1-4.1-1.12l-.3-.18-3.1.92.94-3.02-.2-.31A7.86 7.86 0 0 1 4.06 12a7.98 7.98 0 1 1 7.98 7.99Zm4.38-5.97c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19a7.24 7.24 0 0 1-1.34-1.67c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" /></svg>
        <span className="hidden sm:inline">Konsultasi Gratis</span>
      </a>
    </div>
  );
}
