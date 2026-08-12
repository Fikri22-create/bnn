import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'
import lambang from '../assets/icons/lambang.png'

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/profil', label: 'Profile' },
  { to: '/fasilitas', label: 'Fasilitas' },
  { to: '/tupoksi', label: 'Tupoksi' },
  { to: '/kontak', label: 'Kontak' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open || pathname !== '/'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-ink-100 bg-white/95 shadow-soft backdrop-blur'
          : 'bg-gradient-to-b from-primary-950/70 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative">
            <img
              src={lambang}
              alt="Lambang BNN"
              className="h-11 w-11 rounded-full bg-white p-0.5 shadow-soft transition-transform duration-300 group-hover:scale-105"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-accent-400"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`text-sm font-extrabold tracking-tight sm:text-base ${
                solid ? 'text-primary-800' : 'text-white'
              }`}
            >
              Balai Besar Rehabilitasi BNN
            </span>
            <span
              className={`text-[11px] font-medium tracking-wide ${
                solid ? 'text-ink-400' : 'text-primary-100/80'
              }`}
            >
              Lido - Cigombong, Bogor
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `group relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? solid
                      ? 'bg-primary-50 text-primary-700'
                      : 'bg-white/10 text-accent-300'
                    : solid
                      ? 'text-ink-600 hover:bg-ink-50 hover:text-primary-700'
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-400 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          className={`rounded-lg p-2 transition-colors lg:hidden ${
            solid ? 'text-ink-700' : 'text-white'
          }`}
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white px-4 pb-6 pt-2 shadow-lift lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 50}ms` }}
                className={({ isActive }) =>
                  `flex animate-fade-up items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-accent-400"
                      />
                    ) : null}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar