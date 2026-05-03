import { useEffect, useRef, useCallback } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const timeRef = useRef(0)
  const rafRef = useRef(0)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const w = canvas.width
    const h = canvas.height
    const time = timeRef.current
    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    // Dark base
    ctx.fillStyle = '#0A0A0A'
    ctx.fillRect(0, 0, w, h)

    // Create flowing metallic effect
    const imageData = ctx.createImageData(w, h)
    const data = imageData.data

    for (let y = 0; y < h; y += 2) {
      for (let x = 0; x < w; x += 2) {
        const nx = x / w
        const ny = y / h

        // Multiple layers of noise for liquid metal effect
        const n1 = Math.sin(nx * 3 + time * 0.3) * Math.cos(ny * 2.5 - time * 0.2)
        const n2 = Math.sin(nx * 7 - time * 0.5) * Math.cos(ny * 6 + time * 0.4) * 0.5
        const n3 = Math.sin((nx + ny) * 4 + time * 0.15) * 0.3

        // Mouse interaction - ripple effect
        const dx = nx - mx
        const dy = ny - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const ripple = Math.sin(dist * 15 - time * 2) * Math.exp(-dist * 4) * 0.3

        const combined = n1 + n2 + n3 + ripple

        // Metallic specular highlights
        const specular = Math.max(0, Math.sin(combined * Math.PI * 2 + time * 0.1))
        const highlight = Math.pow(specular, 4)

        // Warm silver color palette
        const r = Math.floor(10 + highlight * 180 + specular * 40)
        const g = Math.floor(10 + highlight * 170 + specular * 35)
        const b = Math.floor(10 + highlight * 160 + specular * 30)

        // Fill 2x2 block
        for (let dy2 = 0; dy2 < 2 && y + dy2 < h; dy2++) {
          for (let dx2 = 0; dx2 < 2 && x + dx2 < w; dx2++) {
            const idx = ((y + dy2) * w + (x + dx2)) * 4
            data[idx] = Math.min(255, r)
            data[idx + 1] = Math.min(255, g)
            data[idx + 2] = Math.min(255, b)
            data[idx + 3] = 255
          }
        }
      }
    }

    ctx.putImageData(imageData, 0, 0)

    timeRef.current += 0.008
    rafRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5)
      canvas.width = Math.floor(window.innerWidth * dpr / 2) * 2
      canvas.height = Math.floor(window.innerHeight * dpr / 2) * 2
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth
      mouseRef.current.y = e.clientY / window.innerHeight
    }
    window.addEventListener('mousemove', handleMouseMove)

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [draw])

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
      {/* Animated metallic canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at 30% 80%, rgba(10,10,10,0.7) 0%, transparent 60%), linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 40%)',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 px-6 lg:px-12 pb-[18vh] max-w-[720px]">
        <p className="font-inter text-[11px] uppercase tracking-[0.12em] text-iron-silver mb-5">
          EST. 2019 — LOS ANGELES, CA
        </p>

        <h1 className="font-oswald font-bold text-white uppercase leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}>
          <span className="block">TRAIN TO</span>
          <span className="block font-playfair italic normal-case tracking-normal">
            Redefine
          </span>
        </h1>

        <p className="font-inter text-base lg:text-lg text-iron-silver max-w-[420px] leading-relaxed mt-6">
          Push your limits. Transform your body. Join the elite.
        </p>

        <button
          onClick={() => scrollToSection('#membership')}
          className="inline-block mt-10 font-oswald font-medium text-[13px] uppercase tracking-[0.08em] text-iron-red hover:tracking-[0.12em] transition-all duration-300 bg-transparent border-none cursor-pointer"
        >
          START YOUR JOURNEY →
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <svg
          className="w-5 h-5 text-white/40 animate-bounce-down"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  )
}
