"use client";

import { useState } from "react";
import { MacDots } from "../core/MacDots";
import SectionLabel from "../core/SectionLabel";
import SectionHeading from "../core/SectionHeading";
import Image from "next/image";

const DETAIL_ROUTES = {
    "pos-system": "/pos",
    "hris-platform": "/hris",
    "google-sheet-pos": "/cashier",
    "google-sheet-cashflow": "/cashflow",
};

export default function WorkSection({ works }) {
    const [active, setActive] = useState(0);
    const current = works[active];
    const detailHref = DETAIL_ROUTES[current.id];

    return (
        <section id="portofolio" className="max-w-7xl mx-auto px-5 py-20 sm:px-6 md:px-8 md:py-28">
            <SectionLabel>Hasil Pengerjaan</SectionLabel>
            <SectionHeading>Portofolio</SectionHeading>

            <div className="portfolio-tabs mt-10 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-3 md:hidden" aria-label="Pilih proyek">
                {works.map((work, index) => (
                    <button
                        key={work.id}
                        type="button"
                        onClick={() => setActive(index)}
                        aria-pressed={active === index}
                        className={`shrink-0 snap-start rounded-full border px-4 py-2.5 text-left text-[0.78rem] transition-colors ${active === index
                            ? "border-rcode-amber/50 bg-rcode-amber/12 text-rcode-amber"
                            : "border-white/10 bg-white/3 text-white/55"
                            }`}
                    >
                        <span className="mr-2 font-mono text-[0.62rem] opacity-60">0{index + 1}</span>
                        {work.title.split(" - ")[0]}
                    </button>
                ))}
            </div>

            <div className="grid gap-8 mt-5 items-start md:mt-12 md:grid-cols-2 md:gap-12 lg:gap-16">
                {/* List */}
                <div className="hidden flex-col md:flex">
                    {works.map((w, i) => (
                        <button
                            key={w.id}
                            type="button"
                            aria-pressed={active === i}
                            className={`work-item flex w-full justify-between items-start py-6 border-t border-white/8 last:border-b last:border-white/8 cursor-pointer text-left ${active === i ? "active" : ""}`}
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
                        </button>
                    ))}
                </div>

                {/* Preview card */}
                <div className="md:sticky md:top-24">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-rcode-bg2 p-5 shadow-[0_24px_80px_rgba(0,0,0,.22)] sm:p-6 lg:p-8">
                        {/* ambient glow */}
                        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-rcode-amber/10 pointer-events-none blur-3xl" />

                        <p className="font-mono text-[0.72rem] text-rcode-amber uppercase tracking-widest mb-2">{current.cat}</p>

                        <h3 className="font-serif text-[1.8rem] leading-tight mb-3 sm:text-3xl">{current.title}</h3>

                        <p className="text-white/60 text-[0.9rem] leading-relaxed font-light mb-5 sm:mb-6">{current.desc}</p>

                        {/* Preview image */}
                        {current.img ? (
                            <div className="portfolio-preview mb-6 overflow-hidden rounded-xl border border-white/10 bg-rcode-bg3 shadow-[0_18px_45px_rgba(0,0,0,.25)]">
                                <div className="flex items-center justify-between border-b border-white/8 px-3 py-2.5">
                                    <div className="flex gap-1.5" aria-hidden="true">
                                        <MacDots />
                                    </div>
                                    <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/25">Preview</span>
                                </div>
                                <div className={`relative ${current.imgLayout === "portrait"
                                    ? "aspect-[4/3] sm:aspect-[3/2]"
                                    : "aspect-[4/3] sm:aspect-video"
                                    }`}>
                                    <Image
                                        src={current.img}
                                        alt={`${current.title} preview`}
                                        fill
                                        sizes="(min-width: 1280px) 520px, (min-width: 768px) 45vw, calc(100vw - 72px)"
                                        className={`transition-transform duration-500 ${current.imgLayout === "portrait"
                                            ? "object-contain p-2.5 sm:p-3"
                                            : "object-contain p-2 sm:p-3"
                                            }`}
                                    />
                                </div>
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

                        {/* Features */}
                        {current.features?.length > 0 && (
                            <div className="mb-6">
                                <p className="font-mono text-[0.7rem] text-white/35 uppercase tracking-widest mb-3">Fitur Utama</p>

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

                        {/* CTA area */}
                        <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/8">
                            {detailHref && (
                                <a
                                    href={detailHref}
                                    className="group inline-flex items-center gap-1.5 bg-rcode-amber/10 border border-rcode-amber/30 text-rcode-amber text-[0.85rem] font-medium rounded-lg px-4 py-2.5 transition-colors hover:bg-rcode-amber/20 hover:border-rcode-amber/50"
                                >
                                    Lihat Detail
                                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                                </a>
                            )}

                            <a
                                href="#kontak"
                                className={`inline-flex items-center gap-1.5 text-[0.85rem] font-medium transition-opacity hover:opacity-70 ${detailHref ? "text-white/60" : "text-rcode-amber"
                                    }`}
                            >
                                Diskusi Proyek Serupa
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
