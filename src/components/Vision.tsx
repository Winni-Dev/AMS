

import React, { useEffect, useRef, useState } from 'react'

export const Vision: React.FC = () => {
  const [counts, setCounts] = useState({ users: 0, availability: 0, satisfaction: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            
            const usersInterval = setInterval(() => {
              setCounts(prev => {
                const increment = Math.max(1, Math.floor((12500 - prev.users) / 30))
                const newUsers = Math.min(prev.users + increment, 12500)
                if (newUsers === 12500) clearInterval(usersInterval)
                return { ...prev, users: newUsers }
              })
            }, 40)

            const availabilityInterval = setInterval(() => {
              setCounts(prev => {
                const newAvailability = Math.min(prev.availability + 1, 7)
                if (newAvailability === 7) clearInterval(availabilityInterval)
                return { ...prev, availability: newAvailability }
              })
            }, 80)

            const satisfactionInterval = setInterval(() => {
              setCounts(prev => {
                const newSatisfaction = Math.min(prev.satisfaction + 2, 98)
                if (newSatisfaction === 98) clearInterval(satisfactionInterval)
                return { ...prev, satisfaction: newSatisfaction }
              })
            }, 30)

            return () => {
              clearInterval(usersInterval)
              clearInterval(availabilityInterval)
              clearInterval(satisfactionInterval)
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
            const elements = entry.target.querySelectorAll('.vision-animate')
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0')
                el.classList.remove('opacity-0', 'translate-y-3')
              }, index * 60)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  return (
    <section id="vision" ref={sectionRef} className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8 bg-bgSurface">
      {/* Touches décoratives subtiles rouge et vert */}
      <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 rounded-full bg-red-100/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 rounded-full w-80 h-80 bg-green-100/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-red-50/30 via-transparent to-green-50/30 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="transition-all duration-500 translate-y-3 opacity-0 vision-animate">
          <div className="inline-flex items-center px-3 py-1 mb-5 border rounded-full bg-gradient-to-r from-red-50 to-green-50 border-red-100/30">
            <span className="relative flex h-1.5 w-1.5 mr-1.5">
              <span className="absolute inline-flex w-full h-full bg-red-500 rounded-full opacity-75"></span>
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-red-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-transparent bg-gradient-to-r from-red-500 to-green-600 bg-clip-text">Notre Vision</span>
            <span className="relative flex h-1.5 w-1.5 ml-1.5">
              <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75"></span>
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-500"></span>
            </span>
          </div>
        </div>

        {/* Titre avec touches rouge et vert */}
        <h2 className="mb-3 text-2xl font-bold transition-all duration-500 translate-y-3 opacity-0 vision-animate sm:text-3xl text-textPrimary">
          Africa Connect{' '}
          <span className="relative">
            <span className="text-transparent bg-gradient-to-r from-red-500 via-primary to-green-600 bg-clip-text">Plus</span>
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400 via-primary to-green-500 rounded-full"></span>
          </span>
        </h2>

        {/* Sous-titre */}
        <p className="mb-8 text-sm transition-all duration-500 translate-y-3 opacity-0 vision-animate text-textSecondary">
          Bien plus qu'un simple service administratif
        </p>

        {/* Statistiques */}
        <div ref={statsRef} className="grid max-w-2xl grid-cols-3 gap-4 mx-auto mb-10">
          <div className="text-center transition-all duration-500 translate-y-3 opacity-0 vision-animate">
            <div className="mb-1 text-2xl font-bold text-transparent sm:text-3xl bg-gradient-to-r from-primary to-red-500 bg-clip-text">
              {counts.users >= 1000 ? formatNumber(counts.users) : counts.users}+
            </div>
            <div className="text-[10px] uppercase tracking-wider text-textMuted sm:text-xs">
              Utilisateurs
            </div>
          </div>
          <div className="text-center transition-all duration-500 delay-75 translate-y-3 opacity-0 vision-animate">
            <div className="mb-1 text-2xl font-bold text-transparent sm:text-3xl bg-gradient-to-r from-red-500 to-green-600 bg-clip-text">
              {counts.availability}/7
            </div>
            <div className="text-[10px] uppercase tracking-wider text-textMuted sm:text-xs">
              Jours par semaine
            </div>
          </div>
          <div className="text-center transition-all duration-500 delay-150 translate-y-3 opacity-0 vision-animate">
            <div className="mb-1 text-2xl font-bold text-transparent sm:text-3xl bg-gradient-to-r from-green-600 to-primary bg-clip-text">
              {counts.satisfaction}%
            </div>
            <div className="text-[10px] uppercase tracking-wider text-textMuted sm:text-xs">
              Satisfaction
            </div>
          </div>
        </div>

        {/* Grille des bénéfices */}
        <div className="grid gap-3 mb-10 sm:grid-cols-3 sm:gap-4">
          {/* Bénéfice 1 - Touche rouge */}
          <div className="p-5 transition-all duration-500 translate-y-3 border border-red-100 opacity-0 vision-animate bg-bgSurface rounded-2xl shadow-card hover:shadow-card-hover group">
            <div className="flex justify-center mb-3">
              <div className="flex items-center justify-center w-10 h-10 text-red-500 transition-all duration-300 rounded-lg bg-red-50 group-hover:bg-red-500 group-hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-1.5 text-sm font-semibold text-center text-textPrimary group-hover:text-red-500 transition-colors">
              Réseau structuré
            </h3>
            <p className="text-xs leading-relaxed text-center text-textSecondary">
              Une infrastructure solide pour connecter la diaspora.
            </p>
          </div>

          {/* Bénéfice 2 - Touche bleu */}
          <div className="p-5 transition-all duration-500 delay-75 translate-y-3 border opacity-0 vision-animate bg-bgSurface border-primary/20 rounded-2xl shadow-card hover:shadow-card-hover group">
            <div className="flex justify-center mb-3">
              <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-1.5 text-sm font-semibold text-center text-textPrimary group-hover:text-primary transition-colors">
              Services fiables
            </h3>
            <p className="text-xs leading-relaxed text-center text-textSecondary">
              Des partenaires certifiés pour garantir la qualité.
            </p>
          </div>

          {/* Bénéfice 3 - Touche verte */}
          <div className="p-5 transition-all duration-500 delay-150 translate-y-3 border border-green-100 opacity-0 vision-animate bg-bgSurface rounded-2xl shadow-card hover:shadow-card-hover group">
            <div className="flex justify-center mb-3">
              <div className="flex items-center justify-center w-10 h-10 text-green-600 transition-all duration-300 rounded-lg bg-green-50 group-hover:bg-green-600 group-hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-1.5 text-sm font-semibold text-center text-textPrimary group-hover:text-green-600 transition-colors">
              Innovation continue
            </h3>
            <p className="text-xs leading-relaxed text-center text-textSecondary">
              Une plateforme en constante évolution.
            </p>
          </div>
        </div>

        {/* Message de vision */}
        <div className="relative transition-all duration-500 delay-200 translate-y-3 opacity-0 vision-animate">
          <div className="relative px-6 py-6 border bg-gradient-to-r from-red-50/50 via-primary/5 to-green-50/50 border-red-100/30 rounded-2xl shadow-card">
            {/* <div className="flex justify-center mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full shadow-sm bg-gradient-to-r from-red-500 to-green-600">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div> */}
            
            <p className="max-w-2xl mx-auto text-sm leading-relaxed text-center text-textSecondary">
              Notre ambition est de devenir la référence des services administratifs pour la diaspora africaine,
              en créant un{' '}
              <span className="font-semibold text-transparent bg-gradient-to-r from-red-500 via-primary to-green-600 bg-clip-text">pont digital</span>
              {' '}entre l'Afrique et le monde.
            </p>
            
            {/* Petite barre décorative */}
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}