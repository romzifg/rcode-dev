'use client';

import Amber from "../core/Amber";
import { BtnAmber, BtnGhost } from "../core/Button";
import SectionLabel from "../core/SectionLabel";

export default function CTASection({ ctaTags }) {
    const whatsappUrl = 'https://wa.me/6289560214608?text=Halo%20RCode.dev%2C%20saya%20ingin%20konsultasi%20tentang%20website%20atau%20sistem%20untuk%20bisnis%20saya.';

    return (
        <section id="kontak" className="relative px-4 py-20 md:px-8 md:py-28 overflow-hidden">
            <div className="cta-panel relative z-10 max-w-6xl mx-auto overflow-hidden rounded-[2rem] border border-rcode-amber/18 px-6 py-16 text-center md:px-14 md:py-24">
                <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-rcode-amber/12 blur-[100px]" />
                <div className="relative z-10 mx-auto max-w-190">
                <SectionLabel>Mulai Sekarang</SectionLabel>

                <h2 className="font-serif text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.04] tracking-[-0.04em] mb-6">
                    Punya proses bisnis yang<br />
                    <Amber>bisa dibuat lebih simpel?</Amber>
                </h2>

                <p className="text-white/55 text-[1rem] md:text-[1.08rem] leading-[1.7] font-light mb-9">
                    Ceritakan kendala dan target Anda. Dalam konsultasi gratis, kami bantu petakan solusi, prioritas fitur, serta estimasi waktu dan biaya yang masuk akal.
                </p>

                <div className="flex gap-4 justify-center flex-wrap mb-8">
                    <BtnAmber href={whatsappUrl} large external>
                        Konsultasi via WhatsApp
                    </BtnAmber>
                    <BtnGhost href="#portofolio" large>
                        Lihat Hasil Kerja
                    </BtnGhost>
                </div>

                <div className="flex gap-2 justify-center flex-wrap">
                    {ctaTags.map((t, i) => (
                        <span
                            key={i}
                            className="px-3.5 py-1.5 border border-rcode-amber/35 bg-rcode-amber/10 rounded-full text-[0.8rem] font-medium text-rcode-amber-light"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <p className="mt-6 text-xs text-white/30">Biasanya membalas dalam beberapa jam pada hari kerja.</p>
                </div>
            </div>
        </section>
    );
}
