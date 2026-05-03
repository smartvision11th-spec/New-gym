import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '12K+', label: 'Members Strong' },
  { number: '50+', label: 'Expert Trainers' },
  { number: '24/7', label: 'Open Access' },
]

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.philosophy-left',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.philosophy-right',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.philosophy-stat',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: '.philosophy-stats',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="bg-iron-black py-[100px] lg:py-[140px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12">
          {/* Left Column - Text */}
          <div className="philosophy-left lg:w-[55%]">
            <p className="font-inter font-medium text-xs uppercase tracking-[0.12em] text-iron-red mb-6">
              OUR PHILOSOPHY
            </p>

            <h2 className="font-oswald font-semibold text-4xl lg:text-5xl uppercase text-white tracking-[-0.02em] leading-tight">
              Strength Is a{' '}
              <span className="font-playfair italic normal-case">Mindset</span>
            </h2>

            <p className="font-inter text-[15px] text-iron-silver leading-[1.7] max-w-[480px] mt-6">
              At Iron Pulse, we believe that physical transformation starts with
              mental discipline. Our facility is designed for those who refuse to
              settle — athletes, warriors, and everyday people ready to become
              extraordinary. Every rep, every set, every drop of sweat brings you
              closer to the strongest version of yourself.
            </p>

            <div className="philosophy-stats flex flex-wrap gap-10 lg:gap-12 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="philosophy-stat">
                  <p className="font-oswald font-bold text-4xl text-white">
                    {stat.number}
                  </p>
                  <p className="font-inter text-xs uppercase text-iron-silver mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="philosophy-right lg:w-[45%] lg:mt-6">
            <img
              src="/philosophy-athlete.jpg"
              alt="Athlete at Iron Pulse"
              className="w-full h-auto object-cover rounded-sm"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
