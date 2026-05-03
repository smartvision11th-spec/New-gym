import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      // Fade up animations
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Stagger children animations
      gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((container) => {
        const children = container.children
        gsap.fromTo(children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
            scrollTrigger: {
              trigger: container,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Slide from right
      gsap.utils.toArray<HTMLElement>('[data-animate="slide-right"]').forEach((el) => {
        gsap.fromTo(el,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
            scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Scale in
      gsap.utils.toArray<HTMLElement>('[data-animate="scale-in"]').forEach((el) => {
        gsap.fromTo(el,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
            scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Slide from left
      gsap.utils.toArray<HTMLElement>('[data-animate="slide-left"]').forEach((el) => {
        gsap.fromTo(el,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
            scrollTrigger: {
              trigger: el,
              start: 'top 60%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}
