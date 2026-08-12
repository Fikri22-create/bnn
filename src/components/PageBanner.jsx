import { Link } from 'react-router-dom'
import { FiChevronRight, FiHome } from 'react-icons/fi'
import lambang from '../assets/icons/lambang.png'

function PageBanner({ title, subtitle, crumb, image, badge }) {
  return (
    <section className="relative overflow-hidden bg-primary-950 pt-36 pb-24 md:pt-44 md:pb-28">
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-kenburns object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/85 to-primary-900/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/30 to-primary-950/50" />

      <div
        aria-hidden="true"
        className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-accent-400/25"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-accent-400/15"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/3 top-10 h-24 w-24 animate-float-slow rounded-full bg-accent-400/10 blur-2xl"
      />
      <img
        src={lambang}
        alt=""
        aria-hidden="true"
        className="absolute -right-10 top-1/2 hidden h-72 w-72 -translate-y-1/2 opacity-[0.07] lg:block"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-primary-100/80 backdrop-blur"
        >
          <FiHome className="h-3.5 w-3.5 text-accent-400" />
          <Link to="/" className="transition-colors hover:text-accent-300">
            Beranda
          </Link>
          <FiChevronRight className="h-3.5 w-3.5 text-accent-400" />
          <span className="text-accent-300">{crumb}</span>
        </nav>
        <div className="flex animate-fade-up items-start gap-5" style={{ animationDelay: '120ms' }}>
          <span className="mt-1 hidden h-20 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-accent-400 to-accent-600 sm:block" />
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-[3.4rem] md:leading-[1.1]">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-100/85 md:text-base">
                {subtitle}
              </p>
            ) : null}
            {badge ? (
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-primary-950 shadow-glow-gold">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary-950" />
                {badge}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageBanner