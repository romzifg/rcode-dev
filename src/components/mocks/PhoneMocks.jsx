export default function PhoneMockup() {
    return (
        <div className="mockup-phone w-50 shrink-0 bg-[#1a1a17] border border-white/8 rounded-[20px] p-4 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            {/* pill notch */}
            <div className="w-14 h-1 bg-white/10 rounded-sm mx-auto mb-4" />

            <div className="flex justify-between text-[0.7rem] text-white/60 mb-3">
                <span className="font-semibold text-rcode-white">KasKu</span>
                <span>Romzi FG</span>
            </div>

            <div className="mb-3">
                <p className="text-[0.6rem] text-white/60 uppercase tracking-widest">Saldo Gabungan</p>
                <p className="font-mono text-lg font-medium text-rcode-white">Rp 1.035.000</p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-rcode-bg3 rounded-lg p-2">
                    <p className="text-[0.6rem] text-white/60">Masuk</p>
                    <p className="font-mono text-[0.68rem] font-medium text-rcode-green">+Rp 1.050.000</p>
                </div>
                <div className="bg-rcode-bg3 rounded-lg p-2">
                    <p className="text-[0.6rem] text-white/60">Keluar</p>
                    <p className="font-mono text-[0.68rem] font-medium text-rcode-red">-Rp 15.000</p>
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                {['+Rp 535.000', '+Rp 515.000', '+Rp 500.000'].map((t, i) => (
                    <div key={i} className="flex items-center gap-1.5 font-mono text-[0.65rem] text-rcode-amber-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-rcode-amber shrink-0" />
                        {t}
                    </div>
                ))}
            </div>
        </div>
    );
}