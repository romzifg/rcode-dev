"use client";

import Link from "next/link";
import { useState } from "react";

const LYNK_URL = "https://lynk.id/romzifg/cashier-by-rcode"; // TODO: ganti dengan link Lynk.id asli untuk Cashier

const features = [
	{
		icon: "🛒",
		title: "Transaksi Kasir Secepat Klik",
		desc: "Cari produk, masukkan keranjang, dan hitung kembalian otomatis langsung dari Google Sheets. Tanpa loading, tanpa alat tambahan.",
	},
	{
		icon: "📊",
		title: "Dashboard Penjualan Otomatis",
		desc: "Pantau omzet harian, tren 7 hari, dan produk terlaris tanpa harus membuat rumus atau pivot table secara manual.",
	},
	{
		icon: "📦",
		title: "Stok Terupdate Otomatis",
		desc: "Setiap transaksi otomatis memotong stok. Restock, koreksi, dan catat barang rusak langsung dari menu, tanpa edit sheet manual.",
	},
	{
		icon: "⚡",
		title: "Otomatis dengan Apps Script",
		desc: "Fitur kasir, stok, dan laporan berjalan menggunakan Google Apps Script yang terintegrasi penuh dengan Google Sheets.",
	},
	{
		icon: "🔐",
		title: "Peran Admin & Kasir Terpisah",
		desc: "Kasir hanya melihat layar transaksi. Pemilik toko mendapat akses penuh ke dashboard, stok, dan pengaturan.",
	},
	{
		icon: "💬",
		title: "Kirim Struk ke WhatsApp",
		desc: "Pelanggan tidak perlu struk kertas. Kirim struk digital langsung ke nomor WhatsApp mereka setelah transaksi selesai.",
	},
];

const steps = [
	{
		num: "01",
		title: "Dapatkan Cashier",
		desc: "Lakukan pembelian melalui halaman produk RCode. Setelah pembayaran berhasil, kamu akan mendapatkan template dan panduan instalasi.",
	},
	{
		num: "02",
		title: "Salin Template ke Google Drive",
		desc: 'Buka template yang kamu dapatkan, lalu pilih "Buat Salinan" untuk menyimpan salinan Cashier ke Google Drive milikmu.',
	},
	{
		num: "03",
		title: "Aktifkan Apps Script",
		desc: "Ikuti panduan instalasi untuk mengaktifkan fitur kasir & stok. Google akan meminta izin akses saat script pertama kali dijalankan.",
	},
	{
		num: "04",
		title: "Mulai Transaksi",
		desc: "Setelah instalasi selesai, Cashier siap digunakan untuk mencatat transaksi, mengelola stok, dan memantau penjualan toko.",
	},
];

const faqs = [
	{
		q: "Apa yang saya dapatkan setelah membeli Cashier?",
		a: "Kamu akan mendapatkan template Cashier By RCode berbasis Google Sheets beserta panduan instalasi untuk membantu proses penggunaan dan pengaturan awal.",
	},
	{
		q: "Apakah Cashier membutuhkan aplikasi tambahan?",
		a: "Tidak. Cashier By RCode menggunakan Google Sheets dan Google Apps Script sehingga dapat digunakan melalui akun Google yang kamu miliki.",
	},
	{
		q: "Apakah saya perlu bisa coding?",
		a: "Tidak perlu. Kamu cukup mengikuti panduan instalasi yang disediakan. Menambah kasir baru maupun mengganti password pun dilakukan lewat menu, tanpa menyentuh kode.",
	},
	{
		q: "Di mana data penjualan saya disimpan?",
		a: "Cashier By RCode dirancang untuk bekerja pada Google Sheets yang berada di Google Drive akun kamu. Data transaksi, stok, dan pelanggan disimpan pada spreadsheet tersebut sehingga kamu tetap mengelola data lewat akun Google milikmu.",
	},
	{
		q: "Mengapa Google meminta izin akses?",
		a: "Cashier By RCode menggunakan Google Apps Script untuk menjalankan fitur otomatisasi pada Google Sheets. Saat pertama kali menjalankan script, Google akan menampilkan izin yang diperlukan. Pastikan kamu membaca izin yang ditampilkan sebelum memberikan akses.",
	},
	{
		q: "Bisa dipakai lebih dari satu kasir?",
		a: "Bisa. Tambahkan akun untuk tiap kasir dengan username & password masing-masing, langsung dari menu di dalam Spreadsheet, tanpa perlu mengedit kode.",
	},
	{
		q: "Apakah Cashier bisa digunakan dari HP?",
		a: "Ya. Karena Cashier By RCode menggunakan Google Sheets, data dapat diakses melalui browser maupun aplikasi Google Sheets. Untuk transaksi harian, layar laptop/tablet lebih nyaman digunakan.",
	},
	{
		q: "Apakah saya mendapatkan panduan instalasi?",
		a: "Ya. Panduan instalasi disediakan untuk membantu kamu mulai dari membuat salinan template hingga mengaktifkan fitur otomatisasi Cashier By RCode.",
	},
];

const benefits = [
	"Sistem kasir Google Sheets siap pakai",
	"Google Apps Script untuk otomatisasi",
	"Dashboard ringkasan penjualan",
	"Panduan instalasi step-by-step",
	"Peran Admin & Kasir terpisah",
	"Data tetap berada pada Google Drive akun kamu",
];

export default function CashierPage() {
	const [activePreview, setActivePreview] = useState(1);

	return (
		<div className="min-h-screen bg-rcode-bg text-rcode-white overflow-x-hidden">
			<div className="noise-overlay" />

			{/* =========================================================
                NAVBAR
            ========================================================= */}
			<header className="fixed top-0 left-0 right-0 z-100 bg-rcode-bg/90 backdrop-blur-xl border-b border-white/8">
				<div className="max-w-7xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2 font-serif text-xl tracking-tight text-rcode-white">
						RCode
						<span className="font-mono text-[0.65rem] font-normal tracking-widest uppercase text-rcode-amber border border-rcode-amber/30 rounded-full px-2 py-0.5">
							Cashier
						</span>
					</Link>

					<Link href="/" className="text-white/60 hover:text-rcode-white text-sm transition-colors duration-200 flex items-center gap-1.5">
						← Kembali
					</Link>
				</div>
			</header>

			<main className="relative z-10 pt-14">
				{/* =====================================================
                    HERO
                ===================================================== */}
				<section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
					<div className="max-w-3xl">
						<div className="flex flex-wrap items-center gap-3 mb-6">
							<span className="px-3 py-1 bg-rcode-amber/10 border border-rcode-amber/30 rounded-full font-mono text-[0.72rem] text-rcode-amber uppercase tracking-widest">
								Digital Product
							</span>

							<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[0.72rem] text-white/50 uppercase tracking-widest">
								Google Sheets + Apps Script
							</span>
						</div>

						<h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] tracking-tight mb-6">
							Cashier By RCode — <em className="not-italic text-rcode-amber">Kasir Toko</em>
							<br />
							yang Lebih Rapi
						</h1>

						<p className="text-white/60 text-[1.05rem] leading-[1.7] font-light max-w-2xl mb-10">
							<strong className="text-white/80 font-medium">Cashier By RCode</strong> adalah aplikasi kasir (Point of Sale) berbasis
							Google Sheets dan Google Apps Script yang membantu kamu mencatat transaksi, mengelola stok, dan memantau penjualan toko
							secara praktis.
						</p>

						<div className="flex flex-wrap gap-4 items-center">
							<a
								href={LYNK_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-rcode-amber hover:bg-rcode-amber-light text-rcode-bg font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-[0.95rem]"
							>
								Dapatkan Cashier →
							</a>

							<span className="text-white/40 text-sm">Template + Panduan Instalasi</span>
						</div>
					</div>
				</section>

				{/* =====================================================
                    ABOUT APPLICATION
                ===================================================== */}
				<section className="border-y border-white/6 bg-rcode-bg2 py-16 md:py-20">
					<div className="max-w-7xl mx-auto px-6 md:px-8">
						<div className="max-w-3xl">
							<p className="font-mono text-xs tracking-[0.12em] uppercase text-rcode-amber mb-3">Tentang Cashier By RCode</p>

							<h2 className="font-serif text-2xl md:text-3xl mb-5">Aplikasi kasir berbasis Google Sheets</h2>

							<p className="text-white/60 text-[0.95rem] leading-[1.75] font-light mb-4">
								Cashier By RCode adalah aplikasi untuk membantu pemilik usaha mencatat transaksi penjualan, mengelola stok produk, dan
								memantau kondisi penjualan menggunakan Google Sheets.
							</p>

							<p className="text-white/60 text-[0.95rem] leading-[1.75] font-light mb-4">
								Aplikasi menggunakan Google Apps Script untuk menyediakan fitur otomatisasi seperti transaksi kasir, dashboard
								penjualan, manajemen stok, riwayat pergerakan barang, serta pengiriman struk digital lewat WhatsApp.
							</p>

							<p className="text-white/60 text-[0.95rem] leading-[1.75] font-light">
								Cashier By RCode bekerja pada salinan Google Sheets yang berada di Google Drive pengguna. Data penjualan dan stok
								tetap dikelola melalui akun Google dan spreadsheet milik pengguna.
							</p>
						</div>
					</div>
				</section>

				{/* =====================================================
                    PREVIEW
                ===================================================== */}
				<section className="border-y border-white/6 bg-rcode-bg2 py-16 md:py-20">
					<div className="max-w-7xl mx-auto px-6 md:px-8">
						<div className="text-center mb-10">
							<p className="font-mono text-xs tracking-[0.12em] uppercase text-rcode-amber mb-3">Preview</p>

							<h2 className="font-serif text-2xl md:text-3xl">Kelola transaksi dalam satu tempat</h2>

							<p className="mt-3 text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
								Tampilan kasir untuk transaksi harian, dashboard untuk memantau penjualan, dan manajemen stok dalam satu sistem.
							</p>
						</div>

						<div className="relative">
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-rcode-amber/6 blur-3xl rounded-full pointer-events-none" />

							<div className="relative z-10 max-w-xl mx-auto">
								<div className="relative rounded-2xl border border-white/10 bg-rcode-bg3 overflow-hidden shadow-2xl">
									<div className="h-9 px-4 flex items-center gap-2 border-b border-white/8 bg-white/2.5">
										<span className="w-2.5 h-2.5 rounded-full bg-white/15" />
										<span className="w-2.5 h-2.5 rounded-full bg-white/15" />
										<span className="w-2.5 h-2.5 rounded-full bg-white/15" />

										<div className="ml-3 h-5 flex-1 max-w-xs rounded bg-white/4 border border-white/5" />
									</div>

									<div className="relative flex justify-center bg-black/20">
										<img
											src={`/images/cashier_${activePreview}.png`}
											alt={`Preview aplikasi Cashier By RCode ${activePreview}`}
											className="w-full h-auto block"
										/>
									</div>
								</div>

								<div className="flex justify-center mt-4">
									<span className="font-mono text-[0.65rem] text-white/35 tracking-wider">
										{String(activePreview).padStart(2, "0")} / 04
									</span>
								</div>
							</div>

							<div className="relative z-10 flex justify-center gap-3 mt-5">
								{[1, 2, 3, 4, 5, 6, 7].map((number) => (
									<button
										key={number}
										type="button"
										onClick={() => setActivePreview(number)}
										aria-label={`Lihat preview Cashier By RCode ${number}`}
										className={`
                                            group relative
                                            w-20 sm:w-24 md:w-28
                                            aspect-video
                                            rounded-lg
                                            overflow-hidden
                                            border
                                            transition-all
                                            duration-200
                                            ${
												activePreview === number
													? "border-rcode-amber ring-1 ring-rcode-amber/40 opacity-100"
													: "border-white/10 opacity-45 hover:opacity-80 hover:border-white/25"
											}
                                        `}
									>
										<img
											src={`/images/cashier_${number}.png`}
											alt={`Preview Cashier By RCode ${number}`}
											className="w-full h-full object-cover"
										/>

										{activePreview === number && <div className="absolute inset-0 bg-rcode-amber/5" />}
									</button>
								))}
							</div>
						</div>

						<div className="flex flex-wrap justify-center gap-3 mt-10">
							{["Transaksi Kasir", "Dashboard Penjualan", "Manajemen Stok", "Struk WhatsApp"].map((item) => (
								<span key={item} className="px-3 py-1.5 rounded-full border border-white/8 bg-white/2.5 text-white/45 text-xs">
									{item}
								</span>
							))}
						</div>
					</div>
				</section>

				{/* =====================================================
                    FEATURES
                ===================================================== */}
				<section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
					<div className="mb-14">
						<p className="font-mono text-xs tracking-[0.12em] uppercase text-rcode-amber mb-3">Fitur Utama</p>

						<h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] tracking-tight">
							Semua yang kasir butuhkan,
							<br />
							<em className="not-italic text-rcode-amber">tanpa ribet</em>
						</h2>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{features.map((f, i) => (
							<div
								key={i}
								className="group p-6 bg-rcode-bg2 border border-white/[0.07] hover:border-rcode-amber/30 rounded-xl transition-all duration-200 hover:bg-rcode-amber/3"
							>
								<span className="text-2xl block mb-4">{f.icon}</span>

								<h3 className="font-medium text-[1rem] mb-2 group-hover:text-rcode-amber transition-colors duration-200">
									{f.title}
								</h3>

								<p className="text-white/55 text-[0.88rem] leading-[1.65] font-light">{f.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* =====================================================
                    BENEFITS
                ===================================================== */}
				<section className="bg-rcode-bg2 border-y border-white/6 py-24">
					<div className="max-w-7xl mx-auto px-6 md:px-8">
						<div className="max-w-3xl mb-14">
							<p className="font-mono text-xs tracking-[0.12em] uppercase text-rcode-amber mb-3">Yang Kamu Dapatkan</p>

							<h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] tracking-tight">
								Bukan sekadar <em className="not-italic text-rcode-amber">template spreadsheet</em>
							</h2>
						</div>

						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
							{benefits.map((item, i) => (
								<div key={i} className="p-5 bg-rcode-bg border border-white/[0.07] rounded-xl">
									<div className="flex gap-3 items-start">
										<span className="text-rcode-amber">✓</span>

										<p className="text-white/70 text-sm leading-[1.6]">{item}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* =====================================================
                    INSTALLATION
                ===================================================== */}
				<section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
					<div className="mb-14">
						<p className="font-mono text-xs tracking-[0.12em] uppercase text-rcode-amber mb-3">Cara Menggunakan</p>

						<h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] tracking-tight">
							Mulai dalam <em className="not-italic text-rcode-amber">4 langkah</em>
						</h2>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{steps.map((s, i) => (
							<div key={i} className="relative">
								{i < steps.length - 1 && (
									<div className="hidden lg:block absolute top-5 left-[calc(100%-12px)] w-6 h-px bg-white/8 z-10" />
								)}

								<div className="p-6 bg-rcode-bg2 border border-white/[0.07] rounded-xl h-full">
									<span className="font-mono text-2xl font-medium text-rcode-amber/40 block mb-4">{s.num}</span>

									<h3 className="font-medium text-[0.95rem] mb-2">{s.title}</h3>

									<p className="text-white/55 text-[0.85rem] leading-[1.65] font-light">{s.desc}</p>
								</div>
							</div>
						))}
					</div>

					<div className="mt-12 flex flex-wrap gap-4 items-center">
						<a
							href={LYNK_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-rcode-amber hover:bg-rcode-amber-light text-rcode-bg font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-[0.95rem]"
						>
							Dapatkan Cashier →
						</a>

						<Link href="/cashier/privacy-policy" className="text-white/50 hover:text-rcode-amber text-sm transition-colors">
							Baca Privacy Policy →
						</Link>
					</div>
				</section>

				{/* =====================================================
                    FAQ
                ===================================================== */}
				<section className="bg-rcode-bg2 border-y border-white/6 py-24">
					<div className="max-w-7xl mx-auto px-6 md:px-8">
						<div className="mb-14">
							<p className="font-mono text-xs tracking-[0.12em] uppercase text-rcode-amber mb-3">FAQ</p>

							<h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] tracking-tight">
								Pertanyaan yang <em className="not-italic text-rcode-amber">sering ditanya</em>
							</h2>
						</div>

						<div className="max-w-3xl flex flex-col divide-y divide-white/[0.07]">
							{faqs.map((f, i) => (
								<div key={i} className="py-6">
									<p className="font-medium text-[1rem] mb-2">{f.q}</p>

									<p className="text-white/60 text-[0.9rem] leading-[1.65] font-light">{f.a}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* =====================================================
                    BOTTOM CTA
                ===================================================== */}
				<section
					className="relative py-28 text-center overflow-hidden border-t border-white/6"
					style={{
						background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(232,160,32,0.07) 0%, transparent 70%)",
					}}
				>
					<div className="max-w-xl mx-auto px-6">
						<h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.15] tracking-tight mb-4">
							Mulai kelola kasir
							<br />
							<em className="not-italic text-rcode-amber">lebih rapi hari ini</em>
						</h2>

						<p className="text-white/55 text-[0.95rem] leading-[1.65] font-light mb-8">
							Catat transaksi dan kelola stok dengan lebih praktis menggunakan Google Sheets dan otomatisasi Apps Script melalui Cashier
							By RCode.
						</p>

						<a
							href={LYNK_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2.5 px-8 py-4 bg-rcode-amber hover:bg-rcode-amber-light text-rcode-bg font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-base"
						>
							Dapatkan Cashier →
						</a>
					</div>
				</section>
			</main>

			{/* =========================================================
                FOOTER
            ========================================================= */}
			<footer className="border-t border-white/[0.07] py-8">
				<div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-wrap justify-between gap-4 text-[0.82rem] text-white/30">
					<span>© 2026 RCode — Cashier By RCode</span>

					<div className="flex gap-6">
						<Link href="/cashier/privacy-policy" className="hover:text-rcode-amber transition-colors">
							Privacy Policy
						</Link>

						<Link href="/cashier/terms" className="hover:text-rcode-amber transition-colors">
							Terms of Service
						</Link>

						<Link href="/" className="hover:text-white/60 transition-colors">
							Kembali ke Beranda
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
