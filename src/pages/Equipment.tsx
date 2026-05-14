// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Helmet } from 'react-helmet-async'
// import { 
//   HiSearch, 
//   HiFilter,
//   HiCheckCircle,
//   HiShieldCheck,
//   HiCube
// } from 'react-icons/hi'
// import { 
//   FaSyringe, 
//   FaHandSparkles, 
//   FaVial, 
//   FaHeartbeat,
//   FaLungs,
//   FaStethoscope 
// } from 'react-icons/fa'

// const Equipment = () => {
//   const [activeCategory, setActiveCategory] = useState('all')
//   const [searchTerm, setSearchTerm] = useState('')

//   const categories = [
//     { id: 'all', name: 'All Equipment', icon: <HiCube /> },
//     { id: 'consumables', name: 'Medical Consumables', icon: <FaSyringe /> },
//     { id: 'hospital', name: 'Hospital Equipment', icon: <FaStethoscope /> },
//     { id: 'diagnostic', name: 'Diagnostic Tools', icon: <FaVial /> },
//     { id: 'protective', name: 'Protective Gear', icon: <FaHandSparkles /> }
//   ]

//   const equipment = [
//     {
//       id: 1,
//       name: 'Sterile Surgical Gloves',
//       category: 'consumables',
//       type: 'Medical Consumables',
//       description: 'Premium latex-free surgical gloves, powder-free, medical grade.',
//       specifications: ['Size: S-XL', 'Sterile: Yes', 'Material: Nitrile', 'Pack: 50 pairs'],
//       image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
//       badge: 'Best Seller'
//     },
//     {
//       id: 2,
//       name: 'Disposable Syringes',
//       category: 'consumables',
//       type: 'Medical Consumables',
//       description: 'Single-use sterile syringes with Luer lock, various sizes available.',
//       specifications: ['Size: 2-20ml', 'Sterile: Yes', 'Material: Medical PP', 'Pack: 100 units'],
//       image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&h=300&fit=crop',
//       badge: null
//     },
//     {
//       id: 3,
//       name: 'Rapid Test Kits',
//       category: 'diagnostic',
//       type: 'Diagnostic Tools',
//       description: 'Professional rapid diagnostic test kits for malaria and other tropical diseases.',
//       specifications: ['Type: Malaria', 'Time: 15 min', 'Accuracy: 99%', 'Pack: 25 tests'],
//       image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=300&fit=crop',
//       badge: 'New'
//     },
//     {
//       id: 4,
//       name: 'Infusion Pumps',
//       category: 'hospital',
//       type: 'Hospital Equipment',
//       description: 'Volumetric infusion pump system with programmable delivery rates.',
//       specifications: ['Flow Rate: 0.1-1200ml/h', 'Battery: 8h', 'Alarms: Multiple', 'Display: LCD'],
//       image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop',
//       badge: null
//     },
//     {
//       id: 5,
//       name: 'Patient Monitors',
//       category: 'hospital',
//       type: 'Hospital Equipment',
//       description: 'Multi-parameter patient monitoring system for vital signs tracking.',
//       specifications: ['Parameters: 7', 'Screen: 15"', 'Battery: 4h', 'Connectivity: WiFi'],
//       image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
//       badge: 'Premium'
//     },
//     {
//       id: 6,
//       name: 'Surgical Masks',
//       category: 'protective',
//       type: 'Protective Gear',
//       description: '3-ply surgical face masks with high bacterial filtration efficiency.',
//       specifications: ['BFE: 99%', 'Layers: 3', 'Type: Type IIR', 'Pack: 50 units'],
//       image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop',
//       badge: null
//     },
//     {
//       id: 7,
//       name: 'Portable Ventilators',
//       category: 'hospital',
//       type: 'Hospital Equipment',
//       description: 'Compact ICU-grade ventilator for emergency and transport use.',
//       specifications: ['Modes: 6', 'Weight: 3.5kg', 'Battery: 6h', 'Display: Touch'],
//       image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop',
//       badge: 'Featured'
//     },
//     {
//       id: 8,
//       name: 'Blood Collection Tubes',
//       category: 'diagnostic',
//       type: 'Diagnostic Tools',
//       description: 'Vacuum blood collection tubes with various additives for laboratory testing.',
//       specifications: ['Volume: 2-10ml', 'Additives: Multiple', 'Sterile: Yes', 'Color-coded'],
//       image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&h=300&fit=crop',
//       badge: null
//     },
//     {
//       id: 9,
//       name: 'Defibrillators',
//       category: 'hospital',
//       type: 'Hospital Equipment',
//       description: 'Automated external defibrillator with real-time CPR feedback.',
//       specifications: ['Type: AED', 'Shock: Biphasic', 'Battery: 5 years', 'Weight: 2.4kg'],
//       image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop',
//       badge: null
//     }
//   ]

//   const filteredEquipment = equipment.filter(item => {
//     const matchesCategory = activeCategory === 'all' || item.category === activeCategory
//     const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          item.type.toLowerCase().includes(searchTerm.toLowerCase())
//     return matchesCategory && matchesSearch
//   })

//   return (
//     <>
//       <Helmet>
//         <title>Medical Equipment | AMS - Pharmaceutical & Hospital Supplies</title>
//         <meta name="description" content="Browse AMS's catalog of medical equipment, consumables, and hospital supplies for West African healthcare markets." />
//       </Helmet>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-deep-blue to-premium-blue">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }} />
//         </div>

//         <div className="container relative z-10 px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl text-white"
//           >
//             <motion.span
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30 text-health-green"
//             >
//               <HiCube className="mr-2" />
//               Premium Equipment Catalog
//             </motion.span>
            
//             <h1 className="mb-6 text-5xl font-bold font-sora md:text-6xl">
//               Medical Equipment & Supplies
//             </h1>
            
//             <p className="text-xl leading-relaxed text-gray-300">
//               High-quality medical equipment, consumables, and hospital supplies 
//               sourced from certified manufacturers for African healthcare facilities.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Search & Filter Section */}
//       <section className="sticky z-40 py-12 bg-white border-b border-gray-100 top-20 backdrop-blur-xl bg-white/95">
//         <div className="container px-4 mx-auto">
//           <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
//             {/* Search Bar */}
//             <div className="relative flex-1 max-w-md">
//               <HiSearch className="absolute text-xl text-gray-400 -translate-y-1/2 left-4 top-1/2" />
//               <input
//                 type="text"
//                 placeholder="Search equipment..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full py-3 pl-12 pr-4 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-health-green/20 focus:border-health-green"
//               />
//             </div>

//             {/* Category Filters */}
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveCategory(category.id)}
//                   className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
//                     activeCategory === category.id
//                       ? 'bg-health-green text-white shadow-lg shadow-health-green/25'
//                       : 'bg-gray-100 text-premium-gray hover:bg-gray-200'
//                   }`}
//                 >
//                   <span>{category.icon}</span>
//                   <span className="hidden sm:inline">{category.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Equipment Grid */}
//       <section className="py-20 bg-snow">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             layout
//             className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
//           >
//             <AnimatePresence mode="wait">
//               {filteredEquipment.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                   whileHover={{ y: -8 }}
//                   className="overflow-hidden transition-all duration-500 bg-white group rounded-3xl shadow-glass hover:shadow-premium"
//                 >
//                   {/* Image */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
//                     {item.badge && (
//                       <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
//                         item.badge === 'Premium' || item.badge === 'Featured'
//                           ? 'bg-health-green'
//                           : item.badge === 'Best Seller'
//                           ? 'bg-blue-500'
//                           : 'bg-orange-500'
//                       }`}>
//                         {item.badge}
//                       </span>
//                     )}

//                     <span className="absolute px-3 py-1 text-xs font-medium rounded-lg bottom-4 left-4 bg-white/90 backdrop-blur-sm text-deep-blue">
//                       {item.type}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <h3 className="mb-2 text-xl font-bold font-sora text-deep-blue">
//                       {item.name}
//                     </h3>
//                     <p className="mb-4 text-sm leading-relaxed text-premium-gray">
//                       {item.description}
//                     </p>

//                     {/* Specifications */}
//                     <div className="pt-4 border-t border-gray-100">
//                       <h4 className="flex items-center mb-3 text-xs font-semibold tracking-wider uppercase text-deep-blue">
//                         <HiShieldCheck className="mr-2 text-health-green" />
//                         Specifications
//                       </h4>
//                       <div className="grid grid-cols-2 gap-2">
//                         {item.specifications.map((spec, idx) => (
//                           <div key={idx} className="flex items-center text-xs text-premium-gray">
//                             <span className="w-1.5 h-1.5 bg-health-green rounded-full mr-2" />
//                             {spec}
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Action */}
//                     <div className="flex mt-6 space-x-3">
//                       <button className="flex-1 bg-deep-blue hover:bg-premium-blue text-white py-2.5 rounded-xl text-sm font-medium transition-all duration-300">
//                         Request Quote
//                       </button>
//                       <button className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border border-gray-200 hover:border-health-green rounded-xl hover:text-health-green">
//                         <HiCheckCircle className="text-lg" />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {/* Empty State */}
//           {filteredEquipment.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="py-20 text-center"
//             >
//               <HiCube className="mx-auto mb-4 text-6xl text-gray-300" />
//               <h3 className="mb-2 text-2xl font-bold text-deep-blue">No Equipment Found</h3>
//               <p className="text-premium-gray">Try adjusting your search or filter criteria.</p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Quality Assurance Section */}
//       <section className="relative py-24 overflow-hidden bg-deep-blue">
//         <div className="container relative z-10 px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-16 text-center"
//           >
//             <span className="text-sm font-semibold tracking-wider uppercase text-health-green">
//               Quality Assurance
//             </span>
//             <h2 className="mt-4 mb-6 text-4xl font-bold text-white font-sora md:text-5xl">
//               Certified Quality Standards
//             </h2>
//             <p className="max-w-2xl mx-auto text-lg text-gray-300">
//               All our equipment meets international quality and safety standards
//             </p>
//           </motion.div>

//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               { icon: '🏥', title: 'Medical Grade', desc: 'All products meet medical-grade specifications' },
//               { icon: '✅', title: 'ISO Certified', desc: 'Manufactured under ISO 13485 quality systems' },
//               { icon: '🌍', title: 'WHO Compliant', desc: 'Compliant with WHO essential equipment standards' }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="p-8 text-center"
//               >
//                 <div className="mb-4 text-5xl">{item.icon}</div>
//                 <h3 className="mb-3 text-xl font-bold text-white font-sora">{item.title}</h3>
//                 <p className="text-gray-400">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Equipment

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { 
  HiSearch, 
  HiCheckCircle,
  HiShieldCheck,
  HiCube,
  HiArrowRight
} from 'react-icons/hi'
import { 
  FaSyringe, 
  FaHandSparkles, 
  FaVial, 
  FaStethoscope 
} from 'react-icons/fa'

type EquipmentItemJson = {
  id: number
  name: string
  category: string
  type: string
  description: string
  specifications: string[]
  image: string
  badge: string | null
}

const Equipment = () => {
  const { t, i18n } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categoryIds = ['all', 'consumables', 'hospital', 'diagnostic', 'protective'] as const

  const categories = useMemo(
    () =>
      categoryIds.map((id) => ({
        id,
        name: t(`equipment.categories.${id}`),
        icon:
          id === 'all' ? (
            <HiCube />
          ) : id === 'consumables' ? (
            <FaSyringe />
          ) : id === 'hospital' ? (
            <FaStethoscope />
          ) : id === 'diagnostic' ? (
            <FaVial />
          ) : (
            <FaHandSparkles />
          ),
      })),
    [t, i18n.language]
  )

  const equipment = useMemo(() => {
    const raw = t('equipment.items', { returnObjects: true }) as EquipmentItemJson[]
    return Array.isArray(raw) ? raw : []
  }, [t, i18n.language])

  const filteredEquipment = equipment.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const badgeTone = (badge: string | null) => {
    if (!badge) return ''
    if (badge === 'premium' || badge === 'featured') return 'bg-health-green'
    if (badge === 'bestSeller') return 'bg-blue-500'
    return 'bg-orange-500'
  }

  return (
    <>
      <Helmet>
        <title>{t('equipment.meta.title')}</title>
        <meta name="description" content={t('equipment.meta.description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-deep-blue to-premium-blue">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80')`,
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
              <HiCube className="mr-2" />
              {t('equipment.heroBadge')}
            </motion.span>
            
            <h1 className="mb-6 text-5xl font-bold font-sora md:text-6xl">
              {t('equipment.heroTitle')}
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-300">
              {t('equipment.heroDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="sticky z-40 py-6 bg-white border-b border-gray-100 top-16 md:top-20 backdrop-blur-xl bg-white/95">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            {/* Search Bar - PLUS LONGUE */}
            <div className="relative w-full md:flex-1 md:max-w-2xl lg:max-w-3xl">
              <HiSearch className="absolute text-xl text-gray-400 -translate-y-1/2 left-4 top-1/2" />
              <input
                type="text"
                placeholder={t('equipment.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-health-green/20 focus:border-health-green"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:justify-end">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-health-green text-white shadow-lg shadow-health-green/25'
                      : 'bg-gray-100 text-premium-gray hover:bg-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 md:py-20 bg-snow">
        <div className="container px-4 mx-auto">
          <motion.div
            layout
            className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="wait">
              {filteredEquipment.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden transition-all duration-500 bg-white group rounded-2xl md:rounded-3xl shadow-glass hover:shadow-premium"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden md:h-56">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {item.badge && (
                      <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${badgeTone(item.badge)}`}>
                        {t(`equipment.badges.${item.badge}`)}
                      </span>
                    )}

                    <span className="absolute px-3 py-1 text-xs font-medium rounded-lg bottom-4 left-4 bg-white/90 backdrop-blur-sm text-deep-blue">
                      {item.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="mb-2 text-lg font-bold md:text-xl font-sora text-deep-blue">
                      {item.name}
                    </h3>
                    <p className="mb-4 text-xs leading-relaxed md:text-sm text-premium-gray">
                      {item.description}
                    </p>

                    {/* Specifications */}
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="flex items-center mb-3 text-xs font-semibold tracking-wider uppercase text-deep-blue">
                        <HiShieldCheck className="mr-2 text-health-green" />
                        {t('equipment.specifications')}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {item.specifications.map((spec, idx) => (
                          <div key={idx} className="flex items-center text-xs text-premium-gray">
                            <span className="w-1.5 h-1.5 bg-health-green rounded-full mr-2 flex-shrink-0" />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action - BOUTON REDIRIGE VERS /contact */}
                    <div className="flex mt-6 space-x-3">
                      <Link
                        to="/contact"
                        className="flex-1 flex items-center justify-center space-x-2 bg-deep-blue hover:bg-premium-blue text-white py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group/btn"
                      >
                        <span>{t('equipment.requestQuote')}</span>
                        <HiArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </Link>
                      <button className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-gray-400 transition-all duration-300 border border-gray-200 hover:border-health-green rounded-xl hover:text-health-green">
                        <HiCheckCircle className="text-lg" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredEquipment.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <HiCube className="mx-auto mb-4 text-6xl text-gray-300" />
              <h3 className="mb-2 text-2xl font-bold text-deep-blue">{t('equipment.emptyTitle')}</h3>
              <p className="text-premium-gray">{t('equipment.emptyHint')}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="relative py-24 overflow-hidden bg-deep-blue">
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-health-green">
              {t('equipment.qualityBadge')}
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold text-white font-sora md:text-5xl">
              {t('equipment.qualityTitle')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              {t('equipment.qualitySubtitle')}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {(t('equipment.qualityCards', { returnObjects: true }) as { icon: string; title: string; desc: string }[])
              .filter(Boolean)
              .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 text-center"
              >
                <div className="mb-4 text-5xl">{item.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-white font-sora">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Equipment