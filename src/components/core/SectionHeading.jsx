export default function SectionHeading({ children }) {
    return (
        <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] tracking-tight">
            {children}
        </h2>
    );
}