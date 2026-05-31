export function MacDots() {
    return (
        <div className="flex gap-1.5">
            {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
                <span key={i} className="block w-2 h-2 rounded-full" style={{ background: c }} />
            ))}
        </div>
    );
}