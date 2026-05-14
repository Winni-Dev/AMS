
import React, { useEffect, useRef, useState } from 'react'

interface HeroProps {
  onGetStarted: () => void
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const [counts, setCounts] = useState({ speed: 0, security: 0, availability: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            
            const speedInterval = setInterval(() => {
              setCounts(prev => {
                const newSpeed = Math.min(prev.speed + 1, 30)
                if (newSpeed === 30) clearInterval(speedInterval)
                return { ...prev, speed: newSpeed }
              })
            }, 30)

            const securityInterval = setInterval(() => {
              setCounts(prev => {
                const newSecurity = Math.min(prev.security + 2, 100)
                if (newSecurity === 100) clearInterval(securityInterval)
                return { ...prev, security: newSecurity }
              })
            }, 20)

            const availabilityInterval = setInterval(() => {
              setCounts(prev => {
                const newAvailability = Math.min(prev.availability + 1, 24)
                if (newAvailability === 24) clearInterval(availabilityInterval)
                return { ...prev, availability: newAvailability }
              })
            }, 40)

            return () => {
              clearInterval(speedInterval)
              clearInterval(securityInterval)
              clearInterval(availabilityInterval)
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-4')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)
    if (buttonRef.current) observer.observe(buttonRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen px-4 pt-20 overflow-hidden sm:px-6 lg:px-8 bg-gradient-to-b from-white via-bgPage to-bgAlternate">
      
      {/* --- ARRIÈRE-PLAN ÉLÉGANT AVEC GRILLE VISIBLE --- */}
      
      {/* Grille principale - lignes horizontales et verticales */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #2563EB 1px, transparent 1px),
              linear-gradient(to bottom, #2563EB 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Grille secondaire - plus fine, décalée */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #EF4444 1px, transparent 1px),
              linear-gradient(to bottom, #22C55E 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '10px 10px'
          }}
        />
      </div>

      {/* Points aux intersections principales */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 60px 60px, #2563EB 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Grands cercles flous pour la profondeur */}
      <div className="absolute top-0 -right-64 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-red-50/30 via-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 -left-64 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-green-50/30 via-primary/5 to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />

      {/* Lignes d'accent diagonales */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0%" y1="0%" x2="100%" y2="100%" stroke="#2563EB" strokeWidth="0.5" />
          <line x1="100%" y1="0%" x2="0%" y2="100%" stroke="#EF4444" strokeWidth="0.3" />
          <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#22C55E" strokeWidth="0.2" />
          <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#2563EB" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Bordures décoratives */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      <div className="absolute top-8 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute bottom-8 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      {/* Petits accents lumineux colorés */}
      <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-red-400/40 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 bg-primary/40 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-green-400/40 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] right-[15%] w-1.5 h-1.5 bg-red-400/35 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-primary/35 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[40%] right-[10%] w-1.5 h-1.5 bg-green-400/35 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '2.5s' }} />

      {/* --- CONTENU --- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Badge */}
        <div 
          ref={titleRef}
          className="inline-flex items-center px-3 py-1.5 mb-6 transition-all duration-500 translate-y-4 border rounded-full opacity-0 bg-white/90 backdrop-blur-sm border-primary/20 shadow-sm"
        >
          <span className="relative flex w-2 h-2 mr-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-primary animate-pulse"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-primary"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-primary">Africa Connect Plus</span>
        </div>

        {/* Titre */}
        <h1 
          ref={titleRef}
          className="mb-4 text-3xl font-bold transition-all duration-500 delay-75 translate-y-4 opacity-0 sm:text-4xl md:text-5xl lg:text-6xl text-textPrimary"
        >
          Vos démarches
          <br />
          <span className="text-primary">
            administratives simplifiées
          </span>
        </h1>

        {/* Sous-titre */}
        <p 
          ref={subtitleRef}
          className="max-w-xl mx-auto mb-8 text-sm transition-all duration-500 delay-150 translate-y-4 opacity-0 sm:text-base text-textSecondary"
        >
          Obtenez vos documents officiels en quelques clics. 
          Rapide, sécurisé et accessible depuis la Côte d'Ivoire et la diaspora.
        </p>

        {/* Bouton CTA */}
        <div 
          ref={buttonRef}
          className="transition-all duration-500 delay-200 translate-y-4 opacity-0"
        >
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-xl bg-primary hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
          >
            Démarrer une demande
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className="grid max-w-2xl grid-cols-3 gap-4 mx-auto mt-12 transition-all duration-500 delay-300 translate-y-4 opacity-0"
        >
          <div className="text-center">
            <div className="mb-1 text-2xl font-bold text-primary sm:text-3xl">
              -{counts.speed}s
            </div>
            <div className="text-xs text-textMuted sm:text-sm">pour une demande</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-2xl font-bold text-primary sm:text-3xl">
              {counts.security}%
            </div>
            <div className="text-xs text-textMuted sm:text-sm">sécurisé</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-2xl font-bold text-primary sm:text-3xl">
              {counts.availability}/7
            </div>
            <div className="text-xs text-textMuted sm:text-sm">disponible</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute z-10 -translate-x-1/2 bottom-8 left-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-textMuted/50 uppercase tracking-wider">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}