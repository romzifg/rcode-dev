'use client';

import Amber from "../core/Amber";
import { BtnAmber } from "../core/Button";
import SectionHeading from "../core/SectionHeading";
import SectionLabel from "../core/SectionLabel";

export default function WhySection({ reasons }) {
    return (
        <section
            id="kenapa"
            className="py-28"
            style={{ background: 'linear-gradient(180deg, transparent, #171714 30%, #171714 70%, transparent)' }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-24 items-center">
                <div>
                    <SectionLabel>Kenapa RCode.dev</SectionLabel>
                    <SectionHeading>
                        Partner Teknologi<br /><Amber>untuk Pertumbuhan Bisnis Anda</Amber>
                    </SectionHeading>
                    <p className="text-white/60 text-[1.05rem] leading-[1.65] font-light mt-6 mb-10">
                        Kami membantu bisnis mengurangi pekerjaan manual, mempercepat operasional, dan meningkatkan produktivitas melalui website dan sistem yang dirancang sesuai kebutuhan.
                    </p>
                    <BtnAmber href="#kontak">Diskusikan Kebutuhan Anda</BtnAmber>
                </div>

                <div className="flex flex-col gap-4">
                    {reasons.map((r, i) => (
                        <div
                            key={i}
                            className="flex gap-5 items-start px-6 py-5 bg-rcode-bg border border-white/8 hover:border-rcode-amber/35 hover:bg-rcode-amber/6 rounded-xl transition-all duration-200"
                        >
                            <span className="text-[1.4rem] shrink-0 mt-0.5">{r.icon}</span>
                            <div>
                                <p className="font-medium mb-0.5">{r.title}</p>
                                <p className="text-white/60 text-[0.85rem] font-light">{r.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}