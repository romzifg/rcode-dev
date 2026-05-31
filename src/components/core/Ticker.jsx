export default function Ticker({ techStack }) {
    const doubled = [...techStack, ...techStack];
    return (
        <div className="overflow-hidden border-y border-white/8 bg-rcode-bg2 py-3.5">
            <div className="ticker-track">
                {doubled.map((t, i) => (
                    <span key={i} className="font-mono text-[0.8rem] text-white/60 px-6 inline-flex items-center gap-6">
                        {t}
                        <span className="text-rcode-amber text-[0.6rem]">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}