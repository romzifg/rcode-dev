export const projectDetails = {
  hris: {
    slug: 'hris',
    product: 'AttendEase',
    category: 'HRIS & Attendance Platform',
    title: 'Operasional HR lebih rapi, pengalaman karyawan lebih simpel.',
    intro:
      'Platform HRIS untuk menghubungkan absensi, cuti, approval, data karyawan, dan people analytics dalam satu pengalaman yang nyaman di web maupun mobile.',
    image: '/images/HRIS.png',
    imageAlt: 'Tampilan dashboard absensi dan pengajuan cuti AttendEase',
    tags: ['HRIS', 'Attendance', 'Leave Management', 'People Analytics'],
    facts: [
      { value: 'Web + Mobile', label: 'Alur konsisten lintas perangkat' },
      { value: 'GPS + Selfie', label: 'Verifikasi kehadiran lebih akurat' },
      { value: 'Role-based', label: 'Workspace khusus karyawan dan HR' },
    ],
    gallery: [
      {
        src: '/images/cuti_attendease.png',
        title: 'Cuti & Tracking Approval',
        desc: 'Karyawan melihat saldo, status pengajuan, dan progres persetujuan dalam satu layar.',
        position: 'center top',
      },
      {
        src: '/images/employee_dashboard_attendease.png',
        title: 'Employee Dashboard',
        desc: 'Ringkasan kehadiran, status absensi, sisa cuti, dan aktivitas terbaru.',
        position: 'center bottom',
      },
      {
        src: '/images/absence_attendease.png',
        title: 'Absensi WFO & WFA',
        desc: 'Clock in dengan selfie dan verifikasi lokasi sesuai mode kerja karyawan.',
        position: '58% 88%',
        zoom: true,
      },
    ],
    challenge: {
      eyebrow: 'Tantangan Bisnis',
      title: 'Administrasi HR tersebar dan sulit dipantau.',
      desc: 'Absensi, pengajuan cuti, approval, serta data organisasi sering berjalan di kanal yang berbeda. Dampaknya, HR menghabiskan waktu untuk rekap manual dan karyawan kesulitan mengetahui status pengajuan mereka.',
      points: [
        'Rekap kehadiran dan cuti membutuhkan banyak pekerjaan manual.',
        'Aturan cuti dan kuota setiap karyawan tidak selalu sama.',
        'Proses approval sulit dilacak oleh karyawan maupun HR.',
      ],
    },
    solution: {
      eyebrow: 'Pendekatan Solusi',
      title: 'Satu pusat kendali untuk people operations.',
      desc: 'AttendEase memisahkan pengalaman employee self-service dan workspace HR, tetapi menjaga seluruh data dan alurnya tetap terhubung. Kebijakan cuti, kuota, approval, lokasi kantor, hingga laporan dapat dikelola secara terstruktur.',
    },
    features: [
      {
        number: '01',
        title: 'Absensi pintar berbasis lokasi',
        desc: 'Clock in dan clock out dengan verifikasi radius GPS, selfie, serta pilihan mode kerja WFO atau WFA.',
      },
      {
        number: '02',
        title: 'Employee self-service',
        desc: 'Karyawan dapat melihat riwayat kehadiran, mengajukan cuti atau izin, serta memantau progres approval secara mandiri.',
      },
      {
        number: '03',
        title: 'Master cuti & kuota karyawan',
        desc: 'HR dapat membuat jenis cuti dan memberikan kuota berbeda per karyawan. Sakit dan unpaid leave tetap selalu tersedia.',
      },
      {
        number: '04',
        title: 'Approval bertingkat',
        desc: 'Alur persetujuan dapat melibatkan atasan, manager, head, director, hingga HR sesuai kebijakan organisasi.',
      },
      {
        number: '05',
        title: 'Data organisasi terpusat',
        desc: 'Kelola profil karyawan, divisi, jabatan, lokasi kantor, dan status keaktifan dari satu workspace HR.',
      },
      {
        number: '06',
        title: 'People analytics & workplace',
        desc: 'Pantau tren tenaga kerja dan bagikan pengumuman perusahaan untuk menjaga tim tetap terinformasi.',
      },
    ],
    roles: [
      {
        name: 'Karyawan',
        label: 'Employee workspace',
        capabilities: ['Absensi WFO/WFA', 'Riwayat kehadiran', 'Cuti dan tracking approval', 'Profil personal'],
      },
      {
        name: 'HR & Management',
        label: 'People operations',
        capabilities: ['Approval kehadiran dan cuti', 'Master cuti dan kuota', 'Data organisasi', 'People analytics'],
      },
    ],
    workflow: [
      { number: '01', title: 'Atur kebijakan', desc: 'HR mengatur lokasi, jenis cuti, kuota, dan alur approval.' },
      { number: '02', title: 'Karyawan beraktivitas', desc: 'Absensi dan pengajuan dilakukan langsung dari web atau mobile.' },
      { number: '03', title: 'Verifikasi & approval', desc: 'Sistem memvalidasi aturan dan meneruskan pengajuan ke pihak terkait.' },
      { number: '04', title: 'Pantau & evaluasi', desc: 'HR melihat rekap operasional dan insight tenaga kerja dalam satu dashboard.' },
    ],
    stack: ['React + TypeScript', 'Node.js + Express', 'PostgreSQL + Sequelize', 'Flutter', 'REST API'],
    ctaTitle: 'Ingin HRIS yang mengikuti kebijakan perusahaan Anda?',
    ctaDesc: 'Diskusikan alur absensi, cuti, approval, dan laporan yang dibutuhkan tim Anda. Konsultasi awal gratis dan tanpa komitmen.',
    nextHref: '/pos',
    nextLabel: 'Lihat proyek POS multi-cabang',
  },
  pos: {
    slug: 'pos',
    product: 'Ritelora',
    category: 'Multi-branch Point of Sale',
    title: 'Transaksi cepat, stok antar-cabang tetap terkendali.',
    intro:
      'Sistem POS responsif untuk mengelola transaksi, inventori, tim, dan laporan per cabang—dengan kontrol akses serta jejak audit yang siap mengikuti pertumbuhan bisnis retail.',
    image: '/images/POS.png',
    imageAlt: 'Tampilan dashboard dan kasir sistem POS Ritelora',
    tags: ['Point of Sale', 'Multi-branch', 'Inventory', 'Retail Operations'],
    facts: [
      { value: 'Multi-cabang', label: 'Inventori terpisah dan terukur' },
      { value: '3 Level Akses', label: 'Cashier, supervisor, dan owner' },
      { value: 'Audit-ready', label: 'Setiap pergerakan stok tercatat' },
    ],
    gallery: [
      {
        src: '/images/dashboard_ritelora.png',
        title: 'Dashboard Operasional',
        desc: 'Ringkasan penjualan, transaksi terbaru, dan peringatan stok menipis.',
        position: 'center top',
      },
      {
        src: '/images/cashier_ritelora.png',
        title: 'Layar Kasir',
        desc: 'Pencarian produk, keranjang, stok, diskon, dan pembayaran dalam satu alur.',
        position: 'center center',
      },
      {
        src: '/images/inventory_ritelora.png',
        title: 'Produk & Inventori',
        desc: 'Katalog terpusat dengan kontrol stok yang mengikuti cabang aktif.',
        position: 'center bottom',
        zoom: true,
      },
    ],
    challenge: {
      eyebrow: 'Tantangan Bisnis',
      title: 'Semakin banyak cabang, semakin sulit menjaga data tetap sinkron.',
      desc: 'Bisnis retail membutuhkan transaksi yang cepat, tetapi juga harus menjaga stok, akses tim, dan laporan setiap cabang tetap akurat. Tanpa kontrol yang baik, risiko overselling dan selisih stok akan meningkat.',
      points: [
        'Stok antar-cabang harus dipisahkan tanpa menduplikasi katalog produk.',
        'Setiap role membutuhkan akses dan batasan operasional yang berbeda.',
        'Stock adjustment dan opname harus memiliki jejak audit yang jelas.',
      ],
    },
    solution: {
      eyebrow: 'Pendekatan Solusi',
      title: 'POS yang dibangun untuk operasional retail nyata.',
      desc: 'Ritelora menghubungkan kasir, inventori, transaksi, cabang, dan tim dalam satu platform. Setiap transaksi memperbarui stok secara atomik, sementara owner dapat berpindah konteks cabang tanpa kehilangan kontrol.',
    },
    features: [
      {
        number: '01',
        title: 'Kasir responsif & cepat',
        desc: 'Pencarian produk, keranjang, diskon, dan pembayaran tunai, kartu, transfer, atau QRIS dalam satu layar.',
      },
      {
        number: '02',
        title: 'Inventori per cabang',
        desc: 'Katalog produk digunakan bersama, sementara jumlah stok dan aktivitas inventori tetap dipisahkan untuk setiap cabang.',
      },
      {
        number: '03',
        title: 'Stock opname & audit trail',
        desc: 'Catat stock in, stock out, adjustment, dan hitungan fisik lengkap dengan pengguna, waktu, referensi, serta selisih.',
      },
      {
        number: '04',
        title: 'Transaksi yang lebih aman',
        desc: 'Database transaction dan row locking membantu mencegah overselling saat beberapa kasir melayani pelanggan bersamaan.',
      },
      {
        number: '05',
        title: 'Dashboard operasional',
        desc: 'Pantau penjualan, transaksi terbaru, produk terlaris, dan peringatan stok menipis berdasarkan cabang aktif.',
      },
      {
        number: '06',
        title: 'Struk fleksibel',
        desc: 'Cetak struk thermal 80 mm, unduh PDF otomatis, atau bagikan dokumen transaksi melalui WhatsApp.',
      },
    ],
    roles: [
      {
        name: 'Cashier',
        label: 'Operasional kasir',
        capabilities: ['Dashboard pribadi', 'Proses transaksi', 'Riwayat transaksi sendiri', 'Struk cetak/PDF'],
      },
      {
        name: 'Supervisor',
        label: 'Kontrol satu cabang',
        capabilities: ['Kelola produk & kategori', 'Stok dan opname', 'Transaksi cabang', 'Monitoring operasional'],
      },
      {
        name: 'Owner',
        label: 'Kontrol seluruh bisnis',
        capabilities: ['Pilih cabang aktif', 'Kelola tim dan role', 'Manajemen cabang', 'Akses seluruh modul'],
      },
    ],
    workflow: [
      { number: '01', title: 'Pilih konteks cabang', desc: 'Owner atau tim bekerja pada cabang sesuai hak akses masing-masing.' },
      { number: '02', title: 'Proses transaksi', desc: 'Kasir memilih produk, pembayaran, dan menyelesaikan transaksi dalam satu alur.' },
      { number: '03', title: 'Stok diperbarui', desc: 'Inventori cabang dikurangi secara atomik dan pergerakannya tercatat otomatis.' },
      { number: '04', title: 'Pantau hasil', desc: 'Supervisor dan owner melihat laporan, stok menipis, serta audit operasional.' },
    ],
    stack: ['React', 'Express.js', 'PostgreSQL', 'Sequelize', 'Docker', 'Nginx'],
    ctaTitle: 'Butuh POS yang siap mengikuti pertumbuhan cabang?',
    ctaDesc: 'Ceritakan jumlah cabang, alur stok, jenis pembayaran, dan struktur tim Anda. Kami bantu petakan solusi serta estimasi pengembangannya.',
    nextHref: '/hris',
    nextLabel: 'Lihat proyek HRIS & attendance',
  },
};
