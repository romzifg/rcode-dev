import ProjectDetailPage from '@/components/projects/ProjectDetailPage';
import { projectDetails } from '@/common/projectDetails';

export const metadata = {
  title: 'Ritelora — POS Multi-Cabang | RCode.dev',
  description:
    'Studi kasus Ritelora: POS multi-cabang dengan inventori per cabang, stock opname, role-based access, transaksi aman, dan struk PDF/WhatsApp.',
  alternates: { canonical: '/pos' },
  openGraph: {
    title: 'Ritelora — POS Multi-Cabang',
    description: 'Sistem POS modern untuk transaksi, inventori, tim, dan laporan retail multi-cabang.',
    url: '/pos',
    siteName: 'RCode.dev',
    locale: 'id_ID',
    type: 'website',
    images: ['/images/POS.png'],
  },
};

export default function POSProjectPage() {
  return <ProjectDetailPage project={projectDetails.pos} />;
}
