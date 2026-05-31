'use client';

import Amber from "../core/Amber";
import { BtnAmber, BtnGhost } from "../core/Button";

export default function HeroSection({ stats }) {
    return (
        <section className="relative min-h-screen grid md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 overflow-hidden">
            <div className="hero-grid" />

            <div className="relative z-10">
                <h1 className="font-serif text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.1] tracking-tight mb-8">
                    Website &amp; Sistem Aplikasi<br />
                    <Amber>Untuk Bisnis</Amber> <br />
                    Tumbuh Lebih Cepat
                </h1>

                <p className="text-white/60 text-[1.05rem] leading-[1.65] font-light max-w-110 mb-8">
                    Kami membantu bisnis Anda go digital dengan website modern,
                    sistem otomatis, dan integrasi platform.
                </p>

                <div className="flex gap-4 flex-wrap mb-12">
                    <BtnAmber href="#kontak">Mulai Diskusi</BtnAmber>
                    <BtnGhost href="#portofolio">Lihat Portofolio</BtnGhost>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8 pt-8 border-t border-white/8">
                    {stats.map((s, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <div>
                                <p className="font-mono text-[1.8rem] font-medium text-rcode-amber">{s.value}</p>
                                <p className="text-[0.8rem] text-white/60 mt-0.5">{s.label}</p>
                            </div>
                            {i < stats.length - 1 && (
                                <div className="w-px h-9 bg-white/8" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mockups — hidden on mobile */}
            <div className="relative z-10 hidden md:flex items-end gap-6">
                <img src="/images/ss_kasku.png" className="absolute -top-70 -left-10 w-32 pointer-events-none" />
                <img src="/images/ss_pos.png" className="absolute -top-40 left-30- w-200 pointer-events-none" />
            </div>
        </section>
    );
}