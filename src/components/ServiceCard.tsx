
import React from 'react'

interface ServiceCardProps {
  name: string
  description: string
  category?: string
  icon: React.ReactNode
  onRequest: () => void
  index: number
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  name, 
  description, 
  category,
  icon, 
  onRequest, 
  index 
}) => {
  return (
    <div 
      className="relative translate-y-8 opacity-0 group"
      style={{ 
        animation: `slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s forwards`
      }}
    >
      {/* Bordure gradient animée */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-accentPurple/20 to-accentCyan/30 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm" />
      
      {/* Contenu principal */}
      <div className="relative h-full p-6 overflow-hidden transition-all duration-500 border bg-gradient-to-br from-darkCard/90 via-darkCard/80 to-darkSurface/90 backdrop-blur-xl rounded-2xl border-darkBorder/50 hover:border-primary/20">
        
        {/* Effet de brillance au hover */}
        <div className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent group-hover:translate-x-full" />
        </div>

        {/* Fond décoratif */}
        <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 transition-transform duration-700 rounded-full bg-gradient-to-br from-primary/5 to-accentPurple/5 blur-2xl group-hover:scale-150" />
        <div className="absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 transition-transform duration-700 rounded-full bg-gradient-to-tr from-accentCyan/5 to-transparent blur-2xl group-hover:scale-150" />

        {/* Contenu */}
        <div className="relative z-10">
          {/* En-tête avec icône et badge */}
          <div className="flex items-start justify-between mb-4">
            {/* Icône avec conteneur animé */}
            <div className="relative">
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-primary to-accentPurple rounded-xl blur-lg group-hover:opacity-40" />
              <div className="relative flex items-center justify-center transition-all duration-500 border w-14 h-14 bg-gradient-to-br from-darkSurface to-darkCard rounded-xl border-darkBorder group-hover:border-primary/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                <div className="transition-transform duration-500 transform group-hover:scale-110">
                  {icon}
                </div>
              </div>
            </div>

            {/* Badge de catégorie */}
            {category && (
              <span className="px-3 py-1.5 bg-primary/5 backdrop-blur-sm rounded-lg text-[10px] font-medium uppercase tracking-wider text-primary/80 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                {category}
              </span>
            )}
          </div>

          {/* Titre */}
          <h3 className="mb-2 text-xl font-semibold">
            <span className="text-transparent transition-all duration-500 bg-gradient-to-r from-textPrimary to-textPrimary/90 bg-clip-text group-hover:from-primary group-hover:to-accentPurple">
              {name}
            </span>
          </h3>

          {/* Description */}
          <p className="mb-8 text-sm leading-relaxed transition-colors duration-300 text-textSecondary/80 group-hover:text-textSecondary">
            {description}
          </p>

          {/* Bouton d'action */}
          <button
            onClick={onRequest}
            className="relative w-full group/btn"
          >
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-primary to-accentPurple rounded-xl blur-md group-hover/btn:opacity-30" />
            <div className="relative w-full py-3.5 px-4 bg-darkSurface/50 backdrop-blur-sm border border-darkBorder rounded-xl overflow-hidden transition-all duration-500 group-hover/btn:border-primary/30 group-hover/btn:bg-gradient-to-r group-hover/btn:from-primary/10 group-hover/btn:to-accentPurple/10">
              <span className="relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-300 text-textSecondary group-hover/btn:text-primary">
                Demander ce service
                <svg 
                  className="w-4 h-4 ml-2 transition-all duration-300 transform group-hover/btn:translate-x-1 group-hover/btn:text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}