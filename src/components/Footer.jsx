import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi'
import lambang from '../assets/icons/lambang.png'

const socials = [
  { icon: FiTwitter, href: 'https://twitter.com/INFOBNN', label: 'Twitter BNN' },
  { icon: FiFacebook, href: 'https://www.facebook.com/humas.bnn/', label: 'Facebook BNN' },
  {
    icon: FiYoutube,
    href: 'https://www.youtube.com/channel/UCkmxYfYaqHWIlJdpQTibXUA',
    label: 'YouTube BNN',
  },
  { icon: FiInstagram, href: 'https://www.instagram.com/lensa_bnn/', label: 'Instagram BNN' },
]

const quickLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/profil', label: 'Profile' },
  { to: '/fasilitas', label: 'Fasilitas' },
  { to: '/tupoksi', label: 'Tupoksi' },
  { to: '/kontak', label: 'Kontak Kami' },
]

const relatedLinks = [
  { href: 'https://bnn.go.id/', label: 'BNN Pusat' },
  { href: 'https://rehabilitasi.bnn.go.id/', label: 'Layanan Rehabilitasi (SIRENA)' },
  { href: 'https://ppid.bnn.go.id/', label: 'Layanan Informasi Publik (PPID)' },
  { href: 'https://jdih.bnn.go.id/', label: 'Peraturan (JDIH)' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-950 text-primary-100">
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-accent-600 via-accent-400 to-accent-600 opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-accent-500/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <Link to="/" className="group flex items-center gap-3">
              <span className="relative">
                <img
                  src={lambang}
                  alt="Lambang BNN"
                  className="h-12 w-12 rounded-full bg-white p-0.5 transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-primary-950 bg-accent-400"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-extrabold text-white">
                  Balai Besar Rehabilitasi BNN
                </span>
                <span className="text-xs text-primary-200/70">Lido - Cigombong, Bogor</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-200/70">
              Pusat rujukan nasional pelaksanaan rehabilitasi bagi penyalahguna dan/atau
              pecandu narkoba secara profesional.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-primary-100 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-500 hover:text-primary-950 hover:shadow-glow-gold"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Navigasi
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-primary-200/80 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                    <FiArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Kontak
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-primary-200/80">
              <li className="group flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                  <FiMapPin className="h-4 w-4" />
                </span>
                <span>
                  Jl. Mayjen. H. R. Edi Sukma Km. 21 Ds. Wates Jaya Kec. Cigombong -
                  Kab. Bogor Jawa Barat 16110 Indonesia
                </span>
              </li>
              <li className="group flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                  <FiPhone className="h-4 w-4" />
                </span>
                <span>
                  0251-8220928 / 0251-8224521
                  <span className="block text-xs text-primary-200/60">
                    Call Center BNN: 184
                  </span>
                </span>
              </li>
              <li className="group flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                  <FiMail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:inforehablido@bnn.go.id"
                  className="transition-colors hover:text-accent-300"
                >
                  inforehablido@bnn.go.id
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Tautan Terkait
            </h3>
            <ul className="flex flex-col gap-3">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-primary-200/80 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                    <FiArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-primary-200/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            Badan Narkotika Nasional Republik Indonesia - Balai Besar Rehabilitasi BNN
          </p>
          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Indonesia Bersinar (Bersih Narkoba)
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer