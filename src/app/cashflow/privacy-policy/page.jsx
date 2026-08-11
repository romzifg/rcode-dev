import Link from "next/link";

export const metadata = {
	title: "Privacy Policy — RCode.dev Cashflow",
	description: "Kebijakan privasi penggunaan aplikasi Cashflow berbasis Google Sheets dan Google Apps Script dari RCode.dev.",
};

const sections = [
	{
		id: "pendahuluan",
		title: "Pendahuluan",
		content: [
			'Halaman ini menjelaskan bagaimana RCode.dev ("kami") menangani informasi ketika kamu menggunakan Cashflow — aplikasi pencatatan keuangan berbasis Google Sheets dan Google Apps Script.',
			"Cashflow dirancang untuk membantu pengguna mencatat pemasukan dan pengeluaran, mengelola kategori transaksi, melihat saldo dan ringkasan keuangan, serta mengelola catatan keuangan bersama melalui fitur household.",
			"Dengan menggunakan aplikasi ini, kamu memahami dan menyetujui praktik yang dijelaskan dalam kebijakan privasi ini.",
		],
	},

	{
		id: "informasi-digunakan",
		title: "Informasi yang Digunakan",
		content: [
			"Cashflow menggunakan informasi yang diperlukan untuk menjalankan fungsi aplikasi. Informasi tersebut dapat berasal dari akun Google yang digunakan untuk mengakses aplikasi maupun dari data yang kamu masukkan sendiri ke dalam aplikasi.",
		],
		items: [
			{
				icon: "📧",
				title: "Alamat Email Google",
				desc: "Digunakan untuk mengenali akun pengguna yang sedang menggunakan aplikasi dan menghubungkan pengguna dengan data pengguna pada household yang sesuai.",
			},
			{
				icon: "👤",
				title: "Nama Pengguna",
				desc: "Nama yang dimasukkan ketika membuat atau bergabung dengan household digunakan sebagai identitas pengguna dan dapat ditampilkan sebagai pihak yang memasukkan transaksi.",
			},
			{
				icon: "💰",
				title: "Data Transaksi",
				desc: "Tanggal, tipe transaksi, kategori, catatan, dan nominal digunakan untuk mencatat transaksi serta menyediakan informasi seperti saldo, pemasukan, pengeluaran, grafik, dan ringkasan kategori.",
			},
			{
				icon: "🏠",
				title: "Data Household",
				desc: "Nama household, ID household, kode undangan, anggota household, dan informasi terkait keanggotaan digunakan untuk memungkinkan beberapa pengguna berbagi catatan keuangan yang sama.",
			},
			{
				icon: "🏷️",
				title: "Data Kategori",
				desc: "Kategori pemasukan dan pengeluaran beserta ikon kategorinya digunakan untuk mengelompokkan dan menampilkan transaksi pada aplikasi.",
			},
		],
	},

	{
		id: "akses-google",
		title: "Akses Akun Google & Spreadsheet",
		highlight: true,
		content: [
			"Cashflow menggunakan Google Apps Script untuk menjalankan fungsi aplikasi dan Google Sheets sebagai media penyimpanan data aplikasi.",
			"Ketika aplikasi digunakan, Google dapat meminta izin akses sesuai dengan layanan Google yang digunakan oleh Apps Script dan konfigurasi deployment aplikasi.",
			"Akses tersebut digunakan untuk mengenali pengguna serta membaca dan menulis data yang diperlukan pada spreadsheet tempat aplikasi dijalankan.",
		],
		scopes: [
			{
				scope: "Informasi akun Google",
				icon: "🔑",
				reason: "Alamat email akun digunakan untuk mengidentifikasi pengguna yang sedang menggunakan aplikasi dan menghubungkannya dengan data pengguna pada spreadsheet.",
			},
			{
				scope: "Google Spreadsheet",
				icon: "📊",
				reason: "Digunakan untuk membaca dan menulis data aplikasi, termasuk data transaksi, pengguna, household, kategori, dan data yang diperlukan untuk menampilkan dashboard.",
			},
			{
				scope: "Google Apps Script",
				icon: "⚙️",
				reason: "Digunakan sebagai lingkungan eksekusi aplikasi untuk menjalankan fungsi seperti autentikasi pengguna, pengelolaan household, pencatatan transaksi, dan pengambilan data dashboard.",
			},
		],
		footer: "Cashflow tidak menggunakan data Google untuk tujuan periklanan, penjualan data, atau profiling pengguna.",
	},

	{
		id: "penggunaan-data",
		title: "Bagaimana Data Digunakan",
		content: [
			"Data yang digunakan oleh Cashflow diperlukan untuk menjalankan fungsi aplikasi dan menyediakan fitur pencatatan serta pengelolaan keuangan.",
			"Alamat email digunakan untuk mengenali pengguna. Nama digunakan sebagai identitas pengguna. Data transaksi digunakan untuk menghitung saldo, menampilkan total pemasukan dan pengeluaran, membuat grafik tren transaksi, serta menampilkan breakdown berdasarkan kategori.",
			"Data household digunakan untuk memungkinkan beberapa pengguna bergabung dalam satu ruang pencatatan keuangan menggunakan kode undangan.",
			"Data kategori digunakan untuk mengelompokkan transaksi pemasukan dan pengeluaran di dalam aplikasi.",
		],
	},

	{
		id: "penyimpanan-data",
		title: "Penyimpanan & Keamanan Data",
		content: [
			"Data aplikasi disimpan pada Google Spreadsheet yang digunakan sebagai media penyimpanan aplikasi. Struktur data aplikasi mencakup data transaksi, pengguna, household, dan kategori.",
			"RCode.dev tidak menyediakan database eksternal yang digunakan untuk menyimpan salinan data transaksi pengguna berdasarkan implementasi aplikasi yang saat ini tersedia.",
			"Kode aplikasi berjalan menggunakan Google Apps Script dan menggunakan layanan Google yang diperlukan untuk menjalankan fungsi aplikasi.",
			"Kami berupaya menjaga agar data hanya digunakan sesuai dengan fungsi aplikasi. Namun, keamanan akun Google, spreadsheet, dan akses terhadap akun tersebut tetap menjadi tanggung jawab pengguna.",
			"Kami menyarankan pengguna untuk menjaga keamanan akun Google, menggunakan password yang kuat, serta mengaktifkan verifikasi dua langkah.",
		],
	},

	{
		id: "berbagi-data",
		title: "Berbagi Data dengan Pihak Ketiga",
		content: [
			"RCode.dev tidak menjual, menyewakan, atau membagikan data transaksi pengguna kepada pihak ketiga untuk tujuan komersial.",
			"Cashflow menggunakan layanan Google seperti Google Sheets dan Google Apps Script untuk menjalankan fungsi aplikasi. Penggunaan layanan tersebut tetap tunduk pada kebijakan dan ketentuan Google yang berlaku.",
			"Berdasarkan implementasi aplikasi yang kamu gunakan saat ini, tidak terdapat integrasi dengan layanan analytics, advertising, atau API eksternal yang menerima data transaksi pengguna.",
		],
	},

	{
		id: "household",
		title: "Data Household & Berbagi Data",
		content: [
			"Cashflow menyediakan fitur household yang memungkinkan beberapa pengguna menggunakan satu kumpulan data keuangan bersama.",
			"Ketika pengguna membuat household, aplikasi membuat identitas household dan kode undangan yang dapat digunakan pengguna lain untuk bergabung.",
			"Pengguna yang tergabung dalam household dapat melihat data transaksi yang terkait dengan household tersebut melalui aplikasi.",
		],
		highlight: true,
		contentExtra: [
			"Karena fitur household memang dirancang untuk berbagi data keuangan, pengguna harus berhati-hati ketika memberikan kode undangan kepada orang lain.",
		],
	},

	{
		id: "penghapusan-transaksi",
		title: "Penghapusan & Perubahan Data",
		content: [
			"Cashflow menyediakan fungsi untuk menghapus transaksi melalui aplikasi. Penghapusan transaksi akan menghapus baris transaksi terkait dari spreadsheet penyimpanan aplikasi.",
			"Cashflow juga memiliki fungsi backend untuk memperbarui data transaksi yang sesuai dengan household pengguna.",
			"Data pengguna dan household tidak memiliki fungsi penghapusan mandiri yang tersedia pada antarmuka aplikasi saat ini.",
			"Jika kamu ingin meminta penghapusan atau perubahan data pengguna atau household yang tidak dapat dilakukan melalui aplikasi, kamu dapat menghubungi RCode.dev melalui informasi kontak yang tersedia pada halaman ini.",
		],
	},

	{
		id: "retensi-data",
		title: "Retensi Data",
		content: [
			"Data aplikasi disimpan selama data tersebut masih diperlukan untuk menjalankan fungsi Cashflow atau sampai pengguna menghapus data tersebut dari spreadsheet penyimpanan aplikasi.",
			"RCode.dev tidak menyimpan salinan terpisah dari data transaksi pengguna pada server eksternal berdasarkan implementasi aplikasi saat ini.",
			"Pengguna bertanggung jawab terhadap pengelolaan spreadsheet dan Google Drive yang digunakan sebagai media penyimpanan aplikasi.",
		],
	},

	{
		id: "hak-pengguna",
		title: "Hak Pengguna",
		content: [
			"Pengguna memiliki kontrol terhadap spreadsheet dan Google Drive yang digunakan untuk menjalankan Cashflow, sesuai dengan hak akses yang dimiliki terhadap akun dan file tersebut.",
			"Pengguna dapat menghentikan penggunaan aplikasi kapan saja.",
			"Pengguna juga dapat mencabut akses aplikasi melalui pengaturan akun Google, sesuai dengan mekanisme izin yang diberikan oleh Google.",
		],
		link: {
			text: "Kelola akses aplikasi di Google Account → Security → Third-party connections.",
			href: "https://myaccount.google.com/connections",
		},
	},

	{
		id: "batasan-data",
		title: "Batasan Tanggung Jawab",
		content: [
			"Cashflow merupakan alat bantu pencatatan keuangan dan bukan layanan perbankan, investasi, akuntansi, atau penasihat keuangan.",
			"Informasi yang ditampilkan pada dashboard berasal dari data yang dimasukkan oleh pengguna ke dalam aplikasi.",
			"Pengguna bertanggung jawab memastikan bahwa data transaksi yang dimasukkan ke dalam aplikasi sudah benar dan sesuai dengan kebutuhan pengguna.",
		],
	},

	{
		id: "perubahan-kebijakan",
		title: "Perubahan Kebijakan Privasi",
		content: [
			"Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan pada aplikasi, layanan, praktik pengelolaan data, atau kebutuhan hukum yang berlaku.",
			"Jika terdapat perubahan penting, versi terbaru dari kebijakan privasi akan dipublikasikan pada halaman ini.",
			"Tanggal terakhir pembaruan akan ditampilkan pada bagian atas halaman.",
		],
	},

	{
		id: "kontak",
		title: "Hubungi Kami",
		content: [
			"Jika kamu memiliki pertanyaan mengenai kebijakan privasi, penggunaan data, keamanan, atau aplikasi Cashflow, silakan hubungi RCode.dev melalui salah satu kontak berikut:",
		],
		contact: true,
	},
];

const tableOfContents = sections.map((s) => ({
	id: s.id,
	title: s.title,
}));

export default function PrivacyPolicyPage() {
	const lastUpdated = "12 Agustus 2026";

	return (
		<div className="min-h-screen bg-rcode-bg text-rcode-white overflow-x-hidden">
			<div className="noise-overlay" />

			{/* Navbar */}
			<header className="fixed top-0 left-0 right-0 z-100 bg-rcode-bg/90 backdrop-blur-xl border-b border-white/8">
				<div className="max-w-7xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
					<Link href="/" className="font-serif text-xl tracking-tight text-rcode-white">
						RCode<span className="text-rcode-amber">.dev</span>
					</Link>

					<Link href="/cashflow" className="text-white/60 hover:text-rcode-white text-sm transition-colors duration-200">
						← Kembali
					</Link>
				</div>
			</header>

			<main className="relative z-10 pt-14">
				{/* Hero */}
				<section className="border-b border-white/6 bg-rcode-bg2">
					<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
						<div className="max-w-2xl">
							<span className="inline-block px-3 py-1 bg-rcode-amber/10 border border-rcode-amber/30 rounded-full font-mono text-[0.72rem] text-rcode-amber uppercase tracking-widest mb-6">
								Legal
							</span>

							<h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight mb-4">Privacy Policy</h1>

							<p className="text-white/60 text-[1rem] leading-[1.7] font-light mb-6">
								Berlaku untuk: <span className="text-rcode-white">Cashflow — Catatan Keuangan</span>
								<br />
								Produk dari RCode.dev
							</p>

							<div className="flex flex-wrap gap-4 text-[0.82rem] text-white/40 font-mono">
								<span>Terakhir diperbarui: {lastUpdated}</span>

								<span>·</span>

								<span>Bahasa: Indonesia</span>
							</div>
						</div>
					</div>
				</section>

				{/* Body */}
				<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
					<div className="grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16 items-start">
						{/* Sidebar */}
						<aside className="hidden lg:block sticky top-24">
							<p className="font-mono text-[0.7rem] text-white/40 uppercase tracking-widest mb-4">Daftar Isi</p>

							<nav className="flex flex-col gap-0.5">
								{tableOfContents.map((item) => (
									<a
										key={item.id}
										href={`#${item.id}`}
										className="text-[0.85rem] text-white/50 hover:text-rcode-amber py-1.5 transition-colors duration-200 border-l-2 border-transparent hover:border-rcode-amber/40 pl-3"
									>
										{item.title}
									</a>
								))}
							</nav>
						</aside>

						{/* Content */}
						<div className="max-w-2xl flex flex-col gap-14">
							{sections.map((section, i) => (
								<div key={section.id} id={section.id} className="scroll-mt-24">
									<h2 className="font-serif text-[1.6rem] tracking-tight mb-5">{section.title}</h2>

									{/* Highlight */}
									{section.highlight && section.id !== "akses-google" && (
										<div className="mb-5 p-4 bg-rcode-amber/6 border border-rcode-amber/20 rounded-lg">
											<p className="text-rcode-amber-light text-[0.88rem] leading-[1.65] font-light">
												ℹ️ &nbsp; Informasi penting mengenai penggunaan data pada fitur ini.
											</p>
										</div>
									)}

									{/* Paragraph */}
									{section.content.map((para, j) => (
										<p key={j} className="text-white/65 text-[0.95rem] leading-[1.75] font-light mb-4 last:mb-0">
											{para}
										</p>
									))}

									{/* Information Items */}
									{section.items && (
										<div className="mt-6 flex flex-col gap-4">
											{section.items.map((item, j) => (
												<div key={j} className="flex gap-4 p-5 bg-rcode-bg2 border border-white/[0.07] rounded-xl">
													<span className="text-xl shrink-0">{item.icon}</span>

													<div>
														<p className="font-medium text-[0.95rem] mb-1.5">{item.title}</p>

														<p className="text-white/55 text-[0.88rem] leading-[1.65] font-light">{item.desc}</p>
													</div>
												</div>
											))}
										</div>
									)}

									{/* Google Scopes */}
									{section.scopes && (
										<div className="mt-6 flex flex-col gap-4">
											{section.scopes.map((scope, j) => (
												<div key={j} className="flex gap-4 p-5 bg-rcode-bg2 border border-white/[0.07] rounded-xl">
													<span className="text-xl shrink-0">{scope.icon}</span>

													<div>
														<p className="font-medium text-[0.95rem] mb-1.5">{scope.scope}</p>

														<p className="text-white/55 text-[0.88rem] leading-[1.65] font-light">{scope.reason}</p>
													</div>
												</div>
											))}

											{section.footer && (
												<div className="mt-2 p-4 bg-rcode-amber/6 border border-rcode-amber/20 rounded-lg">
													<p className="text-rcode-amber-light text-[0.88rem] leading-[1.65] font-light">
														⚠️ &nbsp;{section.footer}
													</p>
												</div>
											)}
										</div>
									)}

									{/* Household Extra Warning */}
									{section.contentExtra && (
										<div className="mt-5 p-4 bg-rcode-amber/6 border border-rcode-amber/20 rounded-lg">
											{section.contentExtra.map((text, j) => (
												<p key={j} className="text-rcode-amber-light text-[0.88rem] leading-[1.65] font-light">
													⚠️ &nbsp;{text}
												</p>
											))}
										</div>
									)}

									{/* Google Account Link */}
									{section.link && (
										<div className="mt-5">
											<a
												href={section.link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="text-rcode-amber hover:text-rcode-amber-light text-[0.88rem] transition-colors"
											>
												{section.link.text}
											</a>
										</div>
									)}

									{/* Contact */}
									{section.contact && (
										<div className="mt-5 p-6 bg-rcode-bg2 border border-white/[0.07] rounded-xl flex flex-col gap-4">
											{/* WhatsApp */}
											<div className="flex items-center gap-3">
												<span className="text-lg">💬</span>

												<div>
													<p className="font-medium text-[0.9rem] mb-0.5">WhatsApp</p>

													<a
														href="https://wa.me/6289560214608"
														target="_blank"
														rel="noopener noreferrer"
														className="text-rcode-amber hover:text-rcode-amber-light text-[0.88rem] transition-colors"
													>
														0895-6021-44608
													</a>
												</div>
											</div>

											{/* Instagram */}
											<div className="flex items-center gap-3">
												<span className="text-lg">📸</span>

												<div>
													<p className="font-medium text-[0.9rem] mb-0.5">Instagram</p>

													<a
														href="https://instagram.com/rfghozi"
														target="_blank"
														rel="noopener noreferrer"
														className="text-rcode-amber hover:text-rcode-amber-light text-[0.88rem] transition-colors"
													>
														@rfghozi
													</a>
												</div>
											</div>
										</div>
									)}

									{/* Separator */}
									{i < sections.length - 1 && <div className="mt-14 border-t border-white/6" />}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<section className="border-t border-white/6 bg-rcode-bg2 py-12">
					<div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-wrap justify-between gap-6 items-center">
						<div>
							<p className="font-medium mb-1">Ada pertanyaan soal privasi?</p>

							<p className="text-white/55 text-[0.9rem] font-light">Kami transparan tentang cara kerja Cashflow.</p>
						</div>

						<div className="flex flex-wrap gap-3">
							<a
								href="https://wa.me/6289560214608"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-2.5 bg-rcode-amber hover:bg-rcode-amber-light text-rcode-bg font-semibold rounded-lg transition-all duration-200 text-[0.9rem]"
							>
								Hubungi Kami
							</a>

							<Link
								href="/cashflow"
								className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 hover:border-white/40 text-white/70 hover:text-rcode-white rounded-lg transition-all duration-200 text-[0.9rem]"
							>
								Kembali ke Cashflow
							</Link>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t border-white/[0.07] py-8">
				<div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-wrap justify-between gap-4 text-[0.82rem] text-white/30">
					<span>© 2026 RCode.dev</span>

					<div className="flex gap-6">
						<Link href="/cashflow" className="hover:text-rcode-amber transition-colors">
							Cashflow
						</Link>

						<Link href="/" className="hover:text-white/60 transition-colors">
							Beranda
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
