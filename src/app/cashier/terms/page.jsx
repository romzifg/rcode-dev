import Link from "next/link";

export const metadata = {
	title: "Terms of Service — Cashier By RCode",
};

const sections = [
	{
		title: "1. Lisensi Penggunaan",
		body: [
			'Pembelian ini memberikan kamu lisensi non-eksklusif untuk menggunakan Cashier By RCode pada satu (1) bisnis/toko. Kamu dilarang menjual ulang, mendistribusikan ulang, atau membagikan tautan "Buat Salinan" kepada pihak lain sebagai produk berdiri sendiri.',
		],
	},
	{
		title: "2. Pembayaran & Pengiriman Produk",
		body: [
			"Pembayaran diproses melalui Lynk.id. Setelah pembayaran berhasil, akses produk (tautan salinan sistem dan panduan instalasi) dikirimkan secara digital melalui platform Lynk.id.",
		],
	},
	{
		title: "3. Kebijakan Refund",
		body: [
			"Karena produk ini bersifat digital dan akses diberikan segera setelah pembelian, permintaan pengembalian dana pada umumnya tidak dapat diproses setelah tautan salinan diakses, kecuali pada kondisi produk terbukti tidak berfungsi sebagaimana dideskripsikan dan tidak dapat diperbaiki melalui dukungan yang kami sediakan.",
		],
	},
	{
		title: "4. Dukungan & Pembaruan",
		body: [
			"Dukungan diberikan secara wajar untuk membantu instalasi dan penggunaan dasar produk. Pembaruan perbaikan (bug fix) diberikan cuma-cuma; penambahan fitur besar di luar cakupan awal dapat ditawarkan secara terpisah.",
		],
	},
	{
		title: "5. Batasan Tanggung Jawab",
		body: [
			'Produk disediakan "sebagaimana adanya" (as-is). Kami tidak bertanggung jawab atas kehilangan data, gangguan operasional toko, atau kerugian usaha yang timbul dari penggunaan produk ini, termasuk gangguan layanan pihak ketiga (Google Sheets, Google Apps Script, WhatsApp) yang berada di luar kendali kami.',
		],
	},
	{
		title: "6. Kekayaan Intelektual",
		body: [
			"Kode program, desain, dan dokumentasi Cashier By RCode adalah milik RCode.dev. Pembelian ini memberikan hak pakai (lisensi), bukan pengalihan hak cipta.",
		],
	},
	{
		title: "7. Perubahan Ketentuan",
		body: ["Ketentuan ini dapat diperbarui sewaktu-waktu. Versi terbaru selalu berlaku sejak dipublikasikan di halaman ini."],
	},
	{
		title: "8. Hukum yang Berlaku",
		body: ["Ketentuan ini tunduk pada dan ditafsirkan sesuai hukum Republik Indonesia."],
	},
	{
		title: "9. Kontak",
		body: ["RCode.dev — [email/WhatsApp support kamu di sini]"],
	},
];

export default function CashierTermsPage() {
	return (
		<div className="min-h-screen bg-rcode-bg text-rcode-white overflow-x-hidden">
			<div className="noise-overlay" />

			<header className="fixed top-0 left-0 right-0 z-100 bg-rcode-bg/90 backdrop-blur-xl border-b border-white/8">
				<div className="max-w-7xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
					<Link href="/cashier" className="flex items-center gap-2 font-serif text-xl tracking-tight text-rcode-white">
						RCode
						<span className="font-mono text-[0.65rem] font-normal tracking-widest uppercase text-rcode-amber border border-rcode-amber/30 rounded-full px-2 py-0.5">
							Cashier
						</span>
					</Link>

					<Link
						href="/cashier"
						className="text-white/60 hover:text-rcode-white text-sm transition-colors duration-200 flex items-center gap-1.5"
					>
						← Kembali ke Cashier
					</Link>
				</div>
			</header>

			<main className="relative z-10 pt-14">
				<section className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28">
					<p className="font-mono text-xs tracking-[0.12em] uppercase text-rcode-amber mb-3">Legal</p>
					<h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-2">Syarat &amp; Ketentuan</h1>
					<p className="font-mono text-[0.72rem] text-white/35 mb-14">Berlaku efektif: 12 Agustus 2026</p>

					<p className="text-white/60 text-[0.95rem] leading-[1.75] font-light mb-12">
						Dengan membeli dan/atau menggunakan <strong className="text-white/80 font-medium">Cashier By RCode</strong>, kamu menyetujui
						syarat dan ketentuan berikut.
					</p>

					<div className="flex flex-col divide-y divide-white/[0.07]">
						{sections.map((s) => (
							<div key={s.title} className="py-8 first:pt-0">
								<h2 className="font-serif text-xl mb-3">{s.title}</h2>
								{s.body.map((p, i) => (
									<p key={i} className="text-white/60 text-[0.9rem] leading-[1.7] font-light mb-3 last:mb-0">
										{p}
									</p>
								))}
							</div>
						))}
					</div>

					<div className="mt-14 p-5 bg-rcode-bg2 border border-white/[0.07] rounded-xl font-mono text-[0.72rem] text-white/40 leading-relaxed">
						Dokumen ini adalah draf template dan disediakan sebagai referensi umum, bukan nasihat hukum. RCode.dev menyarankan peninjauan
						oleh profesional hukum sebelum digunakan secara resmi.
					</div>
				</section>
			</main>

			<footer className="border-t border-white/[0.07] py-8">
				<div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-wrap justify-between gap-4 text-[0.82rem] text-white/30">
					<span>© 2026 RCode — Cashier By RCode</span>
					<div className="flex gap-6">
						<Link href="/cashier/privacy-policy" className="hover:text-rcode-amber transition-colors">
							Privacy Policy
						</Link>
						<Link href="/cashier" className="hover:text-white/60 transition-colors">
							Kembali ke Cashier
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
