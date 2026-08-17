
import React, { useState, useRef, useEffect } from 'react'

const WHATSAPP_NUMBER = '2250700000000'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.contact-animate')
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.nom.trim()) newErrors.nom = 'Nom requis'
    else if (formData.nom.trim().length < 2) newErrors.nom = 'Nom trop court'
    
    if (!formData.prenom.trim()) newErrors.prenom = 'Prénom requis'
    else if (formData.prenom.trim().length < 2) newErrors.prenom = 'Prénom trop court'
    
    if (!formData.email.trim()) newErrors.email = 'Email requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide'
    
    if (!formData.telephone.trim()) newErrors.telephone = 'Téléphone requis'
    else if (!/^[\d\s+]{8,}$/.test(formData.telephone.replace(/\s/g, ''))) newErrors.telephone = 'Numéro invalide'
    
    if (!formData.sujet.trim()) newErrors.sujet = 'Sujet requis'
    
    if (!formData.message.trim()) newErrors.message = 'Message requis'
    else if (formData.message.trim().length < 10) newErrors.message = 'Minimum 10 caractères'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    const whatsappMessage = `📬 *NOUVEAU MESSAGE DE CONTACT*

👤 *Expéditeur :*
${formData.prenom} ${formData.nom}

📌 *Sujet :* ${formData.sujet}

📞 *Contact :*
• Téléphone : ${formData.telephone}
• Email : ${formData.email}

💬 *Message :*
${formData.message}

---
_Message envoyé via Africa Connect Plus_`

    setTimeout(() => {
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, '_blank')
      
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ nom: '', prenom: '', email: '', telephone: '', sujet: '', message: '' })
      setTimeout(() => setSubmitSuccess(false), 4000)
    }, 800)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Téléphone',
      value: 'DG: +353 87 628 7124',
      link: 'tel:+353876287124'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'contact@africaconnectplus.com',
      link: 'mailto:contact@africaconnectplus.com'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Horaires',
      value: 'Lun - Sam · 9h - 16h',
      link: '#'
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative px-4 py-20 sm:px-6 lg:px-8 bg-bgAlternate">
      <div className="relative max-w-5xl mx-auto">
        {/* En-tête */}
        <div className="mb-12 text-center">
          <div className="transition-all duration-500 translate-y-3 opacity-0 contact-animate">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/5">
              <span className="relative flex h-1.5 w-1.5 mr-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-primary"></span>
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-primary"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-primary">Contact</span>
            </div>
          </div>
          
          <h2 className="mb-2 text-2xl font-bold transition-all duration-500 translate-y-3 opacity-0 contact-animate sm:text-3xl text-textPrimary">
            Une question ?{' '}
            <span className="text-primary">Échangeons</span>
          </h2>
          
          <p className="max-w-md mx-auto text-sm transition-all duration-500 translate-y-3 opacity-0 contact-animate text-textSecondary">
            Notre équipe est à votre écoute. Réponse sous 24h.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Sidebar */}
          <div className="space-y-4 lg:col-span-2">
            <div className="transition-all duration-500 delay-75 translate-y-3 opacity-0 contact-animate">
              <div className="p-5 border bg-bgSurface border-borderLight rounded-2xl shadow-card">
                <h3 className="mb-4 text-sm font-medium text-textPrimary">Coordonnées</h3>
                
                <div className="space-y-2">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-3 p-3 transition-all duration-200 rounded-xl hover:bg-borderLight/30 group"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-textMuted mb-0.5">{info.label}</p>
                        <p className="text-sm font-medium truncate text-textPrimary">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Message de confiance */}
            <div className="transition-all duration-500 delay-100 translate-y-3 opacity-0 contact-animate">
              <div className="p-4 border bg-primary/5 border-primary/10 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center rounded-lg w-7 h-7 bg-primary/10 text-primary">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-xs font-medium text-textPrimary">Confidentialité garantie</h4>
                    <p className="text-[11px] leading-relaxed text-textSecondary">
                      Vos données sont protégées et jamais partagées.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="transition-all duration-500 delay-150 translate-y-3 opacity-0 contact-animate lg:col-span-3">
            <div className="p-5 border bg-bgSurface border-borderLight rounded-2xl shadow-card">
              <h3 className="mb-4 text-sm font-medium text-textPrimary">Envoyez-nous un message</h3>

              {submitSuccess && (
                <div className="flex items-center gap-2 p-3 mb-4 border rounded-lg bg-primary/5 border-primary/20">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-textPrimary">Message envoyé ! Redirection WhatsApp...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <input
                      type="text"
                      name="prenom"
                      placeholder="Prénom"
                      value={formData.prenom}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('prenom')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary placeholder-textMuted transition-all duration-200 ${
                        errors.prenom 
                          ? 'border-red-400' 
                          : focusedField === 'prenom' 
                            ? 'border-primary ring-2 ring-primary/10' 
                            : 'border-borderLight'
                      }`}
                    />
                    {errors.prenom && <p className="mt-1 text-[10px] text-red-500">{errors.prenom}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Nom"
                      value={formData.nom}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('nom')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary placeholder-textMuted transition-all duration-200 ${
                        errors.nom 
                          ? 'border-red-400' 
                          : focusedField === 'nom' 
                            ? 'border-primary ring-2 ring-primary/10' 
                            : 'border-borderLight'
                      }`}
                    />
                    {errors.nom && <p className="mt-1 text-[10px] text-red-500">{errors.nom}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary placeholder-textMuted transition-all duration-200 ${
                      errors.email 
                        ? 'border-red-400' 
                        : focusedField === 'email' 
                          ? 'border-primary ring-2 ring-primary/10' 
                          : 'border-borderLight'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-[10px] text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('telephone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary placeholder-textMuted transition-all duration-200 ${
                      errors.telephone 
                        ? 'border-red-400' 
                        : focusedField === 'telephone' 
                          ? 'border-primary ring-2 ring-primary/10' 
                          : 'border-borderLight'
                    }`}
                  />
                  {errors.telephone && <p className="mt-1 text-[10px] text-red-500">{errors.telephone}</p>}
                </div>

                <div>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary transition-all duration-200 ${
                      errors.sujet 
                        ? 'border-red-400' 
                        : 'border-borderLight focus:border-primary focus:ring-2 focus:ring-primary/10'
                    } ${!formData.sujet ? 'text-textMuted' : ''}`}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="service">Question sur un service</option>
                    <option value="suivi">Suivi de dossier</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.sujet && <p className="mt-1 text-[10px] text-red-500">{errors.sujet}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-3 py-2 text-sm bg-bgSurface border rounded-lg text-textPrimary placeholder-textMuted transition-all duration-200 resize-none ${
                      errors.message 
                        ? 'border-red-400' 
                        : 'border-borderLight focus:border-primary focus:ring-2 focus:ring-primary/10'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-[10px] text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 text-sm font-medium text-white transition-all duration-200 rounded-xl bg-primary hover:bg-primaryHover disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
                </button>

                <p className="text-[10px] text-textMuted text-center pt-1">* Champs obligatoires</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}