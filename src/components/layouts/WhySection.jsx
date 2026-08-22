'use client';

import Amber from "../core/Amber";
import { BtnAmber } from "../core/Button";
import SectionHeading from "../core/SectionHeading";
import SectionLabel from "../core/SectionLabel";

export default function WhySection({ reasons }) {
    return (
        <section
            id="kenapa"
            className="py-20 md:py-28"
            style={{ background: 'linear-gradient(180deg, transparent, #151513 24%, #151513 76%, transparent)' }}
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
                            className="group flex gap-5 items-start px-6 py-6 bg-rcode-bg border border-white/8 hover:border-rcode-amber/30 hover:-translate-y-0.5 rounded-2xl transition-all duration-200"
                        >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-rcode-amber/18 bg-rcode-amber/7 font-mono text-[0.7rem] text-rcode-amber transition-colors group-hover:bg-rcode-amber group-hover:text-rcode-bg">0{i + 1}</span>
                            <div>
                                <p className="font-medium mb-1.5">{r.title}</p>
                                <p className="text-white/55 text-[0.87rem] leading-relaxed font-light">{r.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
