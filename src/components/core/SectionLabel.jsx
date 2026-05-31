export default function SectionLabel({ children }) {
    return (
        <p className="font-mono text-xs tracking-[0.12em] uppercase text-rcode-amber mb-3">
            {children}
        </p>
    );
}