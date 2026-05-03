import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const socialIcons = [
  {
    name: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'Twitter',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    name: 'TikTok',
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
]

export default function ContactFooter() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.footer-content',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: '.footer-content',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id="contact" ref={sectionRef}>
      {/* Contact Section */}
      <section className="bg-iron-light py-[80px] lg:py-[100px]">
        <div className="contact-content max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div className="lg:w-1/2">
              <p className="font-inter font-medium text-xs uppercase tracking-[0.12em] text-iron-red mb-6">
                GET IN TOUCH
              </p>
              <h2 className="font-oswald font-semibold text-3xl lg:text-4xl uppercase text-iron-black tracking-[-0.02em] leading-tight">
                Visit Iron{' '}
                <span className="font-playfair italic normal-case">Pulse</span>
              </h2>

              <div className="mt-8 space-y-4">
                <p className="font-inter text-[15px] text-iron-black/60">
                  1847 Iron Street, Los Angeles, CA 90014
                </p>
                <p className="font-inter text-[15px] text-iron-black/60">
                  (213) 555-0199
                </p>
                <p className="font-inter text-[15px] text-iron-red">
                  hello@ironpulse.fit
                </p>
                <p className="font-inter text-[15px] text-iron-black/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Open 24/7 for Elite & Pro members
                </p>
              </div>
            </div>

            {/* Right - Map placeholder */}
            <div className="lg:w-1/2 min-h-[240px] lg:min-h-0 bg-iron-black/5 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-iron-red/40 mx-auto mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="font-oswald text-sm uppercase text-iron-black/40 tracking-wide">
                  Downtown Los Angeles
                </p>
                <p className="font-inter text-xs text-iron-black/30 mt-1">
                  1847 Iron Street, CA 90014
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-iron-black py-12 lg:py-16 px-6 lg:px-12">
        <div className="footer-content max-w-[1200px] mx-auto">
          {/* Top row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-1.5">
              <span className="font-oswald font-bold text-2xl text-white tracking-[0.1em]">
                IRON
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-iron-red inline-block" />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-iron-red transition-colors duration-300 group"
                >
                  <svg
                    className="w-4 h-4 text-white group-hover:text-iron-red transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.08] mt-10 lg:mt-12" />

          {/* Bottom row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mt-8">
            <p className="font-inter text-xs text-iron-silver">
              © 2025 Iron Pulse Fitness. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {['Privacy', 'Terms', 'Careers'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-inter text-xs text-iron-silver hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
