import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiPaperAirplane } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    try {
      const response = await fetch('https://formspree.io/f/mnjwydlq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          company: '',
          country: '',
          email: '',
          message: ''
        })
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Helmet>
        <title>Contact AMS | Africa Med Supply - Get in Touch</title>
        <meta name="description" content="Contact AMS for pharmaceutical logistics and distribution partnerships in West Africa." />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-deep-blue to-premium-blue">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-health-green">{t('contact.hero.badge')}</span>
            <h1 className="mt-4 mb-6 text-5xl font-bold font-sora md:text-6xl">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('contact.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-snow">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-8 text-3xl font-bold font-sora text-deep-blue">{t('contact.info.title')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-health-green/10 rounded-xl">
                      <HiLocationMarker className="text-2xl text-health-green" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-deep-blue">{t('contact.info.address')}</h3>
                      <p className="text-premium-gray">
                        Plateau, Abidjan<br />
                        Côte d'Ivoire, West Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-health-green/10 rounded-xl">
                      <HiMail className="text-2xl text-health-green" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-deep-blue">{t('contact.info.email')}</h3>
                      <a href="mailto:contact@ams-africa.com" className="transition-colors text-premium-gray hover:text-health-green">
                        contact@ams-africa.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-health-green/10 rounded-xl">
                      <HiPhone className="text-2xl text-health-green" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-deep-blue">{t('contact.info.phone')}</h3>
                      <div className="space-y-1">
                        <a href="tel:+353876287124" className="block transition-colors text-premium-gray hover:text-health-green">
                          DG: +353 87 628 7124
                        </a>
                        <a href="tel:+447874083280" className="block transition-colors text-premium-gray hover:text-health-green">
                          PDG: +447 874 083 280
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-health-green/10 rounded-xl">
                      <HiClock className="text-2xl text-health-green" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-deep-blue">{t('contact.info.hours')}</h3>
                      <p className="text-premium-gray whitespace-pre-line">
                        {t('contact.info.hoursDetail')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 overflow-hidden bg-gray-100 rounded-2xl shadow-glass">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.555676739796!2d-4.017922685237345!3d5.332209996133837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1e3a0505db9b7%3A0x4cec7c78322e3f50!2sPlateau%2C%20Abidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="p-8 bg-white rounded-3xl shadow-glass md:p-12">
                <h2 className="mb-2 text-2xl font-bold font-sora text-deep-blue">{t('contact.form.submit')}</h2>
                <p className="mb-8 text-premium-gray">{t('contact.formIntro')}</p>

                <form action="https://formspree.io/f/mnjwydlq" method="POST" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-deep-blue">{t('contact.form.name')} *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-health-green/20 focus:border-health-green"
                        placeholder={t('contact.form.placeholders.name')}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-deep-blue">{t('contact.form.company')} *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-health-green/20 focus:border-health-green"
                        placeholder={t('contact.form.placeholders.company')}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-deep-blue">{t('contact.form.country')} *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-health-green/20 focus:border-health-green"
                      >
                        <option value="">{t('contact.form.selectCountry')}</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CH">Switzerland</option>
                        <option value="BE">Belgium</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-deep-blue">{t('contact.form.email')} *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-health-green/20 focus:border-health-green"
                        placeholder={t('contact.form.placeholders.email')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-deep-blue">{t('contact.form.message')} *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 transition-all border border-gray-200 resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-health-green/20 focus:border-health-green"
                      placeholder={t('contact.form.placeholders.message')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="flex items-center justify-center w-full px-8 py-4 space-x-3 text-lg font-semibold text-white transition-all duration-300 shadow-lg group bg-health-green hover:bg-green-600 rounded-2xl hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span>{t('contact.form.sending')}</span>
                        <HiPaperAirplane className="text-2xl" />
                      </>
                    ) : (
                      <>
                        <span>{t('contact.form.submit')}</span>
                        <HiPaperAirplane className="text-2xl transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                  {(submitSuccess || submitError) && (
                    <div className={`mt-4 rounded-3xl border px-4 py-4 text-sm ${submitSuccess ? 'border-health-green bg-health-green/10 text-health-green' : 'border-red-300 bg-red-100 text-red-700'}`}>
                      {submitSuccess ? t('contact.form.confirmation') : t('contact.form.error')}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact