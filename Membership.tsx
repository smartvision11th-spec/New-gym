import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    name: 'ESSENTIAL',
    price: '$49',
    featured: false,
    features: [
      'Full gym access (6am-10pm)',
      'Group classes',
      'Locker room access',
      'Mobile app tracking',
    ],
  },
  {
    name: 'ELITE',
    price: '$89',
    featured: true,
    features: [
      '24/7 facility access',
      'All group classes',
      '2 PT sessions/month',
      'Recovery suite access',
      'Priority class booking',
      'Guest passes (2/mo)',
    ],
  },
  {
    name: 'PRO',
    price: '$149',
    featured: false,
    features: [
      'Everything in Elite',
      'Unlimited PT sessions',
      'Personal locker',
      'Nutrition coaching',
      'Body composition scans',
      'Premium supplements discount',
    ],
  },
]

export default function Membership() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.membership-header',
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
        '.pricing-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: '.pricing-grid',
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
      id="membership"
      ref={sectionRef}
      className="bg-iron-black py-[100px] lg:py-[140px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="membership-header text-center">
          <p className="font-inter font-medium text-xs uppercase tracking-[0.12em] text-iron-red mb-6">
            MEMBERSHIP
          </p>
          <h2 className="font-oswald font-semibold text-4xl lg:text-5xl uppercase text-white tracking-[-0.02em] leading-tight">
            Invest in{' '}
            <span className="font-playfair italic normal-case">Yourself</span>
          </h2>
          <p className="font-inter text-[15px] text-iron-silver max-w-[480px] mx-auto mt-4 leading-relaxed">
            Flexible plans for every commitment level. All memberships include
            full facility access.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card relative bg-iron-dark border p-10 lg:p-12 text-center transition-all duration-300 ${
                tier.featured
                  ? 'border-iron-red shadow-[0_0_30px_rgba(255,45,45,0.1)]'
                  : 'border-white/[0.06]'
              }`}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-iron-red text-white font-oswald font-semibold text-[10px] uppercase tracking-wide px-3 py-1">
                  MOST POPULAR
                </div>
              )}

              <p className="font-oswald font-semibold text-sm uppercase text-iron-silver tracking-[0.1em]">
                {tier.name}
              </p>

              <div className="mt-4">
                <span className="font-oswald font-bold text-5xl text-white">
                  {tier.price}
                </span>
                <span className="font-inter text-base text-iron-silver ml-1">
                  /mo
                </span>
              </div>

              <div className="w-full h-px bg-white/10 my-8" />

              <ul className="space-y-0">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-left py-2"
                  >
                    <span className="text-iron-red text-sm mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-inter text-sm text-iron-silver leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 font-oswald font-semibold text-xs uppercase tracking-[0.06em] py-3.5 transition-all duration-300 cursor-pointer border ${
                  tier.featured
                    ? 'bg-iron-red text-white border-iron-red hover:bg-iron-redHover'
                    : 'bg-transparent text-white border-white/20 hover:bg-iron-red hover:border-iron-red'
                }`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
