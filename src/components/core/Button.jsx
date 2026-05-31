export function BtnAmber({ href, children, large = false, external = false }) {
    const cls = large ? 'px-10 py-4 text-base' : 'px-7 py-3.5 text-[0.95rem]';
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
        <a
            href={href}
            {...ext}
            className={`inline-flex items-center gap-2 ${cls} bg-rcode-amber hover:bg-rcode-amber-light text-rcode-bg font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer`}
        >
            {children}
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
            className={`inline-flex items-center gap-2 ${cls} bg-transparent hover:bg-white/5 text-rcode-white border border-white/30 hover:border-white/60 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer`}
        >
            {children}
        </a>
    );
}