'use client';

import Amber from "../core/Amber";
import SectionHeading from "../core/SectionHeading";
import SectionLabel from "../core/SectionLabel";

export default function ServicesSection({ services }) {
    return (
        <section id="layanan" className="max-w-7xl mx-auto px-6 py-20 md:px-8 md:py-28">
            <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
                <div>
                    <SectionLabel>Apa yang Kami Kerjakan</SectionLabel>
                    <SectionHeading>
                        Solusi <br /><Amber>yang Kami Bangun</Amber>
                    </SectionHeading>
                </div>
                <p className="text-white/60 text-[1.05rem] leading-[1.65] font-light">
                    Solusi digital yang dirancang untuk membantu bisnis bekerja lebih efisien, mulai dari website profesional hingga sistem operasional yang terintegrasi.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="service-card group relative min-h-70 overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-7 md:p-8"
                    >
                        <div className="absolute -right-8 -top-10 font-serif text-[8rem] leading-none text-white/2 transition-colors group-hover:text-rcode-amber/5">{s.number}</div>
                        <div className="mb-12 flex items-center justify-between">
                            <span className="font-mono text-xs text-rcode-amber">{s.number}</span>
                            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/40 transition-all group-hover:rotate-45 group-hover:border-rcode-amber/40 group-hover:text-rcode-amber">↗</span>
                        </div>
                        <div className="relative">
                            <h3 className="font-serif text-2xl md:text-[1.7rem] tracking-tight mb-3">{s.title}</h3>
                            <p className="text-white/55 text-[0.93rem] leading-relaxed font-light mb-5 max-w-lg">{s.desc}</p>
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
