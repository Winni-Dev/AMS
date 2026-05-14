
import React, { useState, useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  service: string
}

const WHATSAPP_NUMBER = '2250700000000'

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setFormData({ nom: '', prenom: '', telephone: '', email: '', message: '' })
      setErrors({})
      setIsSubmitting(false)
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.nom.trim()) newErrors.nom = 'Nom requis'
    else if (formData.nom.trim().length < 2) newErrors.nom = 'Nom trop court'
    
    if (!formData.prenom.trim()) newErrors.prenom = 'Prénom requis'
    else if (formData.prenom.trim().length < 2) newErrors.prenom = 'Prénom trop court'
    
    if (!formData.telephone.trim()) newErrors.telephone = 'Téléphone requis'
    else if (!/^[\d\s+]{8,}$/.test(formData.telephone.replace(/\s/g, ''))) newErrors.telephone = 'Numéro invalide'
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    const message = `🆕 *NOUVELLE DEMANDE DE SERVICE*

📋 *Service demandé :*
${service}

👤 *Informations client :*
• Nom : ${formData.nom}
• Prénom : ${formData.prenom}
• Téléphone : ${formData.telephone}
${formData.email ? `• Email : ${formData.email}` : ''}
${formData.message ? `\n💬 *Message du client :*\n${formData.message}` : ''}

---
_Message envoyé via Africa Connect Plus_`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
      onClose()
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md duration-200 bg-bgSurface rounded-2xl shadow-modal animate-in zoom-in-95 fade-in">
        <div className="p-5">
          {/* En-tête */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-base font-medium text-textPrimary">Demande de service</h3>
            </div>
            <button onClick={onClose} className="p-1.5 text-textMuted hover:text-textPrimary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Service sélectionné */}
          <div className="p-3 mb-4 border bg-primary/5 border-primary/10 rounded-xl">
            <p className="text-[10px] uppercase tracking-wider text-textMuted mb-0.5">Service sélectionné</p>
            <p className="text-sm font-medium text-textPrimary">{service}</p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Prénom"
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  onFocus={() => setFocusedField('prenom')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary placeholder-textMuted transition-all duration-200 ${
                    errors.prenom ? 'border-red-400' : focusedField === 'prenom' ? 'border-primary ring-2 ring-primary/10' : 'border-borderLight'
                  }`}
                />
                {errors.prenom && <p className="mt-0.5 text-[10px] text-red-500">{errors.prenom}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  onFocus={() => setFocusedField('nom')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary placeholder-textMuted transition-all duration-200 ${
                    errors.nom ? 'border-red-400' : focusedField === 'nom' ? 'border-primary ring-2 ring-primary/10' : 'border-borderLight'
                  }`}
                />
                {errors.nom && <p className="mt-0.5 text-[10px] text-red-500">{errors.nom}</p>}
              </div>
            </div>

            <div>
              <input
                type="tel"
                placeholder="Téléphone"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                onFocus={() => setFocusedField('telephone')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary placeholder-textMuted transition-all duration-200 ${
                  errors.telephone ? 'border-red-400' : focusedField === 'telephone' ? 'border-primary ring-2 ring-primary/10' : 'border-borderLight'
                }`}
              />
              {errors.telephone && <p className="mt-0.5 text-[10px] text-red-500">{errors.telephone}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email (optionnel)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary placeholder-textMuted transition-all duration-200 ${
                  errors.email ? 'border-red-400' : 'border-borderLight focus:border-primary focus:ring-2 focus:ring-primary/10'
                }`}
              />
              {errors.email && <p className="mt-0.5 text-[10px] text-red-500">{errors.email}</p>}
            </div>

            <div>
              <textarea
                placeholder="Message (optionnel)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 text-sm transition-all duration-200 border rounded-lg resize-none bg-bgSurface border-borderLight text-textPrimary placeholder-textMuted focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 text-sm font-medium text-white bg-primary hover:bg-primaryHover rounded-xl transition-all duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Envoi...' : 'Envoyer sur WhatsApp'}
            </button>
          </form>

          <p className="text-[10px] text-textMuted text-center mt-3">
            Vos informations sont sécurisées
          </p>
        </div>
      </div>
    </div>
  )
}