

import React, { useEffect, useRef } from 'react'

interface ServicesProps {
  onServiceRequest: (service: string) => void
}

const services = [
  {
    id: 'extrait',
    name: 'Extrait de naissance',
    description: 'Obtenez votre extrait de naissance rapidement et en toute légalité.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 'casier',
    name: 'Casier judiciaire',
    description: 'Demande de bulletin n°3 du casier judiciaire ivoirien.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'nationalite',
    name: 'Certificat de nationalité',
    description: 'Prouvez votre nationalité ivoirienne avec un certificat officiel.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
]

export const Services: React.FC<ServicesProps> = ({ onServiceRequest }) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.service-animate')
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0')
                el.classList.remove('opacity-0', 'translate-y-3')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" ref={sectionRef} className="px-4 py-20 sm:px-6 lg:px-8 bg-bgAlternate">
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <div className="mb-12 text-center">
          <div className="transition-all duration-500 translate-y-3 opacity-0 service-animate">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/5">
              <span className="relative flex h-1.5 w-1.5 mr-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-primary"></span>
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-primary"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-primary">Nos services</span>
            </div>
          </div>
          
          <h2 className="mb-2 text-2xl font-bold transition-all duration-500 translate-y-3 opacity-0 service-animate sm:text-3xl lg:text-4xl text-textPrimary">
            Des solutions{' '}
            <span className="text-primary">simples et rapides</span>
          </h2>
          
          <p className="max-w-md mx-auto text-sm transition-all duration-500 translate-y-3 opacity-0 service-animate text-textSecondary">
            Sélectionnez le service souhaité et faites votre demande en moins de 30 secondes.
          </p>
        </div>

        {/* Grille de services - 3 cartes */}
        <div className="grid max-w-4xl grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="translate-y-3 opacity-0 service-animate"
              style={{ 
                animation: `slideUp 0.5s ease-out ${index * 0.1}s forwards`
              }}
            >
              <div className="group relative h-full bg-bgSurface border border-borderLight rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300">
                {/* Icône */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                
                {/* Titre */}
                <h3 className="mb-2 text-lg font-semibold text-textPrimary">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-textSecondary">
                  {service.description}
                </p>
                
                {/* Bouton */}
                <button
                  onClick={() => onServiceRequest(service.name)}
                  className="w-full py-2.5 text-sm font-medium text-primary border border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <span className="flex items-center justify-center gap-2">
                    Demander ce service
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Autre service" */}
        <div className="mt-10 text-center transition-all duration-500 delay-300 translate-y-3 opacity-0 service-animate">
          <p className="mb-4 text-sm text-textSecondary">
            Vous ne trouvez pas le service que vous cherchez ?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200 border text-textPrimary bg-bgSurface border-borderLight rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/30 hover:text-primary"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Autre service
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <p className="mt-3 text-xs text-textMuted">
            Contactez-nous pour toute demande spécifique
          </p>
        </div>
      </div>
    </section>
  )
}