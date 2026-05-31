'use client';

import { useState } from 'react';
import SectionLabel from '../core/SectionLabel';
import SectionHeading from '../core/SectionHeading';

export default function FAQSection({ faqs }) {
    const [active, setActive] = useState(0);

    return (
        <section id="faq" className="max-w-7xl mx-auto px-6 md:px-8 py-28">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Heading */}
                <div className="sticky top-24">
                    <SectionLabel>Pertanyaan Umum</SectionLabel>
                    <SectionHeading>
                        FAQ
                    </SectionHeading>

                    <p className="text-white/60 text-[0.95rem] leading-relaxed font-light max-w-md mt-6">
                        Beberapa hal yang sering ditanyakan sebelum memulai pembuatan website,
                        dashboard, atau sistem aplikasi custom.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col border-t border-white/8">
                    {faqs.map((faq, i) => {
                        const isActive = active === i;

                        return (
                            <div
                                key={i}
                                className="border-b border-white/8"
                            >
                                <button
                                    type="button"
                                    onClick={() => setActive(isActive ? null : i)}
                                    className="w-full flex justify-between items-start gap-6 py-6 text-left group"
                                >
                                    <div className="flex gap-4 items-start">
                                        <span className="font-mono text-[0.7rem] text-rcode-amber pt-1">
                                            0{i + 1}
                                        </span>

                                        <div>
                                            <h3 className={`font-serif text-xl transition-colors ${isActive ? 'text-rcode-amber' : 'text-white group-hover:text-rcode-amber'}`}>
                                                {faq.question}
                                            </h3>

                                            {isActive && (
                                                <p className="text-white/60 text-[0.9rem] leading-relaxed font-light mt-4 max-w-2xl">
                                                    {faq.answer}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <span className={`font-mono text-xl leading-none transition-transform text-white/40 ${isActive ? 'rotate-45 text-rcode-amber' : 'group-hover:text-rcode-amber'}`}>
                                        +
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}