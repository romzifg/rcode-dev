import Link from "next/link";

export const metadata = {
	title: "Privacy Policy — Cashier By RCode",
};

const sections = [
	{
		title: "1. Ringkasan Singkat",
		body: [
			"Cashier By RCode berjalan sepenuhnya di atas akun Google Sheets & Google Apps Script milik kamu. Kami tidak menyimpan, mengakses, atau memiliki cara untuk melihat data transaksi, stok, pelanggan, maupun karyawan toko kamu. Semua data tersebut tersimpan di Google Drive kamu sendiri.",
		],
	},
	{
		title: "2. Data yang Kami Kumpulkan",
		body: [
			"Saat kamu membeli produk ini melalui Lynk.id, informasi pembelian (nama, email, riwayat transaksi pembayaran) diproses dan disimpan oleh Lynk.id sesuai kebijakan privasi mereka sendiri, bukan oleh kami secara langsung. Kami hanya menerima notifikasi pembelian untuk keperluan pengiriman akses produk.",
			"Jika kamu menghubungi kami untuk dukungan (misalnya lewat email atau WhatsApp), kami menyimpan percakapan tersebut sejauh diperlukan untuk membantu menyelesaikan pertanyaan kamu.",
		],
	},
	{
		title: "3. Data yang Tidak Kami Akses",
		list: [
			"Data produk, harga, dan stok toko kamu",
			"Data transaksi dan riwayat penjualan",
			"Data pelanggan dan nomor WhatsApp yang kamu simpan",
			"Username dan kata sandi akun kasir yang kamu buat",
		],
		after: "Seluruh data di atas berada di dalam Google Sheets pribadi kamu, di luar jangkauan kami.",
	},
	{
		title: "4. Cookie & Analitik Situs",
		body: [
			"Halaman produk ini tidak menggunakan cookie pelacakan pihak ketiga di luar yang secara wajar digunakan oleh penyedia hosting untuk menjalankan situs.",
		],
	},
	{
		title: "5. Keamanan",
		body: [
			"Karena data kamu tersimpan di infrastruktur Google, keamanannya tunduk pada kebijakan keamanan dan privasi Google sendiri. Kami menyarankan kamu mengaktifkan verifikasi dua langkah pada akun Google yang digunakan untuk toko kamu.",
		],
	},
	{
		title: "6. Hak Kamu",
		body: [
			"Kamu berhak meminta informasi apa saja yang kami simpan terkait kamu, atau meminta penghapusannya, dengan menghubungi kontak di bagian bawah halaman ini.",
		],
	},
	{
		title: "7. Perubahan Kebijakan",
		body: ["Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan signifikan akan diinformasikan melalui halaman ini."],
	},
	{
		title: "8. Kontak",
		body: ["RCode.dev — [email/WhatsApp support kamu di sini]"],
	},
];

export default function CashierPrivacyPolicyPage() {
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
					<h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-2">Kebijakan Privasi</h1>
					<p className="font-mono text-[0.72rem] text-white/35 mb-14">Berlaku efektif: 12 Agustus 2026</p>

					<p className="text-white/60 text-[0.95rem] leading-[1.75] font-light mb-12">
						RCode.dev ("kami") menghargai privasi kamu. Kebijakan ini menjelaskan bagaimana kami menangani informasi terkait produk{" "}
						<strong className="text-white/80 font-medium">Cashier By RCode</strong>.
					</p>

					<div className="flex flex-col divide-y divide-white/[0.07]">
						{sections.map((s) => (
							<div key={s.title} className="py-8 first:pt-0">
								<h2 className="font-serif text-xl mb-3">{s.title}</h2>
								{s.body?.map((p, i) => (
									<p key={i} className="text-white/60 text-[0.9rem] leading-[1.7] font-light mb-3 last:mb-0">
										{p}
									</p>
								))}
								{s.list && (
									<ul className="list-none space-y-2 my-3">
										{s.list.map((item) => (
											<li key={item} className="flex gap-3 text-white/60 text-[0.9rem] leading-[1.6] font-light">
												<span className="text-rcode-amber">·</span>
												{item}
											</li>
										))}
									</ul>
								)}
								{s.after && <p className="text-white/60 text-[0.9rem] leading-[1.7] font-light">{s.after}</p>}
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
						<Link href="/cashier/terms" className="hover:text-rcode-amber transition-colors">
							Terms of Service
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
