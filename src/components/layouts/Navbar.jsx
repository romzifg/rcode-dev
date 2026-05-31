'use client';

export default function Navbar({ scrolled, menuOpen, setMenuOpen, navItems }) {
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${scrolled
                ? 'bg-rcode-bg/90 backdrop-blur-xl border-b border-white/8 py-3.5'
                : 'py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

                {/* Brand */}
                <a href="/" className="font-serif text-2xl tracking-tight text-rcode-white">
                    RCode<span className="text-rcode-amber">.dev</span>
                </a>

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
                        className="text-rcode-amber text-[0.92rem] font-medium border border-rcode-amber/40 hover:border-rcode-amber hover:bg-rcode-amber/10 px-4 py-2 rounded-md transition-all duration-200"
                    >
                        Konsultasi Gratis →
                    </a>
                </nav>

                {/* Burger — mobile only */}
                <button
                    className="flex md:hidden flex-col gap-1.25 bg-transparent border-0 cursor-pointer p-1 z-101"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5.5 h-0.5 bg-white/60 rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
                    <span className={`block w-5.5 h-0.5 bg-white/60 rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-5.5 h-0.5 bg-white/60 rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.75' : ''}`} />
                </button>
            </div>

            {/* Mobile slide-in — conditionally rendered so it NEVER leaks into desktop layout */}
            <nav className={`mobile-nav md:hidden ${menuOpen ? 'open' : ''}`}>
                {[...navItems, { label: 'Konsultasi Gratis →', href: '#kontak' }].map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="text-white/70 hover:text-rcode-white text-base transition-colors"
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