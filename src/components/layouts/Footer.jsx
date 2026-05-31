'use client';

export default function Footer({ footerLinks }) {
    return (
        <footer className="border-t border-white/8 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-wrap justify-between gap-12 pb-10 border-b border-white/8">
                    <div>
                        <span className="font-serif text-2xl text-rcode-white">
                            RCode<span className="text-rcode-amber">.dev</span>
                        </span>
                        <p className="text-white/60 text-[0.88rem] font-light mt-2">
                            Website & sistem aplikasi untuk membantu bisnis bekerja lebih efisien.
                        </p>
                    </div>

                    <div className="flex gap-16 flex-wrap">
                        {Object.entries(footerLinks).map(([group, links]) => (
                            <div key={group} className="flex flex-col gap-2.5">
                                <p className="text-[0.82rem] font-medium text-white/60 uppercase tracking-[0.06em] mb-1">
                                    {group}
                                </p>
                                {links.map((link) => (
                                    <a
                                        target="_blank"
                                        key={link.label}
                                        href={link.href}
                                        className="text-white/60 hover:text-rcode-white text-[0.9rem] font-light transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between flex-wrap gap-4 pt-6 text-[0.82rem] text-white/30">
                    <span>© {new Date().getFullYear()} RCode.dev</span>
                    <span>Made with ☕ in Indonesia</span>
                </div>
            </div>
        </footer>
    );
}