import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PageBanner from '../components/PageBanner.jsx'
import fasilitasOlahraga from '../assets/images/facilities/fasilitas-olahraga.png'

const infoCards = [
  {
    icon: FiMapPin,
    title: 'Alamat',
    lines: [
      'Jl. Mayjen. H. R. Edi Sukma Km. 21 Ds. Wates Jaya Kec. Cigombong - Kab. Bogor Jawa Barat 16110 Indonesia',
    ],
  },
  {
    icon: FiPhone,
    title: 'Telepon',
    lines: ['0251-8220928', '0251-8224521', 'Call Center BNN: 184'],
  },
  {
    icon: FiMail,
    title: 'Email',
    lines: ['inforehablido@bnn.go.id'],
    href: 'mailto:inforehablido@bnn.go.id',
  },
  {
    icon: FiClock,
    title: 'Lokasi',
    lines: ['7R48+CW Watesjaya, Kabupaten Bogor, Jawa Barat'],
  },
]

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

const initialState = { name: '', email: '', subject: '', message: '' }

function Kontak() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [errorDetail, setErrorDetail] = useState('')

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Nama wajib diisi.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Email tidak valid.'
    if (!form.subject.trim()) next.subject = 'Subjek wajib diisi.'
    if (!form.message.trim()) next.message = 'Pesan wajib diisi.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setForm(initialState)
      setErrorDetail('')
    } catch (err) {
      setStatus('error')
      setErrorDetail(err?.text || err?.message || '')
    }
  }

  return (
    <>
      <PageBanner
        crumb="Kontak"
        title="Kontak Kami"
        subtitle="Hubungi kami untuk informasi layanan rehabilitasi, wajib lapor, kunjungan, dan kerja sama."
        image={fasilitasOlahraga}
        badge="Call Center BNN: 184"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Informasi Kontak"
              title="Hubungi Kami"
              lead="Informasi resmi Balai Besar Rehabilitasi BNN."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {infoCards.map(({ icon: Icon, title, lines, href }, i) => (
                <Reveal
                  key={title}
                  delay={i * 80}
                  className="card-accent group flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lift"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-700 text-white transition-all duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                    <Icon className="icon-tilt h-4.5 w-4.5" />
                  </span>
                  <h3 className="text-sm font-extrabold text-ink-900">{title}</h3>
                  <div className="flex flex-col gap-0.5">
                    {lines.map((line) =>
                      href ? (
                        <a
                          key={line}
                          href={href}
                          className="text-xs leading-relaxed text-ink-500 transition-colors hover:text-primary-700"
                        >
                          {line}
                        </a>
                      ) : (
                        <span key={line} className="text-xs leading-relaxed text-ink-500">
                          {line}
                        </span>
                      ),
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 px-5 py-5 sm:flex-row sm:items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-500">
                  Media Sosial
                </span>
                <span aria-hidden="true" className="hidden h-px flex-1 bg-ink-200 sm:block" />
                <div className="flex gap-2.5">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-500 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-accent-500 hover:text-primary-950 hover:shadow-glow-gold"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Kirim Pesan"
              title="Formulir Kontak"
              lead="Isi formulir di bawah ini, pesan Anda akan kami terima melalui email resmi Balai Besar Rehabilitasi BNN."
            />
            <Reveal delay={120} variant="right" className="mt-8">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="card-accent flex flex-col gap-5 rounded-3xl border border-ink-100 bg-white p-7 shadow-lift md:p-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-600"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      className={`w-full rounded-xl border bg-ink-50/50 px-4 py-3 text-sm text-ink-800 outline-none transition-all placeholder:text-ink-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 ${
                        errors.name ? 'border-red-400' : 'border-ink-200'
                      }`}
                    />
                    {errors.name ? (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-600"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@gmail.com"
                      className={`w-full rounded-xl border bg-ink-50/50 px-4 py-3 text-sm text-ink-800 outline-none transition-all placeholder:text-ink-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 ${
                        errors.email ? 'border-red-400' : 'border-ink-200'
                      }`}
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-600"
                  >
                    Subjek
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Perihal pesan"
                    className={`w-full rounded-xl border bg-ink-50/50 px-4 py-3 text-sm text-ink-800 outline-none transition-all placeholder:text-ink-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 ${
                      errors.subject ? 'border-red-400' : 'border-ink-200'
                    }`}
                  />
                  {errors.subject ? (
                    <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-600"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    className={`w-full resize-y rounded-xl border bg-ink-50/50 px-4 py-3 text-sm text-ink-800 outline-none transition-all placeholder:text-ink-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 ${
                      errors.message ? 'border-red-400' : 'border-ink-200'
                    }`}
                  />
                  {errors.message ? (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-shine group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <FiSend className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Kirim Pesan
                    </>
                  )}
                </button>

                {status === 'success' ? (
                  <p className="flex items-center gap-2 rounded-xl bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-800">
                    <FiCheckCircle className="h-4.5 w-4.5 shrink-0" />
                    Terima kasih! Pesan Anda telah terkirim.
                  </p>
                ) : null}
                {status === 'error' ? (
                  <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                    <p className="flex items-center gap-2">
                      <FiAlertCircle className="h-4.5 w-4.5 shrink-0" />
                      Pesan gagal terkirim. Silakan coba lagi.
                    </p>
                    {errorDetail ? (
                      <p className="mt-1.5 text-xs font-normal text-red-400">
                        Detail: {errorDetail}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Peta Lokasi"
          title="Temukan Kami"
          lead="Balai Besar Rehabilitasi BNN berlokasi di Cigombong, Kabupaten Bogor."
        />
        <Reveal delay={100} variant="scale" className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-ink-200 shadow-lift">
            <iframe
              title="Peta lokasi Balai Besar Rehabilitasi BNN"
              src="https://www.google.com/maps?q=Balai+Besar+Rehabilitasi+BNN+Cigombong&output=embed"
              className="block h-96 w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default Kontak