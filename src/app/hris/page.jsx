import ProjectDetailPage from '@/components/projects/ProjectDetailPage';
import { projectDetails } from '@/common/projectDetails';

export const metadata = {
  title: 'AttendEase — HRIS & Attendance Platform | RCode.dev',
  description:
    'Studi kasus AttendEase: HRIS untuk absensi GPS, cuti dan kuota karyawan, approval bertingkat, data organisasi, serta people analytics.',
  openGraph: {
    title: 'AttendEase — HRIS & Attendance Platform',
    description: 'Platform HRIS modern untuk absensi, cuti, approval, dan people operations.',
    images: ['/images/HRIS.png'],
  },
};

export default function HRISProjectPage() {
  return <ProjectDetailPage project={projectDetails.hris} />;
}
