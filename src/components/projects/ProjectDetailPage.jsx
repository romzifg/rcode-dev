import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_URL =
  'https://wa.me/6289560214608?text=Halo%20RCode.dev%2C%20saya%20ingin%20berdiskusi%20tentang%20pengembangan%20sistem%20untuk%20bisnis%20saya.';

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function ProjectDetailPage({ project }) {
  return (
    <div className="noise-overlay-wrapper relative min-h-screen overflow-x-hidden bg-rcode-bg text-rcode-white">
      <div className="noise-overlay" />

      <header className="fixed inset-x-0 top-0 z-100 border-b border-white/8 bg-rcode-bg/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="RCode.dev - Beranda">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-rcode-amber text-sm font-bold text-rcode-bg">R</span>
            <span className="font-serif text-xl">RCode<span className="text-rcode-amber">.dev</span></span>
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            <Link href="/#portofolio" className="text-sm text-white/50 transition-colors hover:text-white">
              <span className="hidden sm:inline">← Kembali ke portofolio</span>
              <span className="sm:hidden">← Kembali</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-rcode-amber px-4 py-2.5 text-sm font-semibold text-rcode-bg transition-colors hover:bg-rcode-amber-light sm:inline-flex"
            >
              Konsultasi <Arrow />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-16">
        <section className="project-hero hero-grid relative overflow-hidden">
          <div className="hero-orb hero-orb-one" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-16">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-rcode-amber/25 bg-rcode-amber/8 px-3.5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-rcode-amber">
                {project.category}
              </div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-white/35">{project.product}</p>
              <h1 className="mb-7 font-serif text-[clamp(2.7rem,5.6vw,5rem)] leading-[1.01] tracking-[-0.045em]">
                {project.title}
              </h1>
              <p className="mb-8 max-w-2xl text-[1.03rem] font-light leading-[1.75] text-white/58 md:text-[1.1rem]">
                {project.intro}
              </p>
              <div className="mb-9 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-rcode-amber px-6 py-3.5 font-semibold text-rcode-bg shadow-[0_12px_36px_rgba(232,160,32,.18)] transition-all hover:-translate-y-0.5 hover:bg-rcode-amber-light"
                >
                  Diskusikan Proyek Serupa <Arrow />
                </a>
                <a href="#fitur" className="inline-flex items-center rounded-xl border border-white/15 bg-white/3 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/7">
                  Jelajahi Fitur
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="project-frame relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-rcode-bg2 p-2.5 shadow-[0_35px_100px_rgba(0,0,0,.42)]">
                <div className="flex items-center justify-between px-3 py-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f4bd4f]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
                  </div>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/30">Product Preview</span>
                </div>
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-rcode-bg3">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 52vw, 92vw"
                    className="object-cover object-top-left"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/5 bg-linear-to-t from-rcode-bg2/80 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-rcode-bg2/60">
          <div className="mx-auto grid max-w-7xl gap-px bg-white/8 sm:grid-cols-3">
            {project.facts.map((fact) => (
              <div key={fact.value} className="bg-rcode-bg2 px-6 py-7 md:px-8">
                <p className="font-serif text-2xl text-rcode-amber">{fact.value}</p>
                <p className="mt-1 text-sm font-light text-white/45">{fact.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="screenshots" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 md:px-8 md:py-28">
          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-rcode-amber">Tampilan Produk</p>
              <h2 className="font-serif text-[clamp(2.4rem,4vw,3.7rem)] leading-[1.05] tracking-tight">
                Beberapa layar utama <span className="text-rcode-amber">{project.product}.</span>
              </h2>
            </div>
            <p className="max-w-lg font-light leading-[1.75] text-white/50 md:justify-self-end">
              Setiap antarmuka dirancang agar informasi penting mudah ditemukan dan aktivitas operasional dapat diselesaikan dengan lebih sedikit langkah.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {project.gallery.map((shot, index) => (
              <a
                key={`${shot.title}-${index}`}
                href={shot.src}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-shot group relative overflow-hidden rounded-2xl border border-white/10 bg-rcode-bg2 ${index === 0 ? 'md:col-span-2' : ''}`}
                aria-label={`Buka screenshot ${shot.title} ukuran penuh`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-16/7' : 'aspect-video'}`}>
                  <Image
                    src={shot.src}
                    alt={`${shot.title} pada ${project.product}`}
                    fill
                    sizes={index === 0 ? '(min-width: 1280px) 1200px, 94vw' : '(min-width: 768px) 46vw, 94vw'}
                    className={`object-cover transition-transform duration-500 ${shot.zoom ? 'scale-[1.32] group-hover:scale-[1.36]' : 'group-hover:scale-[1.025]'}`}
                    style={{ objectPosition: shot.position }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-rcode-bg via-rcode-bg/10 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-rcode-bg/70 px-3 py-1.5 text-xs text-white/60 backdrop-blur-md transition-colors group-hover:border-rcode-amber/35 group-hover:text-rcode-amber">
                    Lihat penuh ↗
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                    <h3 className="font-serif text-xl md:text-2xl">{shot.title}</h3>
                    <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-white/50 md:text-sm">{shot.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-white/8 bg-rcode-bg2/35 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/8 bg-white/2 p-7 md:p-10">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-rcode-amber">{project.challenge.eyebrow}</p>
              <h2 className="mb-5 font-serif text-[clamp(2rem,3vw,3rem)] leading-[1.08]">{project.challenge.title}</h2>
              <p className="mb-8 font-light leading-[1.75] text-white/55">{project.challenge.desc}</p>
              <div className="space-y-4">
                {project.challenge.points.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-relaxed text-white/58">
                    <span className="mt-0.5 text-rcode-amber">—</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-rcode-amber/18 bg-rcode-amber/6 p-7 md:p-10">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-rcode-amber/10 blur-3xl" />
              <div className="relative">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-rcode-amber">{project.solution.eyebrow}</p>
                <h2 className="mb-5 font-serif text-[clamp(2rem,3vw,3rem)] leading-[1.08]">{project.solution.title}</h2>
                <p className="font-light leading-[1.8] text-white/60">{project.solution.desc}</p>
                <div className="mt-10 flex items-center gap-3 border-t border-rcode-amber/15 pt-6 text-sm text-white/45">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-rcode-amber text-rcode-bg">✓</span>
                  Dibangun berdasarkan alur operasional nyata
                </div>
              </div>
            </article>
          </div>
          </div>
        </section>

        <section id="fitur" className="border-y border-white/8 bg-rcode-bg2/65 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-14 max-w-3xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-rcode-amber">Kapabilitas Utama</p>
              <h2 className="font-serif text-[clamp(2.4rem,4vw,3.7rem)] leading-[1.05] tracking-tight">
                Dirancang untuk menyederhanakan <span className="text-rcode-amber">operasional sehari-hari.</span>
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <article key={feature.number} className="project-feature group rounded-2xl border border-white/8 bg-rcode-bg p-6 md:p-7">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-xs text-rcode-amber">{feature.number}</span>
                    <span className="text-white/25 transition-colors group-hover:text-rcode-amber">↗</span>
                  </div>
                  <h3 className="mb-3 font-serif text-[1.45rem] leading-tight">{feature.title}</h3>
                  <p className="text-[0.9rem] font-light leading-[1.7] text-white/52">{feature.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-rcode-amber">Hak Akses</p>
              <h2 className="font-serif text-[clamp(2.3rem,3.8vw,3.5rem)] leading-[1.08]">Pengalaman yang tepat untuk setiap peran.</h2>
              <p className="mt-5 max-w-md font-light leading-[1.75] text-white/52">
                Setiap pengguna melihat fitur yang relevan dengan tanggung jawabnya, sehingga pekerjaan lebih fokus dan data sensitif tetap terkontrol.
              </p>
            </div>

            <div className={`grid gap-4 ${project.roles.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
              {project.roles.map((role, index) => (
                <article key={role.name} className="rounded-2xl border border-white/8 bg-white/2 p-6">
                  <span className="mb-8 grid h-10 w-10 place-items-center rounded-xl border border-rcode-amber/20 bg-rcode-amber/8 font-mono text-xs text-rcode-amber">
                    0{index + 1}
                  </span>
                  <p className="mb-1 font-serif text-2xl">{role.name}</p>
                  <p className="mb-6 text-xs uppercase tracking-widest text-white/30">{role.label}</p>
                  <div className="space-y-3">
                    {role.capabilities.map((item) => (
                      <p key={item} className="flex gap-2.5 text-sm leading-relaxed text-white/52">
                        <span className="text-rcode-green">✓</span>{item}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-rcode-bg2/65 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-rcode-amber">Cara Kerja</p>
                <h2 className="font-serif text-[clamp(2.3rem,3.8vw,3.5rem)] leading-[1.08]">Alur sederhana, kontrol tetap menyeluruh.</h2>
              </div>
              <p className="max-w-lg font-light leading-[1.75] text-white/50 md:justify-self-end">
                Setiap langkah dirancang agar mudah digunakan tim operasional sekaligus memberikan visibilitas yang dibutuhkan manajemen.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {project.workflow.map((step) => (
                <article key={step.number} className="border-t border-rcode-amber/35 pt-5">
                  <span className="font-mono text-xs text-rcode-amber">{step.number}</span>
                  <h3 className="mb-2 mt-8 font-serif text-xl">{step.title}</h3>
                  <p className="text-sm font-light leading-[1.65] text-white/48">{step.desc}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-2 border-t border-white/8 pt-7">
              <span className="mr-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/30">Technology</span>
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-white/48">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="cta-panel relative mx-auto max-w-6xl overflow-hidden rounded-4xl border border-rcode-amber/18 px-6 py-16 text-center md:px-14 md:py-24">
            <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-rcode-amber/13 blur-[100px]" />
            <div className="relative mx-auto max-w-3xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-rcode-amber">Konsultasi Proyek</p>
              <h2 className="mb-6 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.04] tracking-[-0.035em]">{project.ctaTitle}</h2>
              <p className="mx-auto mb-9 max-w-2xl font-light leading-[1.75] text-white/55">{project.ctaDesc}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-rcode-amber px-7 py-4 font-semibold text-rcode-bg transition-all hover:-translate-y-0.5 hover:bg-rcode-amber-light">
                  Konsultasi Gratis <Arrow />
                </a>
                <Link href={project.nextHref} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/3 px-7 py-4 font-medium transition-colors hover:bg-white/7">
                  {project.nextLabel} <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/8 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 text-sm text-white/30 md:px-8">
          <span>© {new Date().getFullYear()} RCode.dev</span>
          <Link href="/" className="transition-colors hover:text-white/60">Kembali ke beranda</Link>
        </div>
      </footer>
    </div>
  );
}
