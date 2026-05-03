import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const trainers = [
  {
    image: '/trainer-marcus.jpg',
    name: 'Marcus Steele',
    specialty: 'Strength & Conditioning',
  },
  {
    image: '/trainer-elena.jpg',
    name: 'Elena Voss',
    specialty: 'HIIT & Functional',
  },
  {
    image: '/trainer-james.jpg',
    name: 'James Chen',
    specialty: 'Powerlifting Coach',
  },
  {
    image: '/trainer-sophia.jpg',
    name: 'Sophia Reyes',
    specialty: 'Mobility & Recovery',
  },
  {
    image: '/trainer-david.jpg',
    name: 'David Okafor',
    specialty: 'Nutrition & Performance',
  },
]

export default function Trainers() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.trainers-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.trainers-carousel',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: '.trainers-carousel',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="trainers"
      ref={sectionRef}
      className="bg-iron-black py-[100px] lg:py-[140px]"
    >
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="trainers-header">
          <p className="font-inter font-medium text-xs uppercase tracking-[0.12em] text-iron-red mb-6">
            MEET THE TEAM
          </p>
          <h2 className="font-oswald font-semibold text-4xl lg:text-5xl uppercase text-white tracking-[-0.02em] leading-tight">
            Elite{' '}
            <span className="font-playfair italic normal-case">Coaches</span>
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="trainers-carousel mt-16 overflow-x-auto hide-scrollbar scroll-snap-x mandatory">
        <div className="flex gap-5 px-6 lg:px-12 pb-4">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="flex-shrink-0 w-[280px] lg:w-[320px] aspect-[3/4] relative overflow-hidden group cursor-pointer scroll-snap-align-start"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-oswald font-semibold text-2xl uppercase text-white">
                  {trainer.name}
                </h3>
                <p className="font-inter text-xs uppercase text-iron-silver tracking-[0.08em] mt-1">
                  {trainer.specialty}
                </p>
                <span className="inline-block font-oswald font-medium text-[11px] uppercase text-iron-red mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VIEW PROFILE →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
