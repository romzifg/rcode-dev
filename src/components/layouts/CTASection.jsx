'use client';

import Amber from "../core/Amber";
import { BtnAmber, BtnGhost } from "../core/Button";
import SectionLabel from "../core/SectionLabel";

export default function CTASection({ ctaTags }) {
    return (
        <section id="kontak" className="relative py-32 text-center overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(232,160,32,0.08) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-175 mx-auto px-6 md:px-8">
                <SectionLabel>Mulai Sekarang</SectionLabel>

                <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight mb-5">
                    Siap Digitilasisasi<br />
                    <Amber>Bisnis Anda?</Amber>
                </h2>

                <p className="text-white/60 text-[1.05rem] leading-[1.65] font-light mb-10">
                    Ceritakan kebutuhan bisnis Anda. Kami bantu berikan arahan solusi, estimasi pengerjaan, dan opsi pengembangan yang paling sesuai.
                </p>

                <div className="flex gap-4 justify-center flex-wrap mb-8">
                    <BtnAmber href="https://wa.me/6289560214608" large external>
                        WhatsApp — 0895-6021-44608
                    </BtnAmber>
                    <BtnGhost href="https://instagram.com/rfghozi" large external>
                        Instagram @rfghozi
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
            </div>
        </section>
    );
}