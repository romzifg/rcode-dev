import { MacDots } from "../core/MacDots";

export default function LaptopMockup() {
    const sidebar = ['Dashboard', 'Produk', 'Transaksi', 'Laporan'];
    return (
        <div className="mockup-laptop flex-1 min-w-0">
            <div className="bg-[#1a1a17] border border-white/8 rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                {/* title bar */}
                <div className="flex items-center gap-3 px-3 py-2.5 bg-rcode-bg3 border-b border-white/8">
                    <MacDots />
                    <span className="font-mono text-[0.7rem] text-white/60">POS System</span>
                </div>
                {/* body */}
                <div className="flex min-h-40">
                    <div className="w-20 bg-rcode-bg3 border-r border-white/8 py-2 shrink-0">
                        {sidebar.map((item, i) => (
                            <div
                                key={item}
                                className={`px-2 py-1 text-[0.6rem] cursor-default ${i === 0 ? 'text-rcode-amber bg-rcode-amber/10' : 'text-white/60'
                                    }`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 flex items-center justify-center p-3">
                        <div className="flex flex-col items-center gap-2 w-full max-w-27.5">
                            <span className="text-2xl">🖥</span>
                            <div className="w-full h-4 bg-rcode-bg3 rounded border border-white/8" />
                            <div className="w-full h-4 bg-rcode-bg3 rounded border border-white/8" />
                            <div className="w-full py-1 bg-rcode-amber rounded text-center text-[0.6rem] font-semibold text-rcode-bg">
                                Masuk
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-3 bg-rcode-bg3 border border-white/8 border-t-0 rounded-b" />
        </div>
    );
}