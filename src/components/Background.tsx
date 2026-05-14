

import React from 'react'

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Fond principal avec dégradé doux */}
      <div className="absolute inset-0 bg-gradient-to-b from-bgSurface via-bgPage to-bgAlternate" />
      
      {/* Formes floues très légères */}
      <div className="absolute top-0 rounded-full -left-48 w-96 h-96 bg-primary/5 blur-3xl animate-float opacity-20" />
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl animate-float opacity-15" 
           style={{ animationDelay: '-3s' }} />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl animate-float opacity-15"
           style={{ animationDelay: '-6s' }} />
      
      {/* Grille très subtile */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px),
                            linear-gradient(90deg, #2563EB 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  )
}