import { ImageResponse } from 'next/og';

export const alt = 'Romzi Farhan Ghozi — Web Developer dan Founder RCode.dev';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 78px',
          color: '#f5f2eb',
          background: 'linear-gradient(135deg, #0d0d0c 0%, #151513 68%, #20180b 100%)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, fontWeight: 700 }}>
          <div style={{ display: 'flex', width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center', background: '#e8a020', color: '#0d0d0c' }}>R</div>
          RCode.dev
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 950 }}>
          <div style={{ color: '#e8a020', fontSize: 22, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 22 }}>Web Developer &amp; Digital Solutions</div>
          <div style={{ fontSize: 70, lineHeight: 1.05, fontWeight: 700, letterSpacing: -2.5 }}>Romzi Farhan Ghozi</div>
          <div style={{ marginTop: 24, color: 'rgba(245,242,235,.68)', fontSize: 28, lineHeight: 1.4 }}>Website, dashboard, sistem bisnis, dan automasi custom.</div>
        </div>
      </div>
    ),
    size,
  );
}
