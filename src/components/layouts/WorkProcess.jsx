import SectionLabel from '../core/SectionLabel';
import SectionHeading from '../core/SectionHeading';

export default function WorkProcess({ processSteps }) {
    return (
        <section id="proses" className="max-w-7xl mx-auto px-6 md:px-8 py-28">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="sticky top-24">
                    <SectionLabel>Alur Pengerjaan</SectionLabel>
                    <SectionHeading>
                        Proses Kerja
                    </SectionHeading>

                    <p className="text-white/60 text-[0.95rem] leading-relaxed font-light max-w-md mt-6">
                        Setiap proyek dikerjakan dengan alur yang jelas, mulai dari memahami kebutuhan
                        hingga sistem siap digunakan.
                    </p>
                </div>

                <div className="flex flex-col border-t border-white/8">
                    {processSteps.map((step, i) => (
                        <div
                            key={i}
                            className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-white/8 group"
                        >
                            <span className="font-mono text-[0.75rem] text-rcode-amber pt-1">
                                0{i + 1}
                            </span>

                            <div>
                                <h3 className="font-serif text-2xl mb-3 group-hover:text-rcode-amber transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-white/60 text-[0.9rem] leading-relaxed font-light max-w-xl">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}