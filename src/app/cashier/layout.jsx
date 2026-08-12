export const metadata = {
    title: "Cashier By RCode — Aplikasi Kasir (POS) Berbasis Google Sheets",
    description:
        "Cashier By RCode adalah aplikasi kasir (Point of Sale) berbasis Google Sheets dan Google Apps Script. Catat transaksi, kelola stok, dan pantau penjualan langsung dari Google Sheets kamu.",
    openGraph: {
        title: "Cashier By RCode",
        description:
            "Aplikasi kasir (Point of Sale) berbasis Google Sheets dan Google Apps Script.",
        url: "https://www.rcode.website/cashier",
        siteName: "Cashier By RCode",
        locale: "id_ID",
        type: "website",
    },
};

export default function CashierLayout({ children }) {
    return <>{children}</>;
}