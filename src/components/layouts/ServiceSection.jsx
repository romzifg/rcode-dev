'use client';

import Amber from "../core/Amber";
import SectionHeading from "../core/SectionHeading";
import SectionLabel from "../core/SectionLabel";

export default function ServicesSection({ services }) {
    return (
        <section id="layanan" className="max-w-7xl mx-auto px-6 md:px-8 py-28">
            <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
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

            <div className="flex flex-col">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="service-row grid gap-8 items-start py-8 border-t border-white/8 last:border-b last:border-white/8 cursor-default"
                        style={{ gridTemplateColumns: '60px 1fr 24px' }}
                    >
                        <span className="font-mono text-xs text-rcode-amber pt-1">{s.number}</span>

                        <div>
                            <h3 className="font-serif text-2xl tracking-tight mb-2">{s.title}</h3>
                            <p className="text-white/60 text-[0.95rem] leading-relaxed font-light mb-4">{s.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {s.tags.map((t, j) => (
                                    <span
                                        key={j}
                                        className="font-mono text-[0.72rem] text-white/60 px-2.5 py-0.5 bg-rcode-bg3 border border-white/8 rounded"
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