// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet-async'
// import { 
//   HiArrowRight, 
//   HiChartBar, 
//   HiTrendingUp, 
//   HiUsers, 
//   HiClock,
//   HiCheckCircle,
//   HiTruck,
//   HiBeaker
// } from 'react-icons/hi'

// const CaseStudies = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   }

//   const caseStudies = [
//     {
//       id: 'antimalarial-deployment',
//       icon: <HiBeaker className="text-5xl text-health-green" />,
//       title: 'Antimalarial Product Deployment',
//       client: 'Major European Pharmaceutical Laboratory',
//       challenge: 'Deploy a new antimalarial treatment across Côte d\'Ivoire with full regulatory compliance and rapid market penetration.',
//       solution: 'Implemented an integrated regulatory-to-distribution pathway, achieving product registration in record time and establishing a nationwide distribution network.',
//       results: [
//         { label: 'Time to Market', value: '6 months', icon: <HiClock /> },
//         { label: 'Coverage', value: '85%', icon: <HiChartBar /> },
//         { label: 'Patients Reached', value: '500K+', icon: <HiUsers /> },
//         { label: 'Growth Rate', value: '+240%', icon: <HiTrendingUp /> }
//       ],
//       timeline: [
//         { phase: 'Regulatory Approval', duration: '2 months', status: 'completed' },
//         { phase: 'Distribution Setup', duration: '1.5 months', status: 'completed' },
//         { phase: 'Market Launch', duration: '1 month', status: 'completed' },
//         { phase: 'Scale & Optimize', duration: 'Ongoing', status: 'active' }
//       ],
//       image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&h=600&fit=crop',
//       category: 'Pharmaceutical'
//     },
//     {
//       id: 'injectable-distribution',
//       icon: <HiTruck className="text-5xl text-health-green" />,
//       title: 'National Distribution of Injectable Products',
//       client: 'European Biotech Company',
//       challenge: 'Establish cold chain distribution for temperature-sensitive injectable products across multiple regions in West Africa.',
//       solution: 'Deployed certified cold chain infrastructure with real-time temperature monitoring and last-mile delivery capabilities.',
//       results: [
//         { label: 'Temperature Compliance', value: '99.9%', icon: <HiCheckCircle /> },
//         { label: 'Delivery Points', value: '200+', icon: <HiChartBar /> },
//         { label: 'Regions Covered', value: '12', icon: <HiUsers /> },
//         { label: 'Product Integrity', value: '100%', icon: <HiTrendingUp /> }
//       ],
//       timeline: [
//         { phase: 'Infrastructure Setup', duration: '3 months', status: 'completed' },
//         { phase: 'Team Training', duration: '1 month', status: 'completed' },
//         { phase: 'Pilot Launch', duration: '2 months', status: 'completed' },
//         { phase: 'Full Deployment', duration: '3 months', status: 'completed' }
//       ],
//       image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop',
//       category: 'Logistics'
//     },
//     {
//       id: 'medical-devices-supply-chain',
//       icon: <HiChartBar className="text-5xl text-health-green" />,
//       title: 'Medical Devices Supply Chain',
//       client: 'International Medical Device Manufacturer',
//       challenge: 'Create an efficient supply chain for medical devices with complex import requirements and hospital distribution needs.',
//       solution: 'Developed a comprehensive supply chain solution including customs clearance, warehousing, and direct hospital delivery.',
//       results: [
//         { label: 'Cost Reduction', value: '-30%', icon: <HiTrendingUp /> },
//         { label: 'Hospitals Served', value: '50+', icon: <HiUsers /> },
//         { label: 'Delivery Time', value: '-45%', icon: <HiClock /> },
//         { label: 'Satisfaction', value: '98%', icon: <HiCheckCircle /> }
//       ],
//       timeline: [
//         { phase: 'Supply Chain Audit', duration: '1 month', status: 'completed' },
//         { phase: 'Process Optimization', duration: '2 months', status: 'completed' },
//         { phase: 'Implementation', duration: '3 months', status: 'completed' },
//         { phase: 'Continuous Improvement', duration: 'Ongoing', status: 'active' }
//       ],
//       image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
//       category: 'Medical Devices'
//     }
//   ]

//   const stats = [
//     { value: '50+', label: 'Successful Deployments' },
//     { value: '99.9%', label: 'Success Rate' },
//     { value: '15+', label: 'Years Experience' },
//     { value: '5', label: 'Countries' }
//   ]

//   return (
//     <>
//       <Helmet>
//         <title>Case Studies | AMS - Pharmaceutical Deployment Success Stories</title>
//         <meta name="description" content="Explore AMS's successful pharmaceutical deployment case studies in West Africa. Real results in regulatory, distribution, and logistics." />
//       </Helmet>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-deep-blue to-premium-blue">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }} />
//         </div>

//         <div className="container relative z-10 px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl mx-auto text-center text-white"
//           >
//             <motion.span
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30 text-health-green"
//             >
//               <span className="w-2 h-2 mr-2 rounded-full bg-health-green animate-pulse" />
//               Proven Results
//             </motion.span>
            
//             <h1 className="mb-6 text-5xl font-bold font-sora md:text-6xl">
//               Case Studies
//             </h1>
            
//             <p className="text-xl leading-relaxed text-gray-300">
//               Discover how AMS has successfully deployed pharmaceutical products 
//               across West Africa, delivering measurable results for European laboratories.
//             </p>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="grid max-w-4xl grid-cols-2 gap-8 mx-auto mt-16 md:grid-cols-4"
//           >
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="mb-2 text-4xl font-bold font-sora text-health-green">{stat.value}</div>
//                 <div className="text-sm text-gray-400">{stat.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Case Studies Grid */}
//       <section className="py-32 bg-snow">
//         <div className="container px-4 mx-auto">
//           <div className="space-y-20">
//             {caseStudies.map((study, index) => (
//               <motion.div
//                 key={study.id}
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.8 }}
//                 className="overflow-hidden transition-all duration-500 bg-white rounded-3xl shadow-glass hover:shadow-premium"
//               >
//                 <div className="grid lg:grid-cols-2">
//                   {/* Image Section */}
//                   <div className="relative h-full min-h-[400px]">
//                     <img
//                       src={study.image}
//                       alt={study.title}
//                       className="absolute inset-0 object-cover w-full h-full"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 to-transparent" />
//                     <div className="absolute bottom-8 left-8">
//                       <span className="inline-block px-4 py-2 text-sm font-medium border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30 text-health-green">
//                         {study.category}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className="p-10 lg:p-14">
//                     <div className="mb-6">{study.icon}</div>
                    
//                     <h2 className="mb-3 text-3xl font-bold font-sora text-deep-blue">
//                       {study.title}
//                     </h2>
                    
//                     <p className="mb-2 text-premium-gray">
//                       <span className="font-semibold text-deep-blue">Client:</span> {study.client}
//                     </p>

//                     <div className="mt-8 space-y-6">
//                       <div>
//                         <h3 className="flex items-center mb-2 text-lg font-bold font-sora text-deep-blue">
//                           <span className="flex items-center justify-center w-8 h-8 mr-3 bg-red-100 rounded-lg">
//                             <span className="text-sm text-red-500">❗</span>
//                           </span>
//                           Challenge
//                         </h3>
//                         <p className="text-premium-gray pl-11">{study.challenge}</p>
//                       </div>

//                       <div>
//                         <h3 className="flex items-center mb-2 text-lg font-bold font-sora text-deep-blue">
//                           <span className="flex items-center justify-center w-8 h-8 mr-3 bg-green-100 rounded-lg">
//                             <span className="text-sm text-green-500">💡</span>
//                           </span>
//                           Solution
//                         </h3>
//                         <p className="text-premium-gray pl-11">{study.solution}</p>
//                       </div>
//                     </div>

//                     {/* Results Grid */}
//                     <div className="grid grid-cols-2 gap-4 mt-10">
//                       {study.results.map((result, idx) => (
//                         <div key={idx} className="p-4 bg-gray-50 rounded-2xl">
//                           <div className="mb-2 text-health-green">{result.icon}</div>
//                           <div className="text-2xl font-bold text-deep-blue">{result.value}</div>
//                           <div className="mt-1 text-xs text-premium-gray">{result.label}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Timeline */}
//                 <div className="px-10 py-8 border-t border-gray-100 lg:px-14">
//                   <h3 className="mb-6 text-lg font-bold font-sora text-deep-blue">Project Timeline</h3>
//                   <div className="grid gap-4 md:grid-cols-4">
//                     {study.timeline.map((phase, idx) => (
//                       <div key={idx} className="relative">
//                         <div className="flex items-center mb-2">
//                           <div className={`w-3 h-3 rounded-full mr-2 ${
//                             phase.status === 'completed' ? 'bg-health-green' : 'bg-blue-500 animate-pulse'
//                           }`} />
//                           <span className="text-xs font-medium uppercase text-premium-gray">{phase.duration}</span>
//                         </div>
//                         <p className="text-sm font-medium text-deep-blue">{phase.phase}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div className="flex justify-end px-10 py-6 border-t border-gray-100 lg:px-14 bg-gray-50/50">
//                   <Link
//                     to="/contact"
//                     className="inline-flex items-center space-x-2 font-semibold transition-colors group text-health-green hover:text-green-600"
//                   >
//                     <span>Discuss a Similar Project</span>
//                     <HiArrowRight className="transition-transform group-hover:translate-x-1" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="relative py-24 overflow-hidden bg-deep-blue">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }} />
//         </div>

//         <div className="container relative z-10 px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-16 text-center"
//           >
//             <span className="text-sm font-semibold tracking-wider uppercase text-health-green">
//               Testimonials
//             </span>
//             <h2 className="mt-4 text-4xl font-bold text-white font-sora md:text-5xl">
//               What Our Partners Say
//             </h2>
//           </motion.div>

//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 quote: "AMS's regulatory expertise accelerated our market entry by 6 months. Their understanding of local requirements is exceptional.",
//                 author: "Dr. Marie Laurent",
//                 role: "CEO, European Pharma Lab",
//                 avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
//               },
//               {
//                 quote: "The cold chain infrastructure AMS deployed exceeded our expectations. Zero temperature excursions in 2 years of operation.",
//                 author: "Jean-Pierre Dubois",
//                 role: "Supply Chain Director, Biotech Co.",
//                 avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
//               },
//               {
//                 quote: "Their market intelligence and distribution network gave us immediate access to markets we'd been trying to enter for years.",
//                 author: "Sarah Mitchell",
//                 role: "VP International, Medical Devices Inc.",
//                 avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
//               }
//             ].map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="p-8 transition-all duration-500 border bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:border-health-green/30"
//               >
//                 <div className="mb-4 text-4xl text-health-green">"</div>
//                 <p className="mb-6 leading-relaxed text-gray-300">{testimonial.quote}</p>
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.author}
//                     className="object-cover w-12 h-12 rounded-full"
//                   />
//                   <div>
//                     <div className="font-semibold text-white">{testimonial.author}</div>
//                     <div className="text-sm text-gray-400">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-snow">
//         <div className="container px-4 mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="mb-6 text-4xl font-bold font-sora text-deep-blue">
//               Ready to Become Our Next Success Story?
//             </h2>
//             <p className="max-w-2xl mx-auto mb-8 text-lg text-premium-gray">
//               Join leading European laboratories who trust AMS for their African pharmaceutical deployment.
//             </p>
//             <Link
//               to="/contact"
//               className="inline-flex items-center px-10 py-4 space-x-3 text-lg font-semibold text-white transition-all duration-300 shadow-lg group bg-health-green hover:bg-green-600 rounded-2xl hover:shadow-xl"
//             >
//               <span>Start Your Project</span>
//               <HiArrowRight className="text-2xl transition-transform group-hover:translate-x-2" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default CaseStudies


import { useState, useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { 
  HiArrowRight, 
  HiChartBar, 
  HiTrendingUp, 
  HiUsers, 
  HiClock,
  HiCheckCircle,
  HiTruck,
  HiBeaker
} from 'react-icons/hi'

// Composant compteur animé
const AnimatedCounter = ({ 
  value, 
  duration = 2,
  suffix = '' 
}: { 
  value: string; 
  duration?: number; 
  suffix?: string;
}) => {
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          // Extraire le nombre de la chaîne
          const numMatch = value.match(/[\d.]+/)
          const numStr = numMatch ? numMatch[0] : '0'
          const isDecimal = numStr.includes('.')
          const targetNum = parseFloat(numStr)
          const prefix = value.startsWith('+') || value.startsWith('-') ? value.charAt(0) : ''
          const originalSuffix = value.replace(/[+\-\d.]/g, '') + suffix

          let startTime: number
          let animationFrame: number

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            const easedProgress = 1 - Math.pow(1 - progress, 3) // Ease out cubic
            
            const current = targetNum * easedProgress
            
            if (isDecimal || numStr.includes('.')) {
              setDisplayValue(`${prefix}${current.toFixed(1)}${originalSuffix}`)
            } else {
              setDisplayValue(`${prefix}${Math.floor(current)}${originalSuffix}`)
            }
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate)
            } else {
              setDisplayValue(value + suffix)
            }
          }

          animationFrame = requestAnimationFrame(animate)
          return () => cancelAnimationFrame(animationFrame)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <div ref={ref} className="text-2xl font-bold text-deep-blue">
      {displayValue}
    </div>
  )
}

type CaseStudyJson = {
  id: string
  title: string
  client: string
  challenge: string
  solution: string
  category: string
  results: { label: string; value: string; suffix: string; isNumeric: boolean }[]
  timeline: { phase: string; duration: string; status: string }[]
}

type StatJson = { value: string; suffix: string; label: string }

type TestimonialJson = { quote: string; author: string; role: string; avatar: string }

const CASE_IMAGES: Record<string, string> = {
  'antimalarial-deployment': 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&h=600&fit=crop',
  'injectable-distribution': 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop',
  'medical-devices-supply-chain': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
}

function iconForCaseStudyId(id: string) {
  const cls = 'text-4xl md:text-5xl text-health-green'
  if (id === 'antimalarial-deployment') return <HiBeaker className={cls} />
  if (id === 'injectable-distribution') return <HiTruck className={cls} />
  return <HiChartBar className={cls} />
}

function resultIconFor(caseId: string, index: number) {
  const k = `r-${caseId}-${index}`
  const pack = {
    'antimalarial-deployment': [<HiClock key={k} />, <HiChartBar key={k} />, <HiUsers key={k} />, <HiTrendingUp key={k} />],
    'injectable-distribution': [<HiCheckCircle key={k} />, <HiChartBar key={k} />, <HiUsers key={k} />, <HiTrendingUp key={k} />],
    'medical-devices-supply-chain': [<HiTrendingUp key={k} />, <HiUsers key={k} />, <HiClock key={k} />, <HiCheckCircle key={k} />],
  } as const
  const row = pack[caseId as keyof typeof pack]
  return row?.[index] ?? <HiChartBar key={k} />
}

const CaseStudies = () => {
  const { t, i18n } = useTranslation()

  const caseStudies = useMemo(() => {
    const raw = t('caseStudies.cases', { returnObjects: true }) as CaseStudyJson[]
    return Array.isArray(raw)
      ? raw.map((c) => ({
          ...c,
          icon: iconForCaseStudyId(c.id),
          image: CASE_IMAGES[c.id] ?? CASE_IMAGES['antimalarial-deployment'],
          results: c.results.map((r, idx) => ({
            ...r,
            icon: resultIconFor(c.id, idx),
          })),
        }))
      : []
  }, [t, i18n.language])

  const stats = useMemo(() => {
    const raw = t('caseStudies.stats', { returnObjects: true }) as StatJson[]
    return Array.isArray(raw) ? raw : []
  }, [t, i18n.language])

  const testimonials = useMemo(() => {
    const raw = t('caseStudies.testimonials', { returnObjects: true }) as TestimonialJson[]
    return Array.isArray(raw) ? raw : []
  }, [t, i18n.language])

  return (
    <>
      <Helmet>
        <title>{t('caseStudies.meta.title')}</title>
        <meta name="description" content={t('caseStudies.meta.description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-deep-blue to-premium-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 mb-5 text-xs font-medium border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30 text-health-green"
            >
              <span className="w-1.5 h-1.5 mr-2 rounded-full bg-health-green animate-pulse" />
              {t('caseStudies.hero.badge')}
            </motion.span>
            
            <h1 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl font-sora">
              {t('caseStudies.title')}
            </h1>
            
            <p className="text-sm leading-relaxed text-gray-300 md:text-base">
              {t('caseStudies.hero.description')}
            </p>
          </motion.div>

          {/* Stats avec compteurs dynamiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid max-w-3xl grid-cols-2 gap-6 mx-auto mt-12 md:grid-cols-4 md:gap-8 md:mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  duration={2.5}
                />
                <div className="mt-1 text-xs text-gray-400 md:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 md:py-32 bg-snow">
        <div className="container px-4 mx-auto">
          <div className="space-y-16 md:space-y-20">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden transition-all duration-500 bg-white rounded-2xl md:rounded-3xl shadow-glass hover:shadow-premium"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-full md:min-h-[400px]">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="absolute inset-0 object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                      <span className="inline-block px-3 py-1.5 text-xs font-medium border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30 text-health-green">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-10 lg:p-12">
                    <div className="mb-4 md:mb-6">{study.icon}</div>
                    
                    <h2 className="mb-2 text-xl font-bold md:text-2xl lg:text-3xl font-sora text-deep-blue">
                      {study.title}
                    </h2>
                    
                    <p className="mb-6 text-sm md:text-base text-premium-gray">
                      <span className="font-semibold text-deep-blue">{t('caseStudies.labels.client')}</span> {study.client}
                    </p>

                    <div className="space-y-4 md:space-y-5">
                      <div>
                        <h3 className="flex items-center mb-2 text-sm font-bold md:text-base font-sora text-deep-blue">
                          <span className="flex items-center justify-center flex-shrink-0 mr-2 bg-red-100 rounded-lg w-7 h-7 md:w-8 md:h-8 md:mr-3">
                            <span className="text-xs text-red-500 md:text-sm">❗</span>
                          </span>
                          {t('caseStudies.labels.challenge')}
                        </h3>
                        <p className="text-xs md:text-sm text-premium-gray pl-9 md:pl-11">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="flex items-center mb-2 text-sm font-bold md:text-base font-sora text-deep-blue">
                          <span className="flex items-center justify-center flex-shrink-0 mr-2 bg-green-100 rounded-lg w-7 h-7 md:w-8 md:h-8 md:mr-3">
                            <span className="text-xs text-green-500 md:text-sm">💡</span>
                          </span>
                          {t('caseStudies.labels.solution')}
                        </h3>
                        <p className="text-xs md:text-sm text-premium-gray pl-9 md:pl-11">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid avec compteurs dynamiques */}
                    <div className="grid grid-cols-2 gap-3 mt-8 md:gap-4 md:mt-10">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl">
                          <div className="mb-1 md:mb-2 text-health-green">{result.icon}</div>
                          <AnimatedCounter 
                            value={result.value} 
                            suffix={result.suffix}
                            duration={1.5}
                          />
                          <div className="mt-1 text-xs text-premium-gray">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="px-6 py-6 border-t border-gray-100 md:px-10 md:py-8 lg:px-12">
                  <h3 className="mb-4 text-sm font-bold md:text-base font-sora text-deep-blue md:mb-6">{t('caseStudies.labels.projectTimeline')}</h3>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {study.timeline.map((phase, idx) => (
                      <div key={idx} className="relative">
                        <div className="flex items-center mb-1 md:mb-2">
                          <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full mr-2 ${
                            phase.status === 'completed' ? 'bg-health-green' : 'bg-blue-500 animate-pulse'
                          }`} />
                          <span className="text-xs font-medium uppercase text-premium-gray">{phase.duration}</span>
                        </div>
                        <p className="text-xs font-medium md:text-sm text-deep-blue">{phase.phase}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-end px-6 py-4 border-t border-gray-100 md:px-10 md:py-6 lg:px-12 bg-gray-50/50">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-1.5 text-sm font-semibold transition-colors group text-health-green hover:text-green-600"
                  >
                    <span>{t('caseStudies.labels.discussProject')}</span>
                    <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 overflow-hidden bg-deep-blue">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:mb-16"
          >
            <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
              {t('caseStudies.testimonialsSection.badge')}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl font-sora md:mt-4">
              {t('caseStudies.testimonialsSection.title')}
            </h2>
          </motion.div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-6 transition-all duration-500 border md:p-8 bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:border-health-green/30"
              >
                <div className="mb-3 text-3xl md:text-4xl text-health-green">"</div>
                <p className="mb-5 text-sm leading-relaxed text-gray-300 md:mb-6 md:text-base">{testimonial.quote}</p>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="object-cover w-10 h-10 rounded-full md:w-12 md:h-12"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white md:text-base">{testimonial.author}</div>
                    <div className="text-xs text-gray-400 md:text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-snow">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-sora text-deep-blue md:mb-6">
              {t('caseStudies.cta.title')}
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base text-premium-gray md:mb-8">
              {t('caseStudies.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 space-x-2 text-sm font-semibold text-white transition-all duration-300 shadow-lg md:px-10 md:py-4 md:text-base group bg-health-green hover:bg-green-600 rounded-xl md:rounded-2xl hover:shadow-xl"
            >
              <span>{t('caseStudies.cta.button')}</span>
              <HiArrowRight className="text-lg transition-transform md:text-xl group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies