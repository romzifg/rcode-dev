'use client';

import { useState } from "react";
import { MacDots } from "../core/MacDots";
import SectionLabel from "../core/SectionLabel";
import SectionHeading from "../core/SectionHeading";

export default function WorkSection({ works }) {
    const [active, setActive] = useState(0);
    const current = works[active];

    return (
        <section id="portofolio" className="max-w-7xl mx-auto px-6 md:px-8 py-28">
            <SectionLabel>Hasil Pengerjaan</SectionLabel>
            <SectionHeading>
                Portofolio
            </SectionHeading>

            <div className="grid md:grid-cols-2 gap-16 mt-12 items-start">
                {/* List */}
                <div className="flex flex-col">
                    {works.map((w, i) => (
                        <div
                            key={i}
                            className={`work-item flex justify-between items-start py-6 border-t border-white/8 last:border-b last:border-white/8 cursor-pointer ${active === i ? 'active' : ''}`}
                            onMouseEnter={() => setActive(i)}
                            onClick={() => setActive(i)}
                        >
                            <div className="flex gap-4 items-start">
                                <span className="font-mono text-[0.7rem] text-white/30 pt-0.5">0{i + 1}</span>
                                <div>
                                    <p className="wi-title font-medium text-[1.05rem] mb-1">{w.title}</p>
                                    <p className="text-[0.85rem] text-white/60 font-light">{w.desc}</p>
                                </div>
                            </div>
                            <span className="font-mono text-[0.72rem] text-white/30 whitespace-nowrap pt-0.5">{w.cat}</span>
                        </div>
                    ))}
                </div>

                {/* Preview card */}
                <div className="sticky top-24">
                    <div className="relative bg-rcode-bg2 border border-white/8 rounded-2xl p-8 overflow-hidden">
                        {/* ambient glow */}
                        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-rcode-amber/10 pointer-events-none blur-3xl" />

                        <p className="font-mono text-[0.72rem] text-rcode-amber uppercase tracking-widest mb-2">
                            {current.cat}
                        </p>

                        <h3 className="font-serif text-3xl mb-3">{current.title}</h3>

                        <p className="text-white/60 text-[0.9rem] leading-relaxed font-light mb-6">
                            {current.desc}
                        </p>

                        {/* Features */}
                        {current.features?.length > 0 && (
                            <div className="mb-6">
                                <p className="font-mono text-[0.7rem] text-white/35 uppercase tracking-widest mb-3">
                                    Fitur Utama
                                </p>

                                <div className="grid gap-2">
                                    {current.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-2 text-[0.85rem] text-white/70">
                                            <span className="text-rcode-amber mt-0.5">✓</span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tags */}
                        {current.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {current.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="font-mono text-[0.68rem] text-white/55 bg-white/4 border border-white/10 rounded-md px-2.5 py-1"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Preview image */}
                        {current.img ? (
                            <div className="overflow-hidden mb-6">
                                <img
                                    src={current.img}
                                    alt={`${current.title} preview`}
                                    className="w-full object-cover p-4"
                                />
                            </div>
                        ) : (
                            <div className="bg-rcode-bg3 border border-white/8 rounded-xl overflow-hidden mb-6">
                                <div className="flex gap-1.5 px-3 py-2.5 border-b border-white/8">
                                    <MacDots />
                                </div>
                                <div className="p-4 flex flex-col gap-3">
                                    <div className="flex gap-2 items-end">
                                        <div className="flex-1 h-15 rounded bg-rcode-amber/25" />
                                        <div className="flex-1 h-6.25 rounded bg-white/10" />
                                        <div className="flex-1 h-10 rounded bg-white/10" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-1.5">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="h-5 rounded bg-white/6" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <a
                            href="#kontak"
                            className="text-rcode-amber text-[0.88rem] font-medium hover:opacity-70 transition-opacity"
                        >
                            Diskusi Proyek Serupa →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}