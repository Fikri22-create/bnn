import {
  FiActivity,
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiCrosshair,
  FiDatabase,
  FiGrid,
  FiHome,
  FiInbox,
  FiLayers,
  FiPlay,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'
import { FaBriefcaseMedical } from 'react-icons/fa'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PageBanner from '../components/PageBanner.jsx'
import heroMain from '../assets/images/hero-main.jpg'
import motto from '../assets/images/motto.png'
// TODO: Saat file video tersedia, letakkan di src/assets/videos/ lalu:
// 1. import videoUrl from '../assets/videos/<nama-file>.mp4'
// 2. Ganti blok placeholder foto di bawah dengan:
//    <video src={videoUrl} controls preload="metadata" playsInline className="aspect-video w-full object-cover">
//      Browser Anda tidak mendukung pemutaran video.
//    </video>

const misi = [
  'melaksanakan pelayanan secara terpadu rehabilitasi medis dan sosial bagi penyalahguna dan/atau pecandu narkoba;',
  'memfasilitasi pengkajian dan pengembangan rehabilitasi;',
  'melaksanakan pelayanan program wajib lapor pecandu;',
  'memberikan dukungan informasi dalam rangka pelaksanaan pencegahan, pemberantasan, penyalahgunaan dan peredaran gelap narkoba.',
]

const timLayanan = [
  {
    icon: FiInbox,
    name: 'Tim Layanan Penerimaan & Informasi Klien',
    members: ['Konselor', 'Pembimbing agama', 'Pengelola keuangan', 'Laboratorium kesehatan', 'Pramubakti'],
  },
  {
    icon: FiActivity,
    name: 'Tim Layanan Klinis',
    members: ['Dokter spesialis', 'Dokter', 'Psikolog', 'Perawat', 'Konselor', 'Pembimbing agama', 'Asisten konselor', 'Pekerja sosial'],
  },
  {
    icon: FiCalendar,
    name: 'Tim Layanan Kegiatan',
    members: ['Dokter gigi', 'Instruktur', 'Pembimbing agama', 'Perawat', 'Nutrisionis', 'Konselor', 'Asisten konselor', 'Pengelola keuangan'],
  },
  {
    icon: FiCrosshair,
    name: 'Tim Layanan Poliklinik',
    members: ['Dokter', 'Dokter gigi', 'Terapis gigi', 'Perawat', 'Nutrisionis', 'Fisioterapis'],
  },
  {
    icon: FiHome,
    name: 'Tim Layanan Rawat Inap',
    members: ['Dokter', 'Perawat', 'Konselor', 'Asisten konselor'],
  },
  {
    icon: FiDatabase,
    name: 'Tim Layanan Manajemen Data & Pengendalian Mutu Kesehatan',
    members: ['Dokter gigi', 'Perawat', 'Nutrisionis', 'Laboratorium kesehatan', 'Radiografer', 'Apoteker', 'Pramubakti'],
  },
  {
    icon: FiUsers,
    name: 'Tim Rawat Jalan',
    members: ['Konselor', 'Asisten konselor', 'Perawat', 'Laboratorium kesehatan', 'Nutrisionis'],
  },
  {
    icon: FaBriefcaseMedical,
    name: 'Tim Penunjang Kesehatan',
    members: ['Dokter', 'Laboratorium kesehatan', 'Kesling', 'Asisten konselor', 'Elektromedik', 'Apoteker', 'Asisten apoteker', 'Radiografer', 'Bidan', 'Pramubakti', 'Petugas kebersihan'],
  },
]

function StrukturChart() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center">
      <Reveal variant="scale" className="w-full max-w-md">
        <div className="relative rounded-2xl border-2 border-accent-400/60 bg-primary-800 px-6 py-5 text-center shadow-glow">
          <span
            aria-hidden="true"
            className="absolute -top-2.5 left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 rounded-sm border-l-2 border-t-2 border-accent-400/60 bg-primary-800"
          />
          <p className="text-base font-extrabold text-white md:text-lg">
            Kepala Balai Besar Rehabilitasi BNN
          </p>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-300">
            dr. Elvina Katerin Sahusilawane, Sp.KJ
          </p>
        </div>
      </Reveal>
      <div aria-hidden="true" className="h-8 w-px bg-primary-300" />
      <Reveal className="w-full max-w-md">
        <div className="rounded-2xl border-2 border-primary-300 bg-white px-6 py-4 text-center shadow-soft">
          <p className="text-base font-extrabold text-primary-800">Kepala Bagian Umum</p>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-400">
            drg. Mario Leonid Supusepa
          </p>
        </div>
      </Reveal>
      <div aria-hidden="true" className="h-8 w-px bg-primary-300" />

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <Reveal className="flex flex-col items-center">
          <div aria-hidden="true" className="h-8 w-px bg-primary-300 md:h-0" />
          <div className="w-full max-w-sm rounded-2xl border border-primary-200 bg-primary-50 px-5 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
            <p className="text-sm font-extrabold text-primary-900">KSB Keu. Hum &amp; Rumga</p>
            <p className="mt-1 text-xs leading-snug text-ink-500">
              Kepala Subbagian Keuangan, Kehumasan, dan Rumah Tangga
            </p>
            <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-400">
              I Komang Ari Sudana, Amd, TE
            </p>
          </div>
        </Reveal>
        <Reveal delay={100} className="flex flex-col items-center">
          <div aria-hidden="true" className="h-8 w-px bg-primary-300 md:h-0" />
          <div className="w-full max-w-sm rounded-2xl border border-primary-200 bg-primary-50 px-5 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
            <p className="text-sm font-extrabold text-primary-900">KSB Ren Kepeg &amp; TU</p>
            <p className="mt-1 text-xs leading-snug text-ink-500">
              Kepala Subbagian Perencanaan, Kepegawaian, dan Tata Usaha
            </p>
            <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-400">
              Jeffry Richard Tuapattimain, ST
            </p>
          </div>
        </Reveal>
      </div>
      <div aria-hidden="true" className="h-8 w-px bg-primary-300" />

      <Reveal className="w-full">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-px flex-1 bg-primary-200" />
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-300 bg-accent-50 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-800">
            <FiLayers className="h-4 w-4" />
            Fungsional / Tim Layanan
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-primary-200" />
        </div>
      </Reveal>

      <div className="mt-8 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {timLayanan.map(({ icon: Icon, name, members }, i) => (
          <Reveal
            key={name}
            delay={(i % 4) * 80}
            className="card-accent group flex flex-col gap-3.5 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-700 text-white transition-all duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                <Icon className="icon-tilt h-4.5 w-4.5" />
              </span>
              <span className="rounded-full bg-accent-50 px-2.5 py-1 text-[11px] font-extrabold tracking-wider text-accent-700">
                TIM {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h4 className="text-sm font-extrabold leading-snug text-ink-900">{name}</h4>
            <div className="flex flex-wrap gap-1.5">
              {members.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-primary-100 bg-primary-50 px-2.5 py-1 text-[11px] font-semibold text-primary-800 transition-colors duration-300 group-hover:border-accent-200 group-hover:bg-accent-50"
                >
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <p className="flex items-center gap-2 text-xs text-ink-400">
          <FiBookOpen className="h-3.5 w-3.5 shrink-0 text-accent-500" />
          Struktur berdasarkan Peraturan BNN Nomor 7 Tahun 2020 dan data kepegawaian
          Balai Besar Rehabilitasi BNN (babeslido.bnn.go.id).
        </p>
      </Reveal>
    </div>
  )
}

function Profil() {
  return (
    <>
      <PageBanner
        crumb="Profile"
        title="Profile"
        subtitle="Pusat rujukan nasional pelaksanaan rehabilitasi bagi penyalahguna dan/atau pecandu narkoba secara profesional."
        image={heroMain}
        badge="One Stop Center"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Latar Belakang"
              title="Pusat Rujukan Nasional Rehabilitasi"
            />
            <Reveal delay={120} className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-ink-600">
              <p>
                Keberadaan Balai Besar Rehabilitasi Badan Narkotika Nasional merupakan
                pusat rujukan nasional pelaksanaan rehabilitasi bagi penyalahguna
                dan/atau pecandu narkoba secara profesional yang berfungsi melaksanakan
                pelayanan rehabilitasi medis dan sosial bagi penyalahguna dan/atau
                pecandu narkoba dan dipimpin oleh Kepala Balai Besar Rehabilitasi BNN.
              </p>
              <p>
                Berdasarkan Perbadan No 7 Tahun 2020 Balai Besar Rehabilitasi BNN
                mempunyai tugas melaksanakan pelayanan terpadu rehabilitasi medis dan
                rehabilitasi sosial sebagai pusat rujukan nasional, fasilitas pengkajian
                dan pengembangan rehabilitasi, dan pelayanan wajib lapor serta
                memberikan dukungan informasi dalam rangka pelaksanaan P4GN. Balai Besar
                Rehabilitasi BNN berperan serta dalam upaya mencapai visi{" "}
                <span className="font-semibold text-primary-800">
                  "Indonesia Bersinar (Bersih Narkoba)".
                </span>
              </p>
              <p>
                Pelaksanaan pelayanan di Balai Besar Rehabilitasi BNN bagi pecandu dan
                penyalahguna narkoba menggunakan sistem one stop center (pelayanan satu
                atap) terdiri dari pelayanan rehabilitasi medis dan rehabilitasi sosial
                dalam satu atap. Pada pelayanan rehabilitasi sosial menggunakan metode
                Therapeutic Community (TC) dengan kapasitas daya tampung berjumlah 500
                orang.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150} variant="right">
            <div className="group relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-100 to-accent-100 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90"
              />
              <img
                src={heroMain}
                alt="Gedung utama Balai Besar Rehabilitasi BNN"
                className="relative w-full rounded-3xl shadow-lift transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lift transition-transform duration-300 group-hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-primary-950">
                  <FiTarget className="icon-tilt h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-ink-900">One Stop Center</p>
                  <p className="text-xs text-ink-400">Rehabilitasi medis &amp; sosial</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div aria-hidden="true" className="absolute inset-0 bg-dots-faint opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Visi & Misi" title="Arah dan Komitmen Kami" />
          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            <Reveal variant="left" className="lg:col-span-2">
              <div className="group flex h-full flex-col gap-5 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 p-8 text-white shadow-lift transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-primary-950 shadow-glow-gold">
                  <FiTarget className="icon-tilt h-6 w-6" />
                </span>
                <h3 className="text-xl font-extrabold">Visi</h3>
                <p className="text-lg font-semibold leading-relaxed text-primary-50">
                  Menjadi Pusat Rujukan Nasional Pelaksanaan Rehabilitasi Bagi
                  Penyalahguna dan/atau Pecandu Narkoba Secara Profesional.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} variant="right" className="lg:col-span-3">
              <div className="card-accent flex h-full flex-col gap-4 rounded-3xl border border-ink-100 bg-ink-50/60 p-8 transition-all duration-300 hover:bg-white hover:shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-700 text-white">
                    <FiAward className="icon-tilt h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-extrabold text-ink-900">Misi</h3>
                </div>
                <ol className="flex flex-col gap-4">
                  {misi.map((item, i) => (
                    <li key={item} className="group flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs font-extrabold text-primary-950 transition-transform duration-300 group-hover:scale-110">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-ink-600">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Motto" title="Motto Balai Besar Rehabilitasi BNN" />
        <Reveal delay={120} className="mt-10 flex justify-center">
          <div className="group relative w-full max-w-3xl">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-100 to-accent-100 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90"
            />
            <span
              aria-hidden="true"
              className="absolute -left-4 -top-4 z-10 h-20 w-20 rounded-2xl border-2 border-accent-400/40"
            />
            <img
              src={motto}
              alt="Motto Balai Besar Rehabilitasi BNN"
              className="relative w-full rounded-3xl shadow-lift transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div aria-hidden="true" className="absolute inset-0 bg-dots-faint opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Struktur Organisasi"
            title="Struktur Organisasi Balai Besar Rehabilitasi BNN"
            lead="Hierarki kepemimpinan dan tim layanan yang menjalankan pelayanan rehabilitasi secara profesional."
          />
          <div className="mt-16">
            <StrukturChart />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Video Profil"
          title="Sekilas Balai Besar Rehabilitasi BNN"
          lead="Tonton video singkat untuk mengenal lebih dekat lingkungan, layanan, dan suasana pemulihan di Balai Besar Rehabilitasi BNN."
        />
        <Reveal delay={120} variant="scale" className="mt-12">
          <div className="video-frame group relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-primary-950 shadow-lift">
            {/* Placeholder foto — sementara menunggu file video di src/assets/videos/ */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={heroMain}
                alt="Balai Besar Rehabilitasi BNN"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-primary-950/20" />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent-500 text-primary-950 shadow-glow-gold transition-all duration-300 group-hover:scale-110">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-pulse-ring rounded-full bg-accent-500"
                  />
                  <FiPlay className="relative ml-1 h-8 w-8" />
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-1 border-t border-white/10 bg-primary-900/95 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-primary-950">
                  <FiPlay className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-white">
                    Profil Balai Besar Rehabilitasi BNN
                  </p>
                  <p className="text-xs text-primary-200/70">
                    Lido - Cigombong, Kabupaten Bogor
                  </p>
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-300">
                <FiGrid className="h-3.5 w-3.5" />
                One Stop Center
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default Profil