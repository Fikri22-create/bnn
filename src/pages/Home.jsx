import { Link } from 'react-router-dom'
import {
  FiActivity,
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiClipboard,
  FiHeart,
  FiHome,
  FiPhone,
  FiSearch,
  FiShield,
  FiUsers,
} from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import heroMain from '../assets/images/hero-main.jpg'
import motto from '../assets/images/motto.png'
import fasilitasUmum from '../assets/images/facilities/fasilitas-umum.png'
import fasilitasMedis from '../assets/images/facilities/fasilitas-medis.png'
import fasilitasOlahraga from '../assets/images/facilities/fasilitas-olahraga.png'

const stats = [
  { icon: FiUsers, value: '500', label: 'Kapasitas Residen' },
  { icon: FiHome, value: '11,2', label: 'Hektar Areal' },
  { icon: FiClipboard, value: '3', label: 'Program 3, 6 & 12 Bulan' },
  { icon: FiHeart, value: '100%', label: 'Biaya Ditanggung Negara' },
]

const layanan = [
  {
    icon: FiActivity,
    title: 'Rehabilitasi Medis',
    desc: 'Pelayanan detoksifikasi dan penunjang medis di bawah pengawasan tenaga kesehatan profesional.',
  },
  {
    icon: FiUsers,
    title: 'Rehabilitasi Sosial',
    desc: 'Pemulihan melalui metode Therapeutic Community (TC) untuk membangun kembali kehidupan yang sehat.',
  },
  {
    icon: FiClipboard,
    title: 'Pelayanan Wajib Lapor',
    desc: 'Layanan wajib lapor bagi pecandu dan/atau penyalahguna narkotika sesuai peraturan perundang-undangan.',
  },
  {
    icon: FiSearch,
    title: 'Pengkajian & Pengembangan',
    desc: 'Fasilitasi magang, pengkajian, penelitian, dan pengembangan metode rehabilitasi yang efektif.',
  },
]

const fasilitasPreview = [
  { img: fasilitasUmum, label: 'Fasilitas Umum', to: '/fasilitas' },
  { img: fasilitasMedis, label: 'Fasilitas Medis', to: '/fasilitas' },
  { img: fasilitasOlahraga, label: 'Fasilitas Olahraga', to: '/fasilitas' },
]

function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={heroMain}
          alt="Gedung utama Balai Besar Rehabilitasi BNN"
          className="absolute inset-0 h-full w-full animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/85 via-primary-950/70 to-primary-950/95" />
        <div
          aria-hidden="true"
          className="absolute -left-40 top-1/4 h-96 w-96 rounded-full border border-accent-400/20"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/4 top-16 h-24 w-24 animate-float-slow rounded-full bg-accent-400/10 blur-2xl"
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-32 text-center sm:px-6">
          
          <Reveal delay={180}>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-white md:text-6xl">
              Pusat Rujukan Nasional Rehabilitasi Penyalahguna dan/atau Pecandu Narkoba Secara Profesional
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-100/85 md:text-lg">
              Layanan terpadu rehabilitasi medis dan rehabilitasi sosial dalam satu atap
              (one stop center) dengan metode Therapeutic Community, di lembah sejuk
              antara Gunung Salak dan Gunung Gede Pangrango.
            </p>
          </Reveal>
          <Reveal delay={420} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/profil"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-sm font-bold text-primary-950 shadow-glow-gold transition-all duration-300 hover:-translate-y-1 hover:bg-accent-400"
            >
              Profile Kami
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/kontak"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <FiPhone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              Hubungi Kami
            </Link>
          </Reveal>
          <Reveal delay={560} className="mt-20 hidden md:block">
            <div className="flex animate-float items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary-100/60">
              <FiArrowDown className="h-4 w-4" />
              Jelajahi
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <Reveal
              key={label}
              delay={i * 90}
              variant="scale"
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-white/60 bg-white/95 px-5 py-7 text-center shadow-lift backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                <Icon className="icon-tilt h-5 w-5" />
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-primary-800 md:text-3xl">
                {value}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                {label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="group relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-100 to-accent-100 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90"
              />
              <img
                src={motto}
                alt="Motto Balai Besar Rehabilitasi BNN"
                className="relative w-full rounded-3xl shadow-lift transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-3xl bg-accent-100"
              />
              <span
                aria-hidden="true"
                className="absolute -left-4 -top-4 h-20 w-20 rounded-2xl border-2 border-accent-400/40"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Visi Kami"
              title="Menjadi Pusat Rujukan Nasional Pelaksanaan Rehabilitasi"
              lead="Bagi penyalahguna dan/atau pecandu narkoba secara profesional."
            />
            <Reveal delay={150}>
              <div className="mt-8 flex flex-col gap-5">
                <div className="card-accent rounded-2xl border-l-4 border-accent-500 bg-primary-50 p-5">
                  <p className="text-lg font-bold leading-snug text-primary-900">
                    "Menjadi Pusat Rujukan Nasional Pelaksanaan Rehabilitasi Bagi
                    Penyalahguna dan/atau Pecandu Narkoba Secara Profesional."
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    'Pelayanan terpadu rehabilitasi medis dan sosial',
                    'Fasilitasi pengkajian dan pengembangan rehabilitasi',
                    'Pelayanan program wajib lapor pecandu',
                    'Dukungan informasi dalam rangka pelaksanaan P4GN',
                  ].map((item, i) => (
                    <div key={item} className="group flex items-start gap-3 text-sm text-ink-600">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-xs font-bold text-accent-700 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/profil"
                  className="btn-shine group inline-flex w-fit items-center gap-2 rounded-full bg-primary-700 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-lift"
                >
                  Selengkapnya
                  <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-dots-faint opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Pelayanan Rehabilitasi Terpadu dalam Satu Atap"
            lead="Balai Besar Rehabilitasi BNN memberikan layanan gratis bagi penyalahguna dan/atau pecandu narkoba, dengan pendekatan rehabilitasi medis dan sosial yang menyeluruh."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {layanan.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={i * 90}
                className="card-accent group relative flex flex-col gap-3.5 overflow-hidden rounded-2xl border border-ink-100 bg-ink-50/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:bg-white hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-700 text-white shadow-soft transition-all duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                  <Icon className="icon-tilt h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-ink-900">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{desc}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Pelajari
                  <FiArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sarana & Prasarana"
          title="Fasilitas yang Mendukung Pemulihan"
          lead="Berlokasi di lembah antara Gunung Salak dan Gunung Gede Pangrango, dengan iklim sejuk dan lingkungan yang menunjang proses pemulihan."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {fasilitasPreview.map(({ img, label }, i) => (
            <Reveal
              key={label}
              delay={i * 110}
              className="group relative overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <img
                src={img}
                alt={label}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                <span className="text-base font-bold text-white">{label}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-500 text-primary-950 transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/fasilitas"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary-200 px-7 py-3 text-sm font-bold text-primary-700 transition-all duration-300 hover:border-primary-700 hover:bg-primary-700 hover:text-white"
          >
            Lihat Semua Fasilitas
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 px-8 py-14 text-center text-white shadow-lift">
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-gradient-pan bg-gradient-to-r from-primary-800 via-primary-700 to-primary-950 opacity-60"
              style={{ backgroundSize: '200% 200%' }}
            />
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-accent-400/25"
            />
            <div
              aria-hidden="true"
              className="absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl"
            />
            <div className="relative flex flex-col items-center gap-5">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-500 text-primary-950 shadow-glow-gold">
                <FiCheckCircle className="h-8 w-8" />
              </span>
              <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight md:text-3xl">
                Wajib Lapor dan Layanan Rehabilitasi
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-primary-100/80">
                Penyalahguna dan/atau pecandu narkotika yang melaporkan diri dapat
                memperoleh layanan rehabilitasi medis dan sosial yang biayanya ditanggung
                oleh pemerintah.
              </p>
              <a
                href="tel:02518220928"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-sm font-bold text-primary-950 shadow-glow-gold transition-all duration-300 hover:-translate-y-1 hover:bg-accent-400"
              >
                <FiPhone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Hubungi 0251-8220928
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default Home