import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTABanner() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToMembership = () => {
    const el = document.querySelector('#membership')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/cta-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.5) 60%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="cta-content relative z-10 px-6 lg:px-12 py-20 max-w-[560px]">
        <p className="font-inter font-medium text-xs uppercase tracking-[0.12em] text-iron-red mb-6">
          YOUR TRANSFORMATION STARTS NOW
        </p>
        <h2
          className="font-oswald font-bold uppercase text-white tracking-[-0.02em] leading-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          <span className="font-playfair italic normal-case">Unleash</span> Your
          Potential
        </h2>
        <p className="font-inter text-base text-white/70 leading-relaxed mt-5">
          Join Iron Pulse today and get your first week free. No contracts. No
          excuses. Just results.
        </p>
        <button
          onClick={scrollToMembership}
          className="mt-8 bg-iron-red text-white font-oswald font-semibold text-[13px] uppercase tracking-[0.06em] px-10 py-3.5 hover:bg-iron-redHover hover:scale-[1.02] transition-all duration-300 border-none cursor-pointer"
        >
          CLAIM FREE WEEK
        </button>
      </div>
    </section>
  )
}
