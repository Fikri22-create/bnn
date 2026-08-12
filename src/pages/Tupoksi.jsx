import {
  FiActivity,
  FiBookOpen,
  FiCheckCircle,
  FiClipboard,
  FiDatabase,
  FiFileText,
  FiHome,
  FiShare2,
  FiShield,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PageBanner from '../components/PageBanner.jsx'
import fasilitasMedis from '../assets/images/facilities/fasilitas-medis.png'

const fungsi = [
  {
    icon: FiClipboard,
    text: 'penyusunan rencana kegiatan dan anggaran Balai Besar Rehabilitasi BNN;',
  },
  {
    icon: FiFileText,
    text: 'penyusunan dan perumusan pedoman pelaksanaan rehabilitasi medis dan rehabilitasi sosial terhadap korban pecandu dan/atau penyalah guna narkotika, psikotropika, dan bahan adiktif lainnya;',
  },
  {
    icon: FiBookOpen,
    text: 'fasilitasi magang, pengkajian, penelitian dan pengembangan rehabilitasi;',
  },
  {
    icon: FiShield,
    text: 'pelayanan wajib lapor serta memberikan dukungan informasi dalam rangka pelaksanaan P4GN;',
  },
  {
    icon: FiTool,
    text: 'pelaksanaan pengkajian, pengembangan dan uji coba metode rehabilitasi guna peningkatan efektivitas dan efisiensi proses rehabilitasi;',
  },
  {
    icon: FiActivity,
    text: 'pelaksanaan pelayanan rehabilitasi medis dan penunjang medis;',
  },
  {
    icon: FiUsers,
    text: 'pelaksanaan pelayanan rehabilitasi sosial dan penunjang rehabilitasi sosial;',
  },
  {
    icon: FiShare2,
    text: 'pelaksanaan pusat rujukan bagi fasilitasi rehabilitasi korban pecandu dan/atau penyalah guna narkotika, psikotropika, dan bahan adiktif lainnya milik pemerintah, swasta dan lembaga swadaya masyarakat lainnya;',
  },
  {
    icon: FiDatabase,
    text: 'pelaksanaan penyelenggaraan database di lingkungan Balai Besar Rehabilitasi BNN;',
  },
  {
    icon: FiHome,
    text: 'pelaksanaan ketatausahaan dan rumah tangga Balai Besar Rehabilitasi BNN;',
  },
  {
    icon: FiTrendingUp,
    text: 'pelaksanaan evaluasi dan pelaporan perencanaan, program dan anggaran Balai Besar Rehabilitasi BNN.',
  },
]

function Tupoksi() {
  return (
    <>
      <PageBanner
        crumb="Tupoksi"
        title="Tugas Pokok dan Fungsi"
        subtitle="Tugas dan fungsi Balai Besar Rehabilitasi BNN berdasarkan Peraturan Badan Narkotika Nasional Nomor 7 Tahun 2020."
        image={fasilitasMedis}
        badge="Perbadan No. 7 Tahun 2020"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tugas Pokok"
          title="Tugas Balai Besar Rehabilitasi BNN"
          lead="Pasal 3 Peraturan Badan Narkotika Nasional Nomor 7 Tahun 2020."
        />
        <Reveal delay={120} variant="scale" className="mt-12 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-100 to-accent-100 opacity-70 blur-xl"
            />
            <div className="card-accent relative flex flex-col gap-6 rounded-3xl border border-primary-100 bg-white p-8 shadow-lift md:p-12">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary-700 text-white shadow-soft">
                <FiTarget className="icon-tilt h-6 w-6" />
              </span>
              <p className="text-xl font-semibold leading-relaxed text-ink-800 md:text-2xl">
                Balai Besar Rehabilitasi BNN mempunyai tugas melaksanakan pelayanan
                terpadu rehabilitasi medis dan rehabilitasi sosial sebagai{" "}
                <span className="text-primary-700">pusat rujukan nasional</span>,
                fasilitasi pengkajian dan pengembangan rehabilitasi, dan pelayanan wajib
                lapor serta memberikan dukungan informasi dalam rangka pelaksanaan P4GN.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div aria-hidden="true" className="absolute inset-0 bg-dots-faint opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Fungsi"
            title="11 Fungsi Balai Besar Rehabilitasi BNN"
            lead="Pasal 4 Peraturan Badan Narkotika Nasional Nomor 7 Tahun 2020 — dalam melaksanakan tugas, Balai Besar Rehabilitasi BNN menyelenggarakan fungsi:"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {fungsi.map(({ icon: Icon, text }, i) => (
              <Reveal
                key={text}
                delay={(i % 2) * 90}
                className="card-accent group flex items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:bg-white hover:shadow-soft"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-primary-950 transition-all duration-300 group-hover:scale-105 group-hover:bg-accent-400">
                  <Icon className="icon-tilt h-4.5 w-4.5" />
                </span>
                <p className="text-sm leading-relaxed text-ink-700">{text}</p>
              </Reveal>
            ))}
            <Reveal delay={90} className="md:col-span-2">
              <div className="flex items-start gap-4 rounded-2xl bg-primary-50 p-6 transition-all duration-300 hover:bg-primary-100/70">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-700 text-white">
                  <FiBookOpen className="icon-tilt h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-primary-900">
                  <span className="font-bold">Dasar hukum:</span> Peraturan Badan
                  Narkotika Nasional Nomor 7 Tahun 2020 tentang Organisasi dan Tata Kerja
                  Unit Pelaksana Teknis Badan Narkotika Nasional (Berita Negara RI Tahun
                  2020 Nomor 1000).
                </p>
              </div>
            </Reveal>
          </div>
        </div>
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
                Hubungi 0251-8220928
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default Tupoksi