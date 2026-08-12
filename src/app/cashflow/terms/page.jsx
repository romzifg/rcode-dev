import Link from "next/link";

export const metadata = {
    title: "Terms of Service — Cashflow By RCode",
    description: "Ketentuan penggunaan layanan Cashflow By RCode.",
};

export default function CashflowTermsPage() {
    return (
        <div className="min-h-screen bg-rcode-bg text-rcode-white">
            <header className="border-b border-white/8">
                <div className="max-w-3xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
                    <Link href="/cashflow" className="font-serif text-xl tracking-tight text-rcode-white">
                        Cashflow By RCode
                    </Link>

                    <Link href="/cashflow" className="text-white/60 hover:text-rcode-white text-sm transition-colors">
                        ← Kembali
                    </Link>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-6 md:px-8 py-16">
                <h1 className="font-serif text-3xl mb-2">Terms of Service</h1>
                <p className="text-white/40 text-sm mb-10">Terakhir diperbarui: 12 Agustus 2026</p>

                <div className="space-y-8 text-white/65 text-[0.95rem] leading-[1.75] font-light">
                    <section>
                        <h2 className="font-medium text-white/85 text-lg mb-2">1. Tentang Layanan</h2>
                        <p>
                            Cashflow By RCode ("Cashflow", "kami") adalah template Google Sheets yang dilengkapi Google Apps Script untuk
                            membantu pengguna mencatat dan mengelola pemasukan serta pengeluaran keuangan pribadi maupun rumah tangga.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-white/85 text-lg mb-2">2. Penggunaan Layanan</h2>
                        <p>
                            Dengan menyalin dan menggunakan template Cashflow By RCode, Anda setuju untuk menggunakannya sesuai tujuan yang
                            dimaksudkan, yaitu pencatatan keuangan pribadi. Anda bertanggung jawab penuh atas data yang Anda masukkan ke dalam
                            salinan Google Sheets milik Anda sendiri.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-white/85 text-lg mb-2">3. Kepemilikan Data</h2>
                        <p>
                            Seluruh data transaksi dan keuangan yang Anda catat tetap berada pada Google Sheets di Google Drive akun Anda
                            sendiri. RCode tidak menyimpan, mengakses, atau memiliki salinan data keuangan Anda di server pihak ketiga.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-white/85 text-lg mb-2">4. Izin Google Apps Script</h2>
                        <p>
                            Fitur otomatisasi Cashflow By RCode memerlukan izin akses Google Apps Script pada Google Sheets Anda. Izin ini
                            hanya digunakan untuk menjalankan fungsi dashboard, kategori, dan riwayat transaksi di dalam spreadsheet Anda
                            sendiri, sebagaimana dijelaskan pada{" "}
                            <Link href="/cashflow/privacy-policy" className="text-rcode-amber hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-white/85 text-lg mb-2">5. Pembelian & Lisensi</h2>
                        <p>
                            Pembelian Cashflow By RCode memberikan Anda lisensi penggunaan pribadi atas template. Template tidak boleh
                            dijual kembali atau didistribusikan ulang tanpa izin tertulis dari RCode.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-white/85 text-lg mb-2">6. Batasan Tanggung Jawab</h2>
                        <p>
                            Cashflow By RCode disediakan "sebagaimana adanya". RCode tidak bertanggung jawab atas kehilangan data yang
                            disebabkan oleh kesalahan pengguna, perubahan pada Google Sheets/Apps Script oleh Google, atau penghapusan file
                            oleh pengguna sendiri.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-white/85 text-lg mb-2">7. Kontak</h2>
                        <p>
                            Pertanyaan terkait ketentuan ini dapat dikirimkan ke{" "}
                            <a href="mailto:romzifarhan29@gmail.com" className="text-rcode-amber hover:underline">
                                romzifarhan29@gmail.com
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}