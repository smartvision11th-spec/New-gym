import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: '/facility-floor.jpg', alt: 'Main Training Floor' },
  { src: '/facility-rack.jpg', alt: 'Power Rack' },
  { src: '/facility-cardio.jpg', alt: 'Cardio Zone' },
  { src: '/facility-pool.jpg', alt: 'Indoor Pool' },
  { src: '/facility-locker.jpg', alt: 'Locker Room' },
  { src: '/facility-boxing.jpg', alt: 'Boxing Studio' },
]

export default function Facility() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.facility-header',
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
        '.facility-img',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: '.facility-grid',
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
      id="facility"
      ref={sectionRef}
      className="bg-iron-black py-[100px] lg:py-[140px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="facility-header text-center">
          <p className="font-inter font-medium text-xs uppercase tracking-[0.12em] text-iron-red mb-6">
            INSIDE IRON PULSE
          </p>
          <h2 className="font-oswald font-semibold text-4xl lg:text-5xl uppercase text-white tracking-[-0.02em] leading-tight">
            A Gym{' '}
            <span className="font-playfair italic normal-case">
              Built Different
            </span>
          </h2>
          <p className="font-inter text-[15px] text-iron-silver max-w-[520px] mx-auto mt-4 leading-relaxed">
            45,000 sq ft of premium equipment, dedicated zones, and luxury
            amenities designed for serious training.
          </p>
        </div>

        {/* Image Grid */}
        <div className="facility-grid grid grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {images.map((img) => (
            <div
              key={img.alt}
              className="facility-img overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
