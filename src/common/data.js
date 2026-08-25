export const services = [
    {
        number: '01',
        title: 'Website Profesional',
        desc: 'Website company profile, landing page, dan toko online yang cepat, responsif, serta dirancang untuk meningkatkan kepercayaan pelanggan.',
        tags: ['Company Profile', 'Landing Page', 'Toko Online'],
    },
    {
        number: '02',
        title: 'Dashboard Monitoring Bisnis',
        desc: 'Satukan data penjualan, stok, transaksi, dan performa bisnis dalam dashboard yang mudah dipantau oleh tim.',
        tags: ['Penjualan & Stok', 'Laporan Otomatis', 'Visualisasi Data'],
    },
    {
        number: '03',
        title: 'Integrasi Sistem Bisnis',
        desc: 'Hubungkan website dan sistem internal dengan payment gateway, marketplace, ERP, atau API agar pertukaran data berjalan otomatis.',
        tags: ['Payment Gateway', 'Marketplace', 'ERP & API'],
    },
    {
        number: '04',
        title: 'Automasi Bisnis',
        desc: 'Otomatiskan invoice, notifikasi, laporan, dan alur persetujuan untuk mengurangi pekerjaan berulang dan human error.',
        tags: ['Invoice', 'Notifikasi', 'Alur Persetujuan'],
    },
];

export const works = [
    {
        id: 'kasku',
        title: 'KasKu - Sistem Manajemen Keuangan',
        cat: 'Finance App',
        desc: 'Membantu pengguna mengelola arus kas, mencatat transaksi, dan memantau kondisi keuangan secara real-time dalam satu dashboard.',
        features: [
            'Monitoring Pemasukan & Pengeluaran',
            'Dashboard Laporan Keuangan',
            'Pencatatan Keuangan yang Lebih Terstruktur',
        ],
        tags: ['Cash Flow', 'Financial Dashboard', 'Transaction Tracking'],
        img: '/images/KasKu.png',
        imgLayout: 'portrait',
    },
    {
        id: 'pos-system',
        title: 'Ritelora - POS Multi-Cabang',
        cat: 'Retail Operations',
        desc: 'POS responsif untuk transaksi, inventori per cabang, stock opname, kontrol akses tim, dan laporan operasional retail.',
        features: [
            'Transaksi & Inventori Multi-Cabang',
            'Role Cashier, Supervisor & Owner',
            'Stock Opname dengan Audit Trail',
            'Struk Thermal, PDF & WhatsApp',
        ],
        tags: ['Point of Sale', 'Multi-branch', 'Inventory', 'Stock Audit'],
        img: '/images/POS.png',
    },
    {
        id: 'hris-platform',
        title: 'AttendEase - HRIS & Attendance',
        cat: 'People Operations',
        desc: 'HRIS web dan mobile untuk absensi GPS, cuti dan kuota per karyawan, approval bertingkat, serta people analytics.',
        features: [
            'Absensi GPS, Selfie & WFO/WFA',
            'Master Cuti dan Kuota Karyawan',
            'Approval Bertingkat',
            'Employee Self-Service',
        ],
        tags: ['HRIS', 'Attendance', 'Leave Management', 'People Analytics'],
        img: '/images/HRIS.png',
    },
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        cat: 'E-Commerce App',
        desc: 'Platform belanja online lengkap dengan manajemen produk, keranjang belanja, dan sistem pembayaran terintegrasi untuk bisnis skala kecil hingga menengah.',
        features: [
            'Manajemen Produk & Kategori',
            'Keranjang Belanja & Checkout',
            'Integrasi Payment Gateway',
        ],
        tags: ['E-Commerce', 'Payment Gateway', 'Product Management'],
        img: '/images/ecommerce.png',
    },

    // NEW
    {
        id: 'google-sheet-pos',
        title: 'Kasir - Google Sheets',
        cat: 'Business Automation',
        desc: 'Sistem kasir berbasis Google Sheets dan Apps Script yang membantu bisnis mencatat transaksi, mengelola produk, serta memantau penjualan tanpa membutuhkan aplikasi kasir khusus.',
        features: [
            'Input Transaksi Penjualan',
            'Manajemen Produk & Stok',
            'Cetak Struk Penjualan',
            'Laporan Penjualan Otomatis',
        ],
        tags: [
            'Google Sheets',
            'Apps Script',
            'POS',
            'Business Automation',
        ],
        img: '/images/cashier_4.png',
    },

    {
        id: 'google-sheet-cashflow',
        title: 'Cashflow - Google Sheets',
        cat: 'Finance & Automation',
        desc: 'Template pencatatan keuangan berbasis Google Sheets dan Apps Script untuk membantu UMKM mencatat pemasukan, pengeluaran, dan memantau kondisi keuangan dengan lebih terstruktur.',
        features: [
            'Pencatatan Pemasukan & Pengeluaran',
            'Dashboard Keuangan',
            'Rekap Cash Flow Otomatis',
            'Monitoring Kondisi Keuangan',
        ],
        tags: [
            'Google Sheets',
            'Apps Script',
            'Cash Flow',
            'Financial Dashboard',
        ],
        img: '/images/cashflow_1.png',
        imgLayout: 'portrait',
    },
];

export const reasons = [
    {
        icon: '⏱',
        title: 'Proses Lebih Efisien',
        desc: 'Kurangi pekerjaan manual dan percepat alur kerja dengan sistem yang terstruktur.',
    },
    {
        icon: '🎛',
        title: 'Solusi Sesuai Proses Bisnis',
        desc: 'Dibangun berdasarkan alur kerja dan kebutuhan bisnis Anda, bukan template yang sama untuk semua.',
    },
    {
        icon: '🛡',
        title: 'Support Berkelanjutan',
        desc: 'Kami tetap membantu setelah sistem digunakan agar operasional berjalan lancar.',
    },
    {
        icon: '💰',
        title: 'Investasi yang Terukur',
        desc: 'Solusi yang memberikan nilai jangka panjang dengan biaya yang sesuai kebutuhan bisnis.',
    },
];

export const apps = [
    'Landing Page', 'Company Profile', 'Personal Website',
    'Kasir', 'E-Commerce', 'HRIS', 'Dashboard',
];

export const footerLinks = {
    Layanan: [
        { label: 'Website Profesional', href: '#layanan' },
        { label: 'Sistem Dashboard', href: '#layanan' },
        { label: 'Integrasi & API', href: '#layanan' },
        { label: 'Automasi Bisnis', href: '#layanan' },
    ],
    Kontak: [
        { label: 'WhatsApp', href: 'https://wa.me/6289560214608' },
        { label: 'Instagram', href: 'https://instagram.com/rfghozi' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/romzifg' },
        { label: 'GitHub', href: 'https://github.com/romzifg' },
    ],
};

export const stats = [
    { value: '6+', label: 'Website & sistem dikembangkan' },
    { value: '4+', label: 'Tahun pengalaman membangun solusi digital' },
];

export const ctaTags = ['Gratis Konsultasi', 'Estimasi Jelas', 'Solusi Sesuai Kebutuhan'];

export const navItems = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Kenapa Kami', href: '#kenapa' },
    { label: 'Proses', href: '#proses' },
];

export const faqs = [
    {
        question: 'Berapa lama proses pembuatan website atau sistem aplikasi?',
        answer: 'Estimasi pengerjaan bergantung pada kompleksitas kebutuhan. Website company profile biasanya membutuhkan 1–3 minggu, sedangkan sistem custom seperti dashboard, POS, atau HRIS dapat membutuhkan 4 minggu atau lebih.'
    },
    {
        question: 'Apakah bisa membuat sistem sesuai kebutuhan bisnis saya?',
        answer: 'Bisa. Kami akan memahami alur kerja bisnis Anda terlebih dahulu, lalu membantu merancang solusi yang sesuai agar sistem benar-benar relevan dan mudah digunakan oleh tim.'
    },
    {
        question: 'Apakah tersedia konsultasi sebelum mulai proyek?',
        answer: 'Ya. Anda bisa berkonsultasi terlebih dahulu untuk menjelaskan kebutuhan, kendala bisnis, dan gambaran sistem yang ingin dibuat. Dari sana kami bantu berikan arahan solusi dan estimasi pengerjaan.'
    },
    {
        question: 'Apakah setelah sistem selesai tetap mendapatkan support?',
        answer: 'Ya. Setelah sistem selesai dan digunakan, kami tetap membantu untuk support teknis, perbaikan bug, penyesuaian minor, serta memastikan sistem berjalan dengan baik.'
    },
    {
        question: 'Berapa biaya pembuatan website atau sistem aplikasi?',
        answer: 'Biaya menyesuaikan ruang lingkup proyek, fitur, integrasi, dan tingkat kompleksitas sistem. Setelah kebutuhan dijelaskan, kami akan memberikan estimasi biaya yang jelas dan transparan.'
    },
    {
        question: 'Apakah bisa integrasi dengan payment gateway, marketplace, atau sistem lain?',
        answer: 'Bisa. Kami dapat membantu integrasi dengan layanan pihak ketiga seperti payment gateway, marketplace, ERP, WhatsApp notification, email service, maupun API internal perusahaan.'
    }
];

export const processSteps = [
    {
        title: 'Konsultasi Kebutuhan',
        desc: 'Kami memahami masalah, tujuan bisnis, dan gambaran sistem yang ingin dibangun.'
    },
    {
        title: 'Analisis & Perencanaan',
        desc: 'Kebutuhan dirapikan menjadi scope, fitur utama, alur kerja, estimasi waktu, dan biaya.'
    },
    {
        title: 'Desain & Pengembangan',
        desc: 'Website atau sistem mulai dibuat dengan update berkala agar hasil tetap sesuai kebutuhan.'
    },
    {
        title: 'Testing & Revisi',
        desc: 'Sistem diuji, diperbaiki, dan disesuaikan sebelum digunakan secara langsung.'
    },
    {
        title: 'Go-Live & Support',
        desc: 'Sistem dipublikasikan dan tetap didampingi agar operasional berjalan lancar.'
    }
];
