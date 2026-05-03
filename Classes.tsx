import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const classes = [
  {
    image: '/class-strength.jpg',
    title: 'Power Lifting',
    description:
      'Build raw strength and explosive power through progressive overload training with our elite coaching team.',
  },
  {
    image: '/class-hiit.jpg',
    title: 'HIIT Burn',
    description:
      'High-intensity interval training designed to torch calories, boost metabolism, and push your cardiovascular limits.',
  },
  {
    image: '/class-yoga.jpg',
    title: 'Recovery Flow',
    description:
      'Mobility-focused sessions blending yoga and dynamic stretching to prevent injury and accelerate recovery.',
  },
]

export default function Classes() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.classes-header',
        { y: 30, opacity: 0 },
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
        '.class-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: '.classes-grid',
            start: 'top 72%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="bg-iron-light py-[100px] lg:py-[140px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="classes-header">
          <p className="font-inter font-medium text-xs uppercase tracking-[0.12em] text-iron-red mb-6">
            FEATURED CLASSES
          </p>
          <h2 className="font-oswald font-semibold text-4xl lg:text-5xl uppercase text-iron-black tracking-[-0.02em] leading-tight">
            <span className="font-playfair italic normal-case">Engineered</span>{' '}
            for Results
          </h2>
          <p className="font-inter text-[15px] text-iron-black/60 max-w-[480px] mt-4 leading-relaxed">
            Programs designed by sports scientists and elite coaches to maximize
            every minute you spend in the gym.
          </p>
        </div>

        {/* Card Grid */}
        <div className="classes-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {classes.map((cls) => (
            <div
              key={cls.title}
              className="class-card bg-white border border-black/[0.06] overflow-hidden group cursor-pointer transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="font-oswald font-semibold text-xl uppercase text-iron-black">
                  {cls.title}
                </h3>
                <p className="font-inter text-sm text-iron-black/60 leading-relaxed mt-3">
                  {cls.description}
                </p>
                <span className="inline-block font-oswald font-medium text-xs uppercase tracking-[0.06em] text-iron-red mt-5 hover:opacity-70 transition-opacity">
                  LEARN MORE →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
