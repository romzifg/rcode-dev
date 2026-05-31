'use client';

import { useState, useEffect } from 'react';
import { services, works, reasons, techStack, footerLinks, stats, ctaTags, navItems, faqs, processSteps } from '../common/data';
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
        <Ticker techStack={techStack} />
        <ServicesSection services={services} />
        <WorkSection works={works} />
        <WhySection reasons={reasons} />
        <WorkProcess processSteps={processSteps} />
        <FAQ faqs={faqs} />
        <CTASection ctaTags={ctaTags} />
      </main>
      <Footer footerLinks={footerLinks} />
    </div>
  );
}