export function BtnAmber({ href, children, large = false, external = false }) {
    const cls = large ? 'px-10 py-4 text-base' : 'px-7 py-3.5 text-[0.95rem]';
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
        <a
            href={href}
            {...ext}
            className={`group inline-flex items-center justify-center gap-2.5 ${cls} bg-rcode-amber hover:bg-rcode-amber-light text-rcode-bg font-semibold rounded-xl shadow-[0_10px_35px_rgba(232,160,32,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_42px_rgba(232,160,32,0.28)] cursor-pointer`}
        >
            {children}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
    );
}

export function BtnGhost({ href, children, large = false, external = false }) {
    const cls = large ? 'px-10 py-4 text-base' : 'px-7 py-3.5 text-[0.95rem]';
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
        <a
            href={href}
            {...ext}
            className={`inline-flex items-center justify-center gap-2 ${cls} bg-white/3 hover:bg-white/7 text-rcode-white border border-white/15 hover:border-white/35 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer`}
        >
            {children}
        </a>
    );
}
