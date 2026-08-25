export default function SectionHeading({ children }) {
    return (
        <h2 className="max-w-3xl font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.07] tracking-[-0.035em]">
            {children}
        </h2>
    );
}
