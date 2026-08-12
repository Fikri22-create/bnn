import {
  FiActivity,
  FiBookOpen,
  FiBriefcase,
  FiCoffee,
  FiCrosshair,
  FiDisc,
  FiDribbble,
  FiDroplet,
  FiEye,
  FiFlag,
  FiGrid,
  FiHeart,
  FiHome,
  FiKey,
  FiMonitor,
  FiNavigation,
  FiPackage,
  FiRadio,
  FiRefreshCw,
  FiScissors,
  FiSquare,
  FiTarget,
  FiThermometer,
  FiTruck,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PageBanner from '../components/PageBanner.jsx'
import fasilitasUmum from '../assets/images/facilities/fasilitas-umum.png'
import fasilitasMedis from '../assets/images/facilities/fasilitas-medis.png'
import fasilitasOlahraga from '../assets/images/facilities/fasilitas-olahraga.png'

const categories = [
  {
    id: 'umum',
    name: 'Fasilitas Umum',
    image: fasilitasUmum,
    desc: 'Sarana penunjang operasional, kenyamanan, dan kehidupan sehari-hari di lingkungan Balai Besar Rehabilitasi BNN.',
    items: [
      { icon: FiBriefcase, name: 'Gedung Perkantoran', desc: 'Pusat administrasi dan kegiatan perkantoran balai.' },
      { icon: FiHome, name: 'Mess Karyawan', desc: 'Tempat tinggal karyawan dan staf balai.' },
      { icon: FiSquare, name: 'Parkiran', desc: 'Area parkir luas untuk kendaraan pegawai, tamu, dan operasional.' },
      { icon: FiZap, name: 'Genset', desc: 'Pembangkit listrik cadangan untuk menjamin pasokan daya 24 jam.' },
      { icon: FiKey, name: 'Guest House', desc: 'Penginapan bagi tamu dan keluarga residen yang berkunjung.' },
      { icon: FiUsers, name: 'Asrama Residen', desc: 'Tempat tinggal residen selama menjalani program rehabilitasi.' },
      { icon: FiRadio, name: 'Menara Radio', desc: 'Fasilitas pemancar untuk kebutuhan komunikasi dan informasi.' },
      { icon: FiCoffee, name: 'Kitchen', desc: 'Dapur sentral yang mengelola kebutuhan makan dan gizi residen.' },
      { icon: FiRefreshCw, name: 'Laundry', desc: 'Layanan pencucian dan kebersihan pakaian residen.' },
      { icon: FiBookOpen, name: 'Kelas Residen', desc: 'Ruang belajar dan kegiatan edukasi bagi residen.' },
      { icon: FiDroplet, name: 'Peternakan Ikan', desc: 'Budidaya ikan sebagai sarana terapi kegiatan dan ketahanan pangan.' },
      { icon: FiNavigation, name: 'Landasan Helikopter', desc: 'Fasilitas landasan helikopter untuk kebutuhan mobilitas udara.' },
    ],
  },
  {
    id: 'medis',
    name: 'Fasilitas Medis',
    image: fasilitasMedis,
    desc: 'Sarana kesehatan yang mendukung pelayanan rehabilitasi medis dan penunjang medis secara profesional.',
    items: [
      { icon: FiPackage, name: 'Apotik', desc: 'Pelayanan kefarmasian dan penyediaan obat-obatan bagi residen.' },
      { icon: FiActivity, name: 'EKG', desc: 'Pemeriksaan rekam jantung (elektrokardiografi).' },
      { icon: FiZap, name: 'EEG', desc: 'Pemeriksaan rekam gelombang otak (elektroensefalografi).' },
      { icon: FiMonitor, name: 'Radiologi', desc: 'Pelayanan pemeriksaan radiologi penunjang diagnosis.' },
      { icon: FiThermometer, name: 'Laboratorium', desc: 'Pemeriksaan laboratorium untuk menunjang pelayanan medis.' },
      { icon: FiCrosshair, name: 'Fisioterapi', desc: 'Terapi fisik untuk pemulihan fungsi tubuh.' },
      { icon: FiUsers, name: 'Konsultasi Dokter', desc: 'Konsultasi dan pemeriksaan oleh dokter umum.' },
      { icon: FiEye, name: 'Hypnotherapy', desc: 'Terapi hipnosis untuk mendukung pemulihan psikologis.' },
      { icon: FiHeart, name: 'Konsultasi Gizi', desc: 'Pemantauan status gizi dan edukasi pola makan sehat.' },
      { icon: FiScissors, name: 'Pemeriksaan Dokter Gigi', desc: 'Pelayanan kesehatan gigi dan mulut.' },
      { icon: FiTruck, name: 'Ambulance', desc: 'Armada ambulans siaga untuk penanganan kegawatdaruratan.' },
    ],
  },
  {
    id: 'olahraga',
    name: 'Fasilitas Olahraga',
    image: fasilitasOlahraga,
    desc: 'Sarana kebugaran dan olahraga untuk mendukung kesehatan fisik selama proses pemulihan.',
    items: [
      { icon: FiTarget, name: 'Lapangan Futsal', desc: 'Lapangan futsal untuk kegiatan olahraga bersama.' },
      { icon: FiActivity, name: 'Gym', desc: 'Pusat kebugaran dengan alat latihan fisik lengkap.' },
      { icon: FiDribbble, name: 'Lapangan Basket', desc: 'Lapangan basket untuk olahraga dan kegiatan komunitas.' },
      { icon: FiDisc, name: 'Ruang Bilyar & Tenis Meja', desc: 'Ruang rekreasi bilyar dan tenis meja residen.' },
      { icon: FiFlag, name: 'GOR', desc: 'Gelanggang olahraga untuk kegiatan olahraga bersama residen.' },
    ],
  },
]

function Fasilitas() {
  return (
    <>
      <PageBanner
        crumb="Fasilitas"
        title="Fasilitas"
        subtitle="Sarana dan prasarana yang memadai untuk mendukung proses pemulihan penyalahguna dan/atau pecandu narkoba."
        image={fasilitasUmum}
        badge="28 Fasilitas"
      />

      {categories.map((cat, ci) => (
        <section key={cat.id} className={`relative py-20 ${ci % 2 === 1 ? 'bg-white' : 'bg-ink-50/60'}`}>
          {ci % 2 === 0 ? <div aria-hidden="true" className="absolute inset-0 bg-dots-faint opacity-40" /> : null}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal variant={ci % 2 === 1 ? 'right' : 'left'} className={ci % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="group relative overflow-hidden rounded-3xl shadow-lift">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 text-primary-950">
                      <FiGrid className="icon-tilt h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-lg font-extrabold text-white">{cat.name}</p>
                      <p className="text-xs text-primary-100/80">
                        {cat.items.length} fasilitas
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <div className={ci % 2 === 1 ? 'lg:order-1' : ''}>
                <SectionHeading align="left" eyebrow={`0${ci + 1}`} title={cat.name} lead={cat.desc} />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {cat.items.map(({ icon: Icon, name }, i) => (
                    <Reveal
                      key={name}
                      delay={i * 60}
                      className="group flex items-center gap-3 rounded-xl border border-ink-100 bg-white/70 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:bg-white hover:shadow-soft"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-700 text-white transition-all duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                        <Icon className="icon-tilt h-4 w-4" />
                      </span>
                      <span className="text-sm font-bold text-ink-800">{name}</span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-white py-20">
        <div aria-hidden="true" className="absolute inset-0 bg-dots-faint opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Daftar Lengkap"
            title="28 Fasilitas Balai Besar Rehabilitasi BNN"
            lead="Seluruh fasilitas dirancang untuk mendukung proses pemulihan fisik, psikis, dan sosial para residen."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.flatMap((cat) => cat.items).map(({ icon: Icon, name, desc }, i) => (
              <Reveal
                key={name}
                delay={(i % 4) * 70}
                className="card-accent group relative flex flex-col gap-2.5 overflow-hidden rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <Icon className="icon-tilt h-4.5 w-4.5" />
                </span>
                <h3 className="text-sm font-extrabold text-ink-900">{name}</h3>
                <p className="text-xs leading-relaxed text-ink-500">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Fasilitas