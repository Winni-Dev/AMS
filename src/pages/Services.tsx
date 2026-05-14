import { useMemo, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  HiShieldCheck, 
  HiTruck, 
  HiClipboardList, 
  HiChartBar, 
  HiDocumentReport,
  HiArrowRight,
  HiCheckCircle,
  HiGlobe
} from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t, i18n } = useTranslation()

  type AdditionalBlock = { title: string; description: string; features: string[] }
  type ProcessStep = { step: string; title: string; description: string }
  type AdditionalServiceRow = AdditionalBlock & { icon: ReactNode }

  const additionalServices = useMemo((): AdditionalServiceRow[] => {
    const raw = t('services.additional', { returnObjects: true }) as AdditionalBlock[]
    const icons = [
      <HiDocumentReport key="a0" className="text-4xl text-health-green" />,
      <HiClipboardList key="a1" className="text-4xl text-health-green" />,
    ]
    if (!Array.isArray(raw)) return []
    return raw.map((block, i) => ({ ...block, icon: icons[i] ?? icons[0] }))
  }, [t, i18n.language])

  const processSteps = useMemo(() => {
    const raw = t('services.processSteps', { returnObjects: true }) as ProcessStep[]
    return Array.isArray(raw) ? raw : []
  }, [t, i18n.language])

  const mainServices = [
    {
      id: 'regulatory',
      icon: <HiShieldCheck className="text-6xl text-health-green" />,
      titleKey: 'services.regulatory.title',
      subtitleKey: 'services.regulatory.subtitle',
      descriptionKey: 'services.regulatory.description',
      featuresKey: 'services.regulatory.features',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'distribution',
      icon: <HiGlobe className="text-6xl text-health-green" />,
      titleKey: 'services.distribution.title',
      subtitleKey: 'services.distribution.subtitle',
      descriptionKey: 'services.distribution.description',
      featuresKey: 'services.distribution.features',
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=600&fit=crop',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'logistics',
      icon: <HiTruck className="text-6xl text-health-green" />,
      titleKey: 'services.logistics.title',
      subtitleKey: 'services.logistics.subtitle',
      descriptionKey: 'services.logistics.description',
      featuresKey: 'services.logistics.features',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'deployment',
      icon: <HiChartBar className="text-6xl text-health-green" />,
      titleKey: 'services.deployment.title',
      subtitleKey: 'services.deployment.subtitle',
      descriptionKey: 'services.deployment.description',
      featuresKey: 'services.deployment.features',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('services.metaTitle')}</title>
        <meta name="description" content={t('services.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-deep-blue via-premium-blue to-deep-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30 text-health-green"
            >
              <span className="w-2 h-2 mr-2 rounded-full bg-health-green animate-pulse" />
              {t('services.heroBadge')}
            </motion.span>
            
            <h1 className="mb-6 text-5xl font-bold font-sora md:text-6xl lg:text-7xl">
              {t('services.heroTitle')}
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-300">
              {t('services.heroSubtitle')}
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-health-green/5 blur-3xl" />
        <div className="absolute w-64 h-64 rounded-full top-20 right-20 bg-blue-500/5 blur-3xl" />
      </section>

      {/* Main Services */}
      <section className="py-32 bg-snow">
        <div className="container px-4 mx-auto">
          <div className="space-y-32">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="mb-6">{service.icon}</div>
                    
                    <span className="text-sm font-semibold tracking-wider uppercase text-health-green">
                      {t(service.subtitleKey)}
                    </span>
                    
                    <h2 className="mt-4 mb-6 text-4xl font-bold font-sora md:text-5xl text-deep-blue">
                      {t(service.titleKey)}
                    </h2>
                    
                    <p className="mb-8 text-lg leading-relaxed text-premium-gray">
                      {t(service.descriptionKey)}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {(Array.isArray(t(service.featuresKey, { returnObjects: true }))
                        ? (t(service.featuresKey, { returnObjects: true }) as string[])
                        : []
                      ).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <HiCheckCircle className="flex-shrink-0 mt-1 text-health-green" />
                          <span className="text-sm text-deep-blue">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-4 space-x-3 font-semibold text-white transition-all duration-300 shadow-lg group bg-deep-blue hover:bg-premium-blue rounded-2xl hover:shadow-xl"
                    >
                      <span>{t('services.learnMore')}</span>
                      <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="relative">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-3xl opacity-20 blur-2xl`} />
                    <div className="relative overflow-hidden shadow-2xl rounded-3xl">
                      <img
                        src={service.image}
                        alt={t(service.titleKey)}
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent" />
                    </div>
                    
                    {/* Floating Stats Card */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute p-6 bg-white shadow-xl -bottom-6 -right-6 rounded-2xl"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                          <HiShieldCheck className="text-2xl text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-deep-blue">99.9%</div>
                          <div className="text-sm text-premium-gray">{t('services.statSuccess')}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-snow">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-health-green">
              {t('services.extendedBadge')}
            </span>
            <h2 className="mt-4 text-4xl font-bold font-sora md:text-5xl text-deep-blue">
              {t('services.extendedTitle')}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="p-10 transition-all duration-500 bg-white group rounded-3xl shadow-glass hover:shadow-premium"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="mb-4 text-2xl font-bold font-sora text-deep-blue">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-premium-gray">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-deep-blue">
                      <HiCheckCircle className="flex-shrink-0 mr-3 text-health-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 overflow-hidden bg-deep-blue">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-health-green">
              {t('services.processBadge')}
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold text-white font-sora md:text-5xl">
              {t('services.processTitle')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              {t('services.processSubtitle')}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-b from-health-green/10 to-transparent rounded-3xl group-hover:opacity-100" />
                <div className="relative p-8 transition-all duration-500 border bg-white/5 backdrop-blur-sm border-white/10 rounded-3xl hover:border-health-green/30">
                  <div className="mb-6 text-6xl font-bold font-sora text-health-green/20">{item.step}</div>
                  <h3 className="mb-4 text-2xl font-bold text-white font-sora">{item.title}</h3>
                  <p className="leading-relaxed text-gray-400">{item.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-health-green/30">
                      <div className="absolute right-0 w-2 h-2 -translate-y-1/2 rounded-full top-1/2 bg-health-green" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-snow">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 overflow-hidden text-center bg-gradient-to-r from-deep-blue to-premium-blue rounded-3xl md:p-16"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-health-green blur-3xl" />
              <div className="absolute bottom-0 left-0 bg-blue-500 rounded-full w-96 h-96 blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="mb-6 text-4xl font-bold text-white font-sora md:text-5xl">
                {t('services.ctaFinalTitle')}
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
                {t('services.ctaFinalSubtitle')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-4 space-x-3 text-lg font-semibold text-white transition-all duration-300 shadow-2xl group bg-health-green hover:bg-green-600 rounded-2xl hover:shadow-health-green/25"
              >
                <span>{t('services.ctaFinalButton')}</span>
                <HiArrowRight className="text-2xl transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services