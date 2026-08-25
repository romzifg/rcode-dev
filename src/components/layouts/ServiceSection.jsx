'use client';

import Amber from "../core/Amber";
import SectionHeading from "../core/SectionHeading";
import SectionLabel from "../core/SectionLabel";

export default function ServicesSection({ services }) {
    return (
        <section id="layanan" className="max-w-7xl mx-auto px-6 py-20 md:px-8 md:py-28">
            <div className="mb-14 grid gap-7 md:grid-cols-[1.05fr_.95fr] md:items-end md:gap-12">
                <div>
                    <SectionLabel>Layanan RCode.dev</SectionLabel>
                    <SectionHeading>
                        Solusi digital untuk bisnis <Amber>yang lebih efisien.</Amber>
                    </SectionHeading>
                </div>
                <p className="max-w-xl text-[1rem] leading-[1.75] text-white/65 md:justify-self-end md:text-[1.04rem]">
                    Mulai dari membangun kehadiran online hingga merapikan operasional internal—setiap solusi disesuaikan dengan kebutuhan, tim, dan proses bisnis Anda.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="service-card group relative min-h-64 overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-6 sm:p-7 md:p-8"
                    >
                        <div className="absolute -right-8 -top-10 font-serif text-[8rem] leading-none text-white/2 transition-colors group-hover:text-rcode-amber/5">{s.number}</div>
                        <div className="mb-10 flex items-center justify-between">
                            <span className="font-mono text-xs text-rcode-amber">{s.number}</span>
                            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/40 transition-all group-hover:rotate-45 group-hover:border-rcode-amber/40 group-hover:text-rcode-amber">↗</span>
                        </div>
                        <div className="relative">
                            <h3 className="mb-3 font-sans text-xl font-semibold leading-snug tracking-[-0.02em] md:text-[1.45rem]">{s.title}</h3>
                            <p className="mb-5 max-w-lg text-[0.92rem] leading-[1.7] text-white/62">{s.desc}</p>
                            <p className="mb-2.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/30">Cakupan layanan</p>
                            <div className="flex flex-wrap gap-2">
                                {s.tags.map((t, j) => (
                                    <span
                                        key={j}
                                        className="font-mono text-[0.67rem] text-white/45 px-2.5 py-1 bg-white/3 border border-white/8 rounded-md"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
