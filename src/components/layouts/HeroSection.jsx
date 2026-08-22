'use client';

import Amber from "../core/Amber";
import { BtnAmber, BtnGhost } from "../core/Button";
import Image from "next/image";

export default function HeroSection({ stats }) {
    const whatsappUrl = 'https://wa.me/6289560214608?text=Halo%20RCode.dev%2C%20saya%20ingin%20konsultasi%20tentang%20website%20atau%20sistem%20untuk%20bisnis%20saya.';

    return (
        <section className="hero-grid relative min-h-screen overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="hero-orb hero-orb-one" />
            <div className="hero-orb hero-orb-two" />
            <div className="relative z-10 grid items-center gap-14 max-w-7xl mx-auto px-6 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
                <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rcode-green/20 bg-rcode-green/8 px-3.5 py-2 text-[0.78rem] font-medium text-rcode-green">
                    <span className="h-2 w-2 rounded-full bg-rcode-green shadow-[0_0_0_5px_rgba(93,202,138,0.1)]" />
                    Menerima proyek baru untuk 2026
                </div>

                <h1 className="font-serif text-[clamp(2.75rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.045em] mb-7">
                    Sistem digital untuk<br />
                    bisnis yang ingin<br />
                    <Amber>bergerak lebih cepat.</Amber>
                </h1>

                <p className="text-white/60 text-[1.05rem] md:text-[1.12rem] leading-[1.7] font-light max-w-145 mb-8">
                    Dari website yang meyakinkan pelanggan hingga dashboard dan automasi yang memangkas kerja manual—dibangun sesuai alur bisnis Anda.
                </p>

                <div className="flex gap-3 flex-wrap mb-5">
                    <BtnAmber href={whatsappUrl} external>Konsultasi Gratis</BtnAmber>
                    <BtnGhost href="#portofolio">Lihat Portofolio</BtnGhost>
                </div>

                <p className="mb-11 flex items-center gap-2 text-[0.8rem] text-white/40">
                    <span className="text-rcode-green">✓</span> Tanpa komitmen &nbsp;·&nbsp; Respon langsung via WhatsApp
                </p>

                <div className="grid grid-cols-2 gap-5 border-t border-white/8 pt-7 sm:flex sm:items-center sm:gap-10">
                    {stats.map((s, i) => (
                        <div key={i}>
                            <p className="font-mono text-[1.65rem] font-medium text-rcode-white">{s.value}</p>
                            <p className="text-[0.75rem] text-white/45 mt-1 max-w-32 leading-snug">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative mx-auto w-full max-w-160 lg:max-w-none">
                <div className="hero-showcase relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-rcode-bg2 p-2.5 shadow-[0_35px_100px_rgba(0,0,0,0.45)]">
                    <div className="flex items-center justify-between px-3 py-2.5">
                        <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f4bd4f]" /><span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" /></div>
                        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/30">Selected Works</span>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#0d1424]">
                        <Image
                            src="/images/base.png"
                            alt="Kumpulan website dan sistem aplikasi karya RCode.dev"
                            fill
                            priority
                            sizes="(min-width: 1024px) 48vw, 90vw"
                            className="object-cover object-left-top"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#0d1424] to-transparent" />
                    </div>
                </div>

                <div className="float-card absolute -bottom-7 -left-3 rounded-2xl border border-white/10 bg-[#1c1c18]/92 p-4 shadow-2xl backdrop-blur-xl sm:-left-7 sm:p-5">
                    <div className="mb-2 flex items-center gap-2 text-[0.72rem] text-white/45"><span className="grid h-6 w-6 place-items-center rounded-lg bg-rcode-green/12 text-rcode-green">✓</span> Solusi end-to-end</div>
                    <p className="font-serif text-lg">Dari ide hingga go-live</p>
                </div>

                <div className="float-card float-card-delay absolute -right-2 -top-5 rounded-2xl border border-rcode-amber/20 bg-[#1c1c18]/92 p-4 shadow-2xl backdrop-blur-xl sm:-right-5">
                    <p className="font-mono text-[0.65rem] uppercase tracking-widest text-rcode-amber">Fokus Utama</p>
                    <p className="mt-1 text-sm font-medium">Efisiensi & pertumbuhan bisnis</p>
                </div>
            </div>
            </div>
        </section>
    );
}
