import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote:
      "I've trained at gyms all over the world. Iron Pulse is different — the atmosphere, the equipment, the coaches. Everything pushes you to be better.",
    name: 'Alex Torres',
    role: 'CrossFit Athlete',
    tall: false,
  },
  {
    quote:
      'Down 40 pounds in 6 months. Gained muscle I never thought I could. The trainers here actually care about your progress.',
    name: 'Morgan Blake',
    role: 'Member since 2022',
    tall: true,
  },
  {
    quote:
      'The 24/7 access changed everything for my schedule. I can train when it works for me, and the facility is always immaculate.',
    name: 'Jordan Ellis',
    role: 'Night Shift Nurse',
    tall: false,
  },
  {
    quote:
      'From barely being able to do a push-up to deadlifting twice my bodyweight. Iron Pulse gave me the tools and the confidence.',
    name: 'Casey Nguyen',
    role: 'Software Engineer',
    tall: true,
  },
  {
    quote:
      'The recovery classes alone are worth the membership. My back pain is gone and my flexibility has never been better.',
    name: 'Riley Park',
    role: 'Marathon Runner',
    tall: false,
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-header',
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
        '.testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: '.testimonials-grid',
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
      id="testimonials"
      ref={sectionRef}
      className="bg-iron-light py-[100px] lg:py-[140px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="testimonials-header">
          <p className="font-inter font-medium text-xs uppercase tracking-[0.12em] text-iron-red mb-6">
            MEMBER STORIES
          </p>
          <h2 className="font-oswald font-semibold text-4xl lg:text-5xl uppercase text-iron-black tracking-[-0.02em] leading-tight">
            Real{' '}
            <span className="font-playfair italic normal-case">Results</span>
          </h2>
          <p className="font-inter text-[15px] text-iron-black/60 max-w-[480px] mt-4 leading-relaxed">
            Hear from the Iron Pulse community — everyday people achieving
            extraordinary things.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`testimonial-card bg-white border border-black/[0.06] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] ${
                t.tall ? 'lg:row-span-2' : ''
              }`}
            >
              <p className="font-inter text-base text-iron-black leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-iron-black flex items-center justify-center font-oswald font-semibold text-sm text-white uppercase">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-oswald font-semibold text-sm uppercase text-iron-black">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs text-iron-black/50">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
