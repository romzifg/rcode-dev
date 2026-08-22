'use client';

import Link from 'next/link';

export default function Navbar({ scrolled, menuOpen, setMenuOpen, navItems }) {
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${scrolled
                ? 'bg-rcode-bg/85 backdrop-blur-2xl border-b border-white/8 py-3'
                : 'py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

                {/* Brand */}
                <Link href="/" className="flex items-center gap-2.5 text-rcode-white" aria-label="RCode.dev - Beranda">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-rcode-amber text-sm font-bold text-rcode-bg shadow-[0_8px_24px_rgba(232,160,32,0.2)]">R</span>
                    <span className="font-serif text-xl tracking-tight">RCode<span className="text-rcode-amber">.dev</span></span>
                </Link>

                {/* Desktop links — hidden on mobile */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-white/60 hover:text-rcode-white text-[0.92rem] font-light transition-colors duration-200"
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#kontak"
                        className="inline-flex items-center gap-2 bg-rcode-amber text-rcode-bg text-[0.88rem] font-semibold px-4 py-2.5 rounded-xl shadow-[0_8px_24px_rgba(232,160,32,0.16)] hover:bg-rcode-amber-light transition-all duration-200"
                    >
                        Konsultasi Gratis <span aria-hidden="true">→</span>
                    </a>
                </nav>

                {/* Burger — mobile only */}
                <button
                    className="flex md:hidden flex-col gap-1.25 bg-transparent border-0 cursor-pointer p-1 z-101"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
                    aria-expanded={menuOpen}
                >
                    <span className={`block w-5.5 h-0.5 bg-white/60 rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
                    <span className={`block w-5.5 h-0.5 bg-white/60 rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-5.5 h-0.5 bg-white/60 rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.75' : ''}`} />
                </button>
            </div>

            {/* Mobile slide-in — conditionally rendered so it NEVER leaks into desktop layout */}
            <nav className={`mobile-nav md:hidden ${menuOpen ? 'open' : ''}`}>
                {[...navItems, { label: 'Konsultasi Gratis', href: '#kontak' }].map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className={href === '#kontak' ? 'mt-3 rounded-xl bg-rcode-amber px-4 py-3 font-semibold text-rcode-bg' : 'text-white/70 hover:text-rcode-white text-base transition-colors'}
                    >
                        {label}
                    </a>
                ))}
            </nav>

            {/* Backdrop overlay — closes menu when tapping outside */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-98 md:hidden"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    );
}
