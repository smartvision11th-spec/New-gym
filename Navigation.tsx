import { useEffect, useState, useCallback } from 'react'

const navLinks = [
  { label: 'OUR GYM', href: '#philosophy' },
  { label: 'TRAINING', href: '#classes' },
  { label: 'CLASSES', href: '#trainers' },
  { label: 'MEMBERSHIP', href: '#membership' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.95)] backdrop-blur-[12px]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 py-5 lg:py-6">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-1.5"
        >
          <span className="font-oswald font-bold text-lg text-white tracking-[0.1em]">
            IRON
          </span>
          <span className="w-1 h-1 rounded-full bg-iron-red inline-block" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="font-oswald font-medium text-[13px] uppercase tracking-[0.06em] text-white/70 hover:text-iron-red transition-all duration-300 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#membership')}
            className="font-oswald font-medium text-xs uppercase tracking-[0.06em] text-white border border-white/30 px-6 py-2.5 hover:bg-iron-red hover:border-iron-red transition-all duration-300 bg-transparent cursor-pointer"
          >
            JOIN NOW
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-[rgba(10,10,10,0.98)]">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="font-oswald font-medium text-sm uppercase tracking-[0.06em] text-white/70 hover:text-iron-red transition-all duration-300 bg-transparent border-none cursor-pointer text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#membership')}
            className="font-oswald font-medium text-xs uppercase tracking-[0.06em] text-white border border-white/30 px-6 py-2.5 hover:bg-iron-red hover:border-iron-red transition-all duration-300 bg-transparent cursor-pointer w-fit mt-2"
          >
            JOIN NOW
          </button>
        </div>
      </div>
    </nav>
  )
}
