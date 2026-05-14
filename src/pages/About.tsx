

// import { useMemo } from 'react'
// import { motion } from 'framer-motion'
// import { Helmet } from 'react-helmet-async'
// import { useTranslation } from 'react-i18next'
// import { 
//   HiBadgeCheck, 
//   HiEye, 
//   HiHeart, 
//   HiLightBulb, 
//   HiShieldCheck, 
//   HiUserGroup,
//   HiChatAlt2
// } from 'react-icons/hi'

// // Import des images
// import pdgImage from '../IMAGES/pdg.jpg'
// import dgImage from '../IMAGES/dg.jpeg'

// const About = () => {
//   const { t, i18n } = useTranslation()

//   const founderSections = useMemo(
//     () =>
//       (t('about.founder.sections', { returnObjects: true }) as { title: string; paragraphs: string[] }[]) ?? [],
//     [t, i18n.language]
//   )

//   const directorSections = useMemo(
//     () =>
//       (t('about.director.sections', { returnObjects: true }) as { title: string; paragraphs: string[] }[]) ?? [],
//     [t, i18n.language]
//   )

//   const values = [
//     { icon: <HiShieldCheck className="text-3xl md:text-4xl" />, title: t('about.values.transparency.title'), description: t('about.values.transparency.description') },
//     { icon: <HiHeart className="text-3xl md:text-4xl" />, title: t('about.values.security.title'), description: t('about.values.security.description') },
//     { icon: <HiBadgeCheck className="text-3xl md:text-4xl" />, title: t('about.values.reliability.title'), description: t('about.values.reliability.description') },
//     { icon: <HiLightBulb className="text-3xl md:text-4xl" />, title: t('about.values.innovation.title'), description: t('about.values.innovation.description') },
//   ]

//   return (
//     <>
//       <Helmet>
//         <title>{t('about.meta.title')}</title>
//         <meta name="description" content={t('about.meta.description')} />
//       </Helmet>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-deep-blue to-premium-blue">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }} />
//         </div>
        
//         <div className="absolute w-64 h-64 rounded-full -top-20 -right-20 bg-health-green/5 blur-3xl" />
//         <div className="absolute rounded-full -bottom-20 -left-20 w-96 h-96 bg-blue-500/5 blur-3xl" />

//         <div className="container relative z-10 px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl text-white"
//           >
//             <motion.span
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-3 py-1.5 mb-5 text-xs font-medium border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30 text-health-green"
//             >
//               <span className="w-1.5 h-1.5 mr-2 rounded-full bg-health-green animate-pulse" />
//               {t('about.hero.badge')}
//             </motion.span>
            
//             <h1 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl font-sora">
//               {t('about.hero.title')}
//             </h1>
            
//             <p className="text-sm leading-relaxed text-gray-300 md:text-base">
//               {t('about.hero.description')}
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Mot du Fondateur - PDG (REMPONTÉ ICI) */}
//       <section className="py-20 bg-white md:py-24">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-10 text-center md:mb-14"
//           >
//             <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
//               {t('about.leadership.badge')}
//             </span>
//             <h2 className="mt-3 text-3xl font-bold md:text-4xl font-sora text-deep-blue">
//               {t('about.leadership.title')}
//             </h2>
//           </motion.div>

//           <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
//             {/* Photo PDG */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2"
//             >
//               <div className="relative">
//                 <div className="absolute -inset-3 bg-gradient-to-br from-health-green/20 to-blue-500/20 rounded-3xl blur-xl" />
//                 <div className="relative overflow-hidden shadow-2xl rounded-3xl aspect-[3/4]">
//                   <img 
//                     src={pdgImage} 
//                     alt={t('about.people.pdgImageAlt')}
//                     className="object-cover w-full h-full"
//                     onError={(e) => {
//                       const target = e.target as HTMLImageElement
//                       target.style.display = 'none'
//                       target.parentElement!.classList.add('bg-gradient-to-br', 'from-health-green', 'to-blue-500', 'flex', 'items-center', 'justify-center')
//                       const fallback = document.createElement('span')
//                       fallback.className = 'text-6xl font-bold text-white font-sora'
//                       fallback.textContent = 'HBT'
//                       target.parentElement?.appendChild(fallback)
//                     }}
//                   />
//                 </div>
//                 <div className="absolute px-6 py-3 text-center -translate-x-1/2 bg-white shadow-xl -bottom-4 left-1/2 rounded-2xl whitespace-nowrap">
//                   <p className="text-sm font-bold text-deep-blue font-sora">Hervé Bah Tiehi</p>
//                   <p className="text-xs font-medium text-health-green">{t('about.people.pdgRole')}</p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Message PDG */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-3"
//             >
//               <div className="relative">
//                 <HiChatAlt2 className="absolute text-5xl md:text-7xl text-health-green/10 -top-4 -left-2" />
//                 <div className="relative space-y-5 text-sm leading-relaxed md:text-base text-premium-gray">
//                   {founderSections.map((section, sIdx) => (
//                     <div key={sIdx} className="space-y-2">
//                       <h3 className="mb-3 text-lg font-bold md:text-xl text-deep-blue font-sora">
//                         {section.title}
//                       </h3>
//                       {section.paragraphs.map((para, pIdx) => (
//                         <p key={pIdx}>{para}</p>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mot du Directeur Général - DG (REMPONTÉ ICI) */}
//       <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-snow">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-10 text-center md:mb-14"
//           >
//             <h2 className="text-3xl font-bold md:text-4xl font-sora text-deep-blue">
//               {t('about.md.title')}
//             </h2>
//           </motion.div>

//           <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
//             {/* Message DG - à gauche sur desktop */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-3 lg:order-1"
//             >
//               <div className="relative">
//                 <HiChatAlt2 className="absolute text-5xl md:text-7xl text-health-green/10 -top-4 -left-2" />
//                 <div className="relative space-y-5 text-sm leading-relaxed md:text-base text-premium-gray">
//                   {directorSections.map((section, sIdx) => (
//                     <div key={sIdx} className="space-y-2">
//                       <h3 className="mb-3 text-lg font-bold md:text-xl text-deep-blue font-sora">
//                         {section.title}
//                       </h3>
//                       {section.paragraphs.map((para, pIdx) => (
//                         <p key={pIdx}>{para}</p>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Photo DG - à droite sur desktop */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2 lg:order-2"
//             >
//               <div className="relative">
//                 <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 to-health-green/20 rounded-3xl blur-xl" />
//                 <div className="relative overflow-hidden shadow-2xl rounded-3xl aspect-[3/4]">
//                   <img 
//                     src={dgImage} 
//                     alt={t('about.people.dgImageAlt')}
//                     className="object-cover w-full h-full"
//                     onError={(e) => {
//                       const target = e.target as HTMLImageElement
//                       target.style.display = 'none'
//                       target.parentElement!.classList.add('bg-gradient-to-br', 'from-premium-blue', 'to-health-green', 'flex', 'items-center', 'justify-center')
//                       const fallback = document.createElement('span')
//                       fallback.className = 'text-6xl font-bold text-white font-sora'
//                       fallback.textContent = 'KRG'
//                       target.parentElement?.appendChild(fallback)
//                     }}
//                   />
//                 </div>
//                 <div className="absolute px-6 py-3 text-center -translate-x-1/2 bg-white shadow-xl -bottom-4 left-1/2 rounded-2xl whitespace-nowrap">
//                   <p className="text-sm font-bold text-deep-blue font-sora">KATO REMY GBESSIA</p>
//                   <p className="text-xs font-medium text-health-green">{t('about.people.dgRole')}</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20 md:py-24 bg-snow">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-10 text-center md:mb-14"
//           >
//             <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
//               {t('about.purpose.badge')}
//             </span>
//             <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl font-sora text-deep-blue md:mt-4">
//               {t('about.purpose.title')}
//             </h2>
//           </motion.div>

//           <div className="grid gap-8 md:gap-10 md:grid-cols-2">
//             {/* Mission */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ y: -5 }}
//               className="p-8 transition-all duration-500 bg-white md:p-10 rounded-2xl md:rounded-3xl shadow-glass hover:shadow-premium"
//             >
//               <div className="flex items-center justify-center mb-5 w-14 h-14 md:w-16 md:h-16 bg-health-green/10 rounded-2xl md:mb-6">
//                 <HiEye className="text-3xl md:text-4xl text-health-green" />
//               </div>
//               <h2 className="mb-3 text-2xl font-bold md:text-3xl font-sora text-deep-blue">
//                 {t('about.mission.title')}
//               </h2>
//               <p className="text-sm leading-relaxed md:text-base text-premium-gray">
//                 {t('about.mission.description')}
//               </p>
//             </motion.div>

//             {/* Vision */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ y: -5 }}
//               className="p-8 text-white transition-all duration-500 md:p-10 bg-gradient-to-br from-deep-blue to-premium-blue rounded-2xl md:rounded-3xl shadow-glass hover:shadow-premium"
//             >
//               <div className="flex items-center justify-center mb-5 w-14 h-14 md:w-16 md:h-16 bg-health-green/20 rounded-2xl md:mb-6">
//                 <HiUserGroup className="text-3xl md:text-4xl text-health-green" />
//               </div>
//               <h2 className="mb-3 text-2xl font-bold md:text-3xl font-sora">
//                 {t('about.vision.title')}
//               </h2>
//               <p className="text-sm leading-relaxed text-gray-300 md:text-base">
//                 {t('about.vision.description')}
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Valeurs */}
//       <section className="py-20 md:py-24 bg-gradient-to-b from-snow to-gray-50">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-12 text-center md:mb-16"
//           >
//             <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
//               {t('about.values.badge')}
//             </span>
//             <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl font-sora text-deep-blue md:mt-4">
//               {t('about.values.title')}
//             </h2>
//           </motion.div>

//           <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -6 }}
//                 className="p-6 text-center transition-all duration-500 bg-white md:p-8 rounded-2xl shadow-glass hover:shadow-premium"
//               >
//                 <div className="flex justify-center mb-4 text-health-green">{value.icon}</div>
//                 <h3 className="mb-2 text-lg font-bold md:text-xl font-sora text-deep-blue">{value.title}</h3>
//                 <p className="text-xs md:text-sm text-premium-gray">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default About


import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { 
  HiBadgeCheck, 
  HiEye, 
  HiHeart, 
  HiLightBulb, 
  HiShieldCheck, 
  HiUserGroup,
  HiChatAlt2
} from 'react-icons/hi'

// Import des images
import pdgImage from '../IMAGES/pdg.jpg'
import dgImage from '../IMAGES/dg.jpeg'

const About = () => {
  const { t, i18n } = useTranslation()

  const founderSections = useMemo(
    () =>
      (t('about.founder.sections', { returnObjects: true }) as { title: string; paragraphs: string[] }[]) ?? [],
    [t, i18n.language]
  )

  const directorSections = useMemo(
    () =>
      (t('about.director.sections', { returnObjects: true }) as { title: string; paragraphs: string[] }[]) ?? [],
    [t, i18n.language]
  )

  const values = [
    { icon: <HiShieldCheck className="text-3xl md:text-4xl" />, title: t('about.values.transparency.title'), description: t('about.values.transparency.description') },
    { icon: <HiHeart className="text-3xl md:text-4xl" />, title: t('about.values.security.title'), description: t('about.values.security.description') },
    { icon: <HiBadgeCheck className="text-3xl md:text-4xl" />, title: t('about.values.reliability.title'), description: t('about.values.reliability.description') },
    { icon: <HiLightBulb className="text-3xl md:text-4xl" />, title: t('about.values.innovation.title'), description: t('about.values.innovation.description') },
  ]

  return (
    <>
      <Helmet>
        <title>{t('about.meta.title')}</title>
        <meta name="description" content={t('about.meta.description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-deep-blue to-premium-blue">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        
        <div className="absolute w-64 h-64 rounded-full -top-20 -right-20 bg-health-green/5 blur-3xl" />
        <div className="absolute rounded-full -bottom-20 -left-20 w-96 h-96 bg-blue-500/5 blur-3xl" />

        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 mb-5 text-xs font-medium border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30 text-health-green"
            >
              <span className="w-1.5 h-1.5 mr-2 rounded-full bg-health-green animate-pulse" />
              {t('about.hero.badge')}
            </motion.span>
            
            <h1 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl font-sora">
              {t('about.hero.title')}
            </h1>
            
            <p className="text-sm leading-relaxed text-gray-300 md:text-base">
              {t('about.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mot du Fondateur - PDG */}
      <section className="py-20 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:mb-16"
          >
            <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
              {t('about.leadership.badge')}
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl font-sora text-deep-blue">
              {t('about.leadership.title')}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">
            {/* Photo PDG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center lg:col-span-2 lg:order-1"
            >
              <div className="relative pb-6 md:pb-2">
                {/* Cercle décoratif extérieur */}
                <div className="absolute rounded-full -inset-4 bg-gradient-to-br from-health-green/30 to-blue-500/30 blur-2xl animate-pulse" />
                {/* Cercle blanc intermédiaire */}
                <div className="absolute bg-white rounded-full shadow-2xl -inset-2" />
                {/* Photo ronde */}
                <div className="relative w-56 h-56 overflow-hidden rounded-full shadow-2xl md:w-72 md:h-72 lg:w-80 lg:h-80 ring-4 ring-white">
                  <img 
                    src={pdgImage} 
                    alt={t('about.people.pdgImageAlt')}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement!.classList.add('bg-gradient-to-br', 'from-health-green', 'to-blue-500', 'flex', 'items-center', 'justify-center')
                      const fallback = document.createElement('span')
                      fallback.className = 'text-5xl font-bold text-white font-sora'
                      fallback.textContent = 'HBT'
                      target.parentElement?.appendChild(fallback)
                    }}
                  />
                </div>
                {/* Badge nom - PLUS BAS SUR MOBILE */}
                <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-5 py-2.5 md:px-6 md:py-3 text-center whitespace-nowrap border border-gray-100 -bottom-1 md:-bottom-2">
                  <p className="text-xs font-bold md:text-sm text-deep-blue font-sora">Hervé Bah Tiehi</p>
                  <p className="text-xs font-medium text-health-green">{t('about.people.pdgRole')}</p>
                </div>
              </div>
            </motion.div>

            {/* Message PDG */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 lg:order-2"
            >
              <div className="relative">
                <HiChatAlt2 className="absolute text-5xl md:text-7xl text-health-green/10 -top-4 -left-2" />
                <div className="relative space-y-5 text-sm leading-relaxed md:text-base text-premium-gray">
                  {founderSections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <h3 className="text-lg font-bold md:text-xl text-deep-blue font-sora">
                        {section.title}
                      </h3>
                      {section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mot du Directeur Général - DG */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-snow">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:mb-16"
          >
            <h2 className="text-3xl font-bold md:text-4xl font-sora text-deep-blue">
              {t('about.md.title')}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">
            {/* Photo DG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center lg:col-span-2 lg:order-2"
            >
              <div className="relative pb-6 md:pb-2">
                {/* Cercle décoratif extérieur */}
                <div className="absolute rounded-full -inset-4 bg-gradient-to-br from-blue-500/30 to-health-green/30 blur-2xl animate-pulse" />
                {/* Cercle blanc intermédiaire */}
                <div className="absolute bg-white rounded-full shadow-2xl -inset-2" />
                {/* Photo ronde */}
                <div className="relative w-56 h-56 overflow-hidden rounded-full shadow-2xl md:w-72 md:h-72 lg:w-80 lg:h-80 ring-4 ring-white">
                  <img 
                    src={dgImage} 
                    alt={t('about.people.dgImageAlt')}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement!.classList.add('bg-gradient-to-br', 'from-premium-blue', 'to-health-green', 'flex', 'items-center', 'justify-center')
                      const fallback = document.createElement('span')
                      fallback.className = 'text-5xl font-bold text-white font-sora'
                      fallback.textContent = 'KRG'
                      target.parentElement?.appendChild(fallback)
                    }}
                  />
                </div>
                {/* Badge nom - PLUS BAS SUR MOBILE */}
                <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-5 py-2.5 md:px-6 md:py-3 text-center whitespace-nowrap border border-gray-100 -bottom-1 md:-bottom-2">
                  <p className="text-xs font-bold md:text-sm text-deep-blue font-sora">KATO REMY GBESSIA</p>
                  <p className="text-xs font-medium text-health-green">{t('about.people.dgRole')}</p>
                </div>
              </div>
            </motion.div>

            {/* Message DG */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 lg:order-1"
            >
              <div className="relative">
                <HiChatAlt2 className="absolute text-5xl md:text-7xl text-health-green/10 -top-4 -left-2" />
                <div className="relative space-y-5 text-sm leading-relaxed md:text-base text-premium-gray">
                  {directorSections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <h3 className="text-lg font-bold md:text-xl text-deep-blue font-sora">
                        {section.title}
                      </h3>
                      {section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24 bg-snow">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center md:mb-14"
          >
            <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
              {t('about.purpose.badge')}
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl font-sora text-deep-blue md:mt-4">
              {t('about.purpose.title')}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 transition-all duration-500 bg-white md:p-10 rounded-2xl md:rounded-3xl shadow-glass hover:shadow-premium"
            >
              <div className="flex items-center justify-center mb-5 w-14 h-14 md:w-16 md:h-16 bg-health-green/10 rounded-2xl md:mb-6">
                <HiEye className="text-3xl md:text-4xl text-health-green" />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl font-sora text-deep-blue">
                {t('about.mission.title')}
              </h2>
              <p className="text-sm leading-relaxed md:text-base text-premium-gray">
                {t('about.mission.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 text-white transition-all duration-500 md:p-10 bg-gradient-to-br from-deep-blue to-premium-blue rounded-2xl md:rounded-3xl shadow-glass hover:shadow-premium"
            >
              <div className="flex items-center justify-center mb-5 w-14 h-14 md:w-16 md:h-16 bg-health-green/20 rounded-2xl md:mb-6">
                <HiUserGroup className="text-3xl md:text-4xl text-health-green" />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl font-sora">
                {t('about.vision.title')}
              </h2>
              <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                {t('about.vision.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-snow to-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:mb-16"
          >
            <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
              {t('about.values.badge')}
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl font-sora text-deep-blue md:mt-4">
              {t('about.values.title')}
            </h2>
          </motion.div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 text-center transition-all duration-500 bg-white md:p-8 rounded-2xl shadow-glass hover:shadow-premium"
              >
                <div className="flex justify-center mb-4 text-health-green">{value.icon}</div>
                <h3 className="mb-2 text-lg font-bold md:text-xl font-sora text-deep-blue">{value.title}</h3>
                <p className="text-xs md:text-sm text-premium-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About