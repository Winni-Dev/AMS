
// import { useTranslation } from 'react-i18next'
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet-async'
// import { 
//   HiShieldCheck, 
//   HiTruck, 
//   HiGlobeAlt, 
//   HiChartBar,
//   HiArrowRight,
//   HiCheckCircle,
//   HiDownload,
//   HiChevronRight
// } from 'react-icons/hi'
// import { FaPills, FaHeartbeat, FaChild, FaSyringe } from 'react-icons/fa'
// import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
// import L from 'leaflet'

// // Fix pour les icônes Leaflet par défaut
// import 'leaflet/dist/leaflet.css'

// // Supprimer les valeurs par défaut des icônes Leaflet
// delete (L.Icon.Default.prototype as any)._getIconUrl

// // Définir les chemins des icônes par défaut
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
// })

// // Icône personnalisée AMS pour les bureaux principaux
// const amsHeadquartersIcon = new L.DivIcon({
//   className: 'ams-hq-icon',
//   html: `
//     <div style="
//       width: 30px;
//       height: 30px;
//       background: linear-gradient(135deg, #1FA97A, #0D9488);
//       border: 3px solid white;
//       border-radius: 8px;
//       box-shadow: 0 4px 12px rgba(31, 169, 122, 0.5);
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       color: white;
//       font-weight: bold;
//       font-size: 14px;
//       font-family: 'Sora', sans-serif;
//     ">
//       <span style="text-shadow: 0 1px 2px rgba(0,0,0,0.2);">A</span>
//       <div style="
//         position: absolute;
//         bottom: -6px;
//         left: 50%;
//         transform: translateX(-50%);
//         width: 8px;
//         height: 8px;
//         background: #1FA97A;
//         border-radius: 50%;
//         box-shadow: 0 0 10px rgba(31, 169, 122, 0.8);
//         animation: pulse 2s infinite;
//       "></div>
//     </div>
//   `,
//   iconSize: [30, 30],
//   iconAnchor: [15, 15],
//   popupAnchor: [0, -20],
// })

// // Icône personnalisée AMS pour les hubs
// const amsHubIcon = new L.DivIcon({
//   className: 'ams-hub-icon',
//   html: `
//     <div style="
//       width: 20px;
//       height: 20px;
//       background: #123D6A;
//       border: 2px solid white;
//       border-radius: 6px;
//       box-shadow: 0 3px 8px rgba(18, 61, 106, 0.5);
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     ">
//       <div style="
//         width: 6px;
//         height: 6px;
//         background: white;
//         border-radius: 2px;
//       "></div>
//     </div>
//   `,
//   iconSize: [20, 20],
//   iconAnchor: [10, 10],
//   popupAnchor: [0, -15],
// })

// // Icône pour les partenaires
// const amsPartnerIcon = new L.DivIcon({
//   className: 'ams-partner-icon',
//   html: `
//     <div style="
//       width: 16px;
//       height: 16px;
//       background: #6B7280;
//       border: 2px solid white;
//       border-radius: 50%;
//       box-shadow: 0 2px 6px rgba(107, 114, 128, 0.4);
//     "></div>
//   `,
//   iconSize: [16, 16],
//   iconAnchor: [8, 8],
//   popupAnchor: [0, -12],
// })

// // Composant Carte West Africa
// const WestAfricaMap = () => {
//   // Positions des pays avec type
//   const locations = [
//     {
//       name: 'Côte d\'Ivoire - Abidjan',
//       position: { lat: 5.36, lng: -4.008 },
//       type: 'hq',
//       details: 'AMS Headquarters',
//       radius: 120000 // 120km
//     },
//     {
//       name: 'Sénégal - Dakar',
//       position: { lat: 14.6937, lng: -17.4441 },
//       type: 'hub',
//       details: 'Regional Office',
//       radius: 80000
//     },
//     {
//       name: 'Ghana - Accra',
//       position: { lat: 5.6037, lng: -0.1870 },
//       type: 'hub',
//       details: 'Distribution Hub',
//       radius: 90000
//     },
//     {
//       name: 'Togo - Lomé',
//       position: { lat: 6.1319, lng: 1.2228 },
//       type: 'partner',
//       details: 'Partner Network',
//       radius: 50000
//     },
//     {
//       name: 'Bénin - Cotonou',
//       position: { lat: 6.3703, lng: 2.3912 },
//       type: 'partner',
//       details: 'Partner Network',
//       radius: 50000
//     }
//   ]

//   const getIcon = (type: string) => {
//     switch(type) {
//       case 'hq': return amsHeadquartersIcon
//       case 'hub': return amsHubIcon
//       case 'partner': return amsPartnerIcon
//       default: return amsPartnerIcon
//     }
//   }

//   return (
//     <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
//       <MapContainer
//         center={[10, -5]}
//         zoom={5}
//         scrollWheelZoom={false}
//         className="w-full h-full"
//         style={{ background: '#f3f4f6' }}
//         zoomControl={true}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://carto.com/">CARTO</a>'
//           url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//         />
        
//         {locations.map((location, index) => (
//           <div key={index}>
//             {/* Cercle de couverture */}
//             <Circle
//               center={[location.position.lat, location.position.lng]}
//               radius={location.radius}
//               pathOptions={{
//                 color: location.type === 'hq' ? '#1FA97A' : '#123D6A',
//                 fillColor: location.type === 'hq' ? '#1FA97A' : '#123D6A',
//                 fillOpacity: 0.1,
//                 weight: 1,
//                 dashArray: '5, 5'
//               }}
//             />
            
//             {/* Marqueur */}
//             <Marker
//               position={[location.position.lat, location.position.lng]}
//               icon={getIcon(location.type)}
//             >
//               <Popup>
//                 <div className="text-center min-w-[150px]">
//                   <h4 className="mb-1 text-sm font-bold font-sora text-deep-blue">
//                     {location.name}
//                   </h4>
//                   <p className="mb-2 text-xs text-premium-gray">{location.details}</p>
//                   <span className={`
//                     inline-block px-2 py-1 rounded-full text-xs font-medium
//                     ${location.type === 'hq' ? 'bg-health-green/20 text-health-green' : 
//                       location.type === 'hub' ? 'bg-premium-blue/20 text-premium-blue' : 
//                       'bg-gray-200 text-gray-600'}
//                   `}>
//                     {location.type === 'hq' ? '🏢 HQ' : 
//                      location.type === 'hub' ? '🔗 Hub' : 
//                      '🤝 Partner'}
//                   </span>
//                 </div>
//               </Popup>
//             </Marker>
//           </div>
//         ))}
//       </MapContainer>
      
//       {/* Légende */}
//       <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 z-[1000]">
//         <h5 className="mb-3 text-xs font-bold text-deep-blue font-sora">AMS Presence</h5>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-health-green to-green-600">
//               <span className="text-xs font-bold text-white">A</span>
//             </div>
//             <span className="text-xs text-premium-gray">Headquarters</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="flex items-center justify-center w-4 h-4 rounded bg-premium-blue">
//               <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
//             </div>
//             <span className="text-xs text-premium-gray">Regional Hub</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
//             <span className="text-xs text-premium-gray">Partner Network</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Home = () => {
//   const { t } = useTranslation()

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   }

//   const stagger = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   }

//   const whyAmsCards = [
//     {
//       icon: <HiShieldCheck className="text-4xl text-health-green" />,
//       title: t('whyAms.cards.regulatory.title'),
//       description: t('whyAms.cards.regulatory.description'),
//       image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop'
//     },
//     {
//       icon: <HiGlobeAlt className="text-4xl text-health-green" />,
//       title: t('whyAms.cards.distribution.title'),
//       description: t('whyAms.cards.distribution.description'),
//       image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop'
//     },
//     {
//       icon: <HiTruck className="text-4xl text-health-green" />,
//       title: t('whyAms.cards.logistics.title'),
//       description: t('whyAms.cards.logistics.description'),
//       image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop'
//     },
//     {
//       icon: <HiChartBar className="text-4xl text-health-green" />,
//       title: t('whyAms.cards.deployment.title'),
//       description: t('whyAms.cards.deployment.description'),
//       image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
//     }
//   ]

//   const productCategories = [
//     { icon: <FaPills />, name: t('products.categories.antibiotics'), image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
//     { icon: <FaSyringe />, name: t('products.categories.antimalarial'), image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&h=300&fit=crop' },
//     { icon: <FaHeartbeat />, name: t('products.categories.cardiology'), image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
//     { icon: <FaChild />, name: t('products.categories.pediatrics'), image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=300&fit=crop' },
//   ]

//   const countries = [
//     { name: 'Côte d\'Ivoire', flag: '🇨🇮', capital: 'Abidjan' },
//     { name: 'Sénégal', flag: '🇸🇳', capital: 'Dakar' },
//     { name: 'Ghana', flag: '🇬🇭', capital: 'Accra' },
//     { name: 'Togo', flag: '🇹🇬', capital: 'Lomé' },
//     { name: 'Bénin', flag: '🇧🇯', capital: 'Cotonou' }
//   ]

//   return (
//     <>
//       <Helmet>
//         <title>AMS - Africa Med Supply | Connecting Europe, Securing Health in Africa</title>
//         <meta name="description" content="AMS supports European laboratories in structured deployment of pharmaceutical products in West Africa." />
        
//         {/* Styles pour l'animation pulse des icônes */}
//         <style>{`
//           @keyframes pulse {
//             0% { transform: translateX(-50%) scale(0.8); opacity: 0.8; }
//             50% { transform: translateX(-50%) scale(1.5); opacity: 0.3; }
//             100% { transform: translateX(-50%) scale(0.8); opacity: 0.8; }
//           }
//           .leaflet-popup-content-wrapper {
//             border-radius: 12px !important;
//             box-shadow: 0 10px 40px rgba(0,0,0,0.15) !important;
//           }
//           .leaflet-popup-content {
//             margin: 12px 16px !important;
//             font-family: 'Inter', sans-serif !important;
//           }
//           .leaflet-container {
//             font-family: 'Inter', sans-serif !important;
//           }
//         `}</style>
//       </Helmet>

//       {/* Hero Section */}
//       <section className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-br from-deep-blue via-premium-blue to-deep-blue">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }} />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 to-transparent" />

//         {/* Floating Elements */}
//         <motion.div
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute w-64 h-64 rounded-full right-10 top-20 bg-health-green/10 blur-3xl"
//         />
//         <motion.div
//           animate={{ y: [0, 20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute rounded-full left-20 bottom-20 w-96 h-96 bg-blue-500/10 blur-3xl"
//         />

//         <div className="container relative z-10 px-4 mx-auto">
//           <div className="grid items-center gap-12 lg:grid-cols-2">
//             {/* Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-white"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30"
//               >
//                 <span className="w-2 h-2 mr-2 rounded-full bg-health-green animate-pulse" />
//                 <span className="text-sm font-medium text-health-green">{t('hero.badge')}</span>
//               </motion.div>

//               <h1 className="mb-6 text-4xl font-bold leading-tight font-sora md:text-6xl lg:text-7xl">
//                 {t('hero.title')}
//               </h1>
              
//               <p className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-300 md:text-xl">
//                 {t('hero.subtitle')}
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/contact"
//                   className="flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 shadow-lg group bg-health-green hover:bg-green-600 rounded-2xl hover:shadow-2xl hover:shadow-health-green/25"
//                 >
//                   <span>{t('hero.cta1')}</span>
//                   <HiArrowRight className="transition-transform group-hover:translate-x-1" />
//                 </Link>
//                 <a
//                   href="#"
//                   className="flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 border group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 rounded-2xl"
//                 >
//                   <HiDownload className="text-xl" />
//                   <span>{t('hero.cta2')}</span>
//                 </a>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-8 pt-8 mt-12 border-t border-white/10">
//                 <div>
//                   <div className="text-3xl font-bold text-health-green">50+</div>
//                   <div className="mt-1 text-sm text-gray-400">Partner Laboratories</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-health-green">15+</div>
//                   <div className="mt-1 text-sm text-gray-400">Years Experience</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-health-green">5</div>
//                   <div className="mt-1 text-sm text-gray-400">African Countries</div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Hero Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="relative"
//             >
//               <div className="relative overflow-hidden shadow-2xl rounded-3xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop"
//                   alt="Medical logistics Africa"
//                   className="w-full h-[500px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/50 to-transparent" />
//               </div>
              
//               {/* Floating Card */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute p-4 shadow-xl -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="flex items-center justify-center w-12 h-12 bg-health-green/10 rounded-xl">
//                     <HiShieldCheck className="text-2xl text-health-green" />
//                   </div>
//                   <div>
//                     <div className="text-sm font-semibold text-deep-blue">ISO 9001:2015</div>
//                     <div className="text-xs text-premium-gray">Certified Quality</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute -translate-x-1/2 bottom-8 left-1/2"
//         >
//           <div className="flex items-start justify-center w-6 h-10 p-2 border-2 rounded-full border-white/30">
//             <div className="w-1.5 h-3 bg-white/60 rounded-full" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Why AMS Section */}
//       <section className="py-32 bg-snow">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={stagger}
//             className="mb-20 text-center"
//           >
//             <motion.span
//               variants={fadeInUp}
//               className="text-sm font-semibold tracking-wider uppercase text-health-green"
//             >
//               Our Advantages
//             </motion.span>
//             <motion.h2
//               variants={fadeInUp}
//               className="mt-4 mb-6 text-4xl font-bold font-sora md:text-5xl text-deep-blue"
//             >
//               {t('whyAms.title')}
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="max-w-2xl mx-auto text-lg text-premium-gray"
//             >
//               {t('whyAms.subtitle')}
//             </motion.p>
//           </motion.div>

//           <motion.div
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={stagger}
//             className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
//           >
//             {whyAmsCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }}
//                 className="overflow-hidden transition-all duration-500 bg-white group rounded-2xl shadow-glass hover:shadow-premium"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-8">
//                   <div className="mb-4">{card.icon}</div>
//                   <h3 className="mb-3 text-xl font-bold font-sora text-deep-blue">{card.title}</h3>
//                   <p className="leading-relaxed text-premium-gray">{card.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Partnership Model Section */}
//       <section className="relative py-32 overflow-hidden bg-deep-blue">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }} />
//         </div>
        
//         <div className="container relative z-10 px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-20 text-center"
//           >
//             <span className="text-sm font-semibold tracking-wider uppercase text-health-green">
//               Strategic Collaboration
//             </span>
//             <h2 className="mt-4 mb-6 text-4xl font-bold text-white font-sora md:text-5xl">
//               {t('partnership.title')}
//             </h2>
//             <p className="max-w-2xl mx-auto text-lg text-gray-300">
//               {t('partnership.subtitle')}
//             </p>
//           </motion.div>

//           <div className="grid items-center gap-8 lg:grid-cols-3">
//             {/* European Lab */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="p-8 border bg-white/5 backdrop-blur-sm border-white/10 rounded-3xl"
//             >
//               <div className="mb-6 text-center">
//                 <img
//                   src="https://images.unsplash.com/photo-1581093458791-9d42cc3e2e4a?w=200&h=200&fit=crop"
//                   alt="European Lab"
//                   className="object-cover w-20 h-20 mx-auto mb-4 rounded-2xl"
//                 />
//                 <h3 className="text-2xl font-bold text-white font-sora">{t('partnership.laboratory.title')}</h3>
//               </div>
//               <ul className="space-y-3">
//                 {(t('partnership.laboratory.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
//                   <li key={idx} className="flex items-center text-gray-300">
//                     <HiCheckCircle className="flex-shrink-0 mr-3 text-health-green" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Connection Arrow */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="flex justify-center"
//             >
//               <div className="relative">
//                 <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-health-green to-blue-500 animate-float">
//                   <span className="text-3xl font-bold text-white font-sora">AMS</span>
//                 </div>
//                 <div className="absolute inset-0 rounded-full bg-health-green/20 blur-2xl" />
//               </div>
//             </motion.div>

//             {/* AMS */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="p-8 border bg-white/5 backdrop-blur-sm border-white/10 rounded-3xl"
//             >
//               <div className="mb-6 text-center">
//                 <img
//                   src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=200&h=200&fit=crop"
//                   alt="AMS Africa"
//                   className="object-cover w-20 h-20 mx-auto mb-4 rounded-2xl"
//                 />
//                 <h3 className="text-2xl font-bold text-white font-sora">{t('partnership.ams.title')}</h3>
//               </div>
//               <ul className="space-y-3">
//                 {(t('partnership.ams.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
//                   <li key={idx} className="flex items-center text-gray-300">
//                     <HiCheckCircle className="flex-shrink-0 mr-3 text-health-green" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>

//           {/* Flow Diagram */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex items-center justify-center mt-16 space-x-8 text-white"
//           >
//             <div className="text-center">
//               <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 bg-blue-500/20 rounded-2xl">
//                 <span className="text-2xl">🇪🇺</span>
//               </div>
//               <span className="text-sm font-medium">Europe</span>
//             </div>
            
//             <div className="relative flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-health-green">
//               <HiChevronRight className="absolute right-0 text-xl -translate-y-1/2 top-1/2 text-health-green" />
//             </div>
            
//             <div className="text-center">
//               <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 bg-health-green/20 rounded-2xl">
//                 <span className="text-2xl font-bold">AMS</span>
//               </div>
//               <span className="text-sm font-medium">Logistics</span>
//             </div>
            
//             <div className="relative flex-1 h-0.5 bg-gradient-to-r from-health-green to-green-400">
//               <HiChevronRight className="absolute right-0 text-xl text-green-400 -translate-y-1/2 top-1/2" />
//             </div>
            
//             <div className="text-center">
//               <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 bg-green-400/20 rounded-2xl">
//                 <span className="text-2xl">🌍</span>
//               </div>
//               <span className="text-sm font-medium">Africa</span>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Target Products Section */}
//       <section className="py-32 bg-snow">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-20 text-center"
//           >
//             <span className="text-sm font-semibold tracking-wider uppercase text-health-green">
//               Our Expertise
//             </span>
//             <h2 className="mt-4 mb-6 text-4xl font-bold font-sora md:text-5xl text-deep-blue">
//               {t('products.title')}
//             </h2>
//             <p className="max-w-2xl mx-auto text-lg text-premium-gray">
//               {t('products.subtitle')}
//             </p>
//           </motion.div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {productCategories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className="relative overflow-hidden transition-all duration-500 bg-white group rounded-3xl shadow-glass hover:shadow-premium"
//               >
//                 <div className="h-56 overflow-hidden">
//                   <img
//                     src={category.image}
//                     alt={category.name}
//                     className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent" />
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="flex items-center space-x-3">
//                     <div className="flex items-center justify-center w-10 h-10 text-xl bg-health-green/20 backdrop-blur-sm rounded-xl text-health-green">
//                       {category.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-white font-sora">{category.name}</h3>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Africa Expansion Map Section - AVEC CARTE LEAFLET */}
//       <section className="py-32 bg-gradient-to-b from-snow to-gray-50">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-20 text-center"
//           >
//             <span className="text-sm font-semibold tracking-wider uppercase text-health-green">
//               Strategic Presence
//             </span>
//             <h2 className="mt-4 mb-6 text-4xl font-bold font-sora md:text-5xl text-deep-blue">
//               {t('expansion.title')}
//             </h2>
//             <p className="max-w-2xl mx-auto text-lg text-premium-gray">
//               {t('expansion.subtitle')}
//             </p>
//           </motion.div>

//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="relative p-6 bg-white rounded-3xl shadow-premium md:p-8"
//             >
//               {/* Carte Interactive Leaflet */}
//               <div className="relative mb-8">
//                 <WestAfricaMap />
//               </div>

//               {/* Pays avec détails */}
//               <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
//                 {countries.map((country, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ y: -5 }}
//                     className="p-3 text-center transition-all duration-300 rounded-xl bg-gray-50 hover:bg-health-green/5 hover:shadow-md md:p-4"
//                   >
//                     <div className="mb-2 text-2xl">{country.flag}</div>
//                     <div className="text-sm font-semibold text-deep-blue">{country.name}</div>
//                     <div className="mt-1 text-xs text-premium-gray">{country.capital}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-32 overflow-hidden bg-deep-blue">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }} />
//         </div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-health-green/10 rounded-full blur-3xl"
//         />

//         <div className="container relative z-10 px-4 mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-6 text-4xl font-bold text-white font-sora md:text-6xl"
//           >
//             {t('cta.title')}
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="max-w-2xl mx-auto mb-12 text-xl text-gray-300"
//           >
//             {t('cta.subtitle')}
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//           >
//             <Link
//               to="/contact"
//               className="inline-flex items-center px-12 py-5 space-x-3 text-xl font-semibold text-white transition-all duration-300 shadow-2xl group bg-health-green hover:bg-green-600 rounded-2xl hover:shadow-health-green/25"
//             >
//               <span>{t('cta.button')}</span>
//               <HiArrowRight className="text-2xl transition-transform group-hover:translate-x-2" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Home


import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect, useRef } from 'react'
import { 
  HiShieldCheck, 
  HiTruck, 
  HiGlobeAlt, 
  HiChartBar,
  HiArrowRight,
  HiCheckCircle,
  HiChevronRight
} from 'react-icons/hi'
import { FaPills, FaHeartbeat, FaChild, FaSyringe } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix pour les icônes Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Icône personnalisée AMS Headquarters
const amsHeadquartersIcon = new L.DivIcon({
  className: 'ams-hq-icon',
  html: `
    <div style="
      width: 28px;
      height: 28px;
      background: linear-gradient(135deg, #1FA97A, #0D9488);
      border: 3px solid white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(31, 169, 122, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 13px;
      font-family: 'Sora', sans-serif;
      position: relative;
    ">
      <span>A</span>
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -18],
})

// Icône Hub
const amsHubIcon = new L.DivIcon({
  className: 'ams-hub-icon',
  html: `
    <div style="
      width: 18px;
      height: 18px;
      background: #123D6A;
      border: 2px solid white;
      border-radius: 6px;
      box-shadow: 0 3px 8px rgba(18, 61, 106, 0.5);
    "></div>
  `,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
  popupAnchor: [0, -13],
})

// Icône Partner
const amsPartnerIcon = new L.DivIcon({
  className: 'ams-partner-icon',
  html: `
    <div style="
      width: 14px;
      height: 14px;
      background: #6B7280;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(107, 114, 128, 0.4);
    "></div>
  `,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -10],
})

// Composant compteur animé
const AnimatedCounter = ({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          let animationFrame: number

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            const easedProgress = 1 - Math.pow(1 - progress, 3) // Ease out
            setCount(Math.floor(easedProgress * target))
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate)
            }
          }

          animationFrame = requestAnimationFrame(animate)
          return () => cancelAnimationFrame(animationFrame)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

// Composant Carte West Africa
const WestAfricaMap = () => {
  const locations = [
    {
      name: 'Côte d\'Ivoire - Abidjan',
      position: { lat: 5.36, lng: -4.008 },
      type: 'hq',
      details: 'AMS Headquarters',
      radius: 120000
    },
    {
      name: 'Sénégal - Dakar',
      position: { lat: 14.6937, lng: -17.4441 },
      type: 'hub',
      details: 'Regional Office',
      radius: 80000
    },
    {
      name: 'Ghana - Accra',
      position: { lat: 5.6037, lng: -0.1870 },
      type: 'hub',
      details: 'Distribution Hub',
      radius: 90000
    },
    {
      name: 'Togo - Lomé',
      position: { lat: 6.1319, lng: 1.2228 },
      type: 'partner',
      details: 'Partner Network',
      radius: 50000
    },
    {
      name: 'Bénin - Cotonou',
      position: { lat: 6.3703, lng: 2.3912 },
      type: 'partner',
      details: 'Partner Network',
      radius: 50000
    }
  ]

  const getIcon = (type: string) => {
    switch(type) {
      case 'hq': return amsHeadquartersIcon
      case 'hub': return amsHubIcon
      case 'partner': return amsPartnerIcon
      default: return amsPartnerIcon
    }
  }

  return (
    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg z-0 relative">
      <MapContainer
        center={[10, -5]}
        zoom={5}
        scrollWheelZoom={false}
        className="z-0 w-full h-full"
        style={{ background: '#f3f4f6' }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        {locations.map((location, index) => (
          <div key={index}>
            <Circle
              center={[location.position.lat, location.position.lng]}
              radius={location.radius}
              pathOptions={{
                color: location.type === 'hq' ? '#1FA97A' : '#123D6A',
                fillColor: location.type === 'hq' ? '#1FA97A' : '#123D6A',
                fillOpacity: 0.08,
                weight: 1,
                dashArray: '5, 5'
              }}
            />
            
            <Marker
              position={[location.position.lat, location.position.lng]}
              icon={getIcon(location.type)}
            >
              <Popup>
                <div className="text-center min-w-[150px]">
                  <h4 className="mb-1 text-xs font-bold font-sora text-deep-blue">
                    {location.name}
                  </h4>
                  <p className="mb-2 text-xs text-premium-gray">{location.details}</p>
                  <span className={`
                    inline-block px-2 py-0.5 rounded-full text-xs font-medium
                    ${location.type === 'hq' ? 'bg-health-green/20 text-health-green' : 
                      location.type === 'hub' ? 'bg-premium-blue/20 text-premium-blue' : 
                      'bg-gray-200 text-gray-600'}
                  `}>
                    {location.type === 'hq' ? '🏢 HQ' : 
                     location.type === 'hub' ? '🔗 Hub' : 
                     '🤝 Partner'}
                  </span>
                </div>
              </Popup>
            
            </Marker>
          </div>
        ))}
      </MapContainer>
    </div>
  )
}

const Home = () => {
  const { t } = useTranslation()

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const whyAmsCards = [
    {
      icon: <HiShieldCheck className="text-3xl text-health-green" />,
      title: t('whyAms.cards.regulatory.title'),
      description: t('whyAms.cards.regulatory.description'),
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop'
    },
    {
      icon: <HiGlobeAlt className="text-3xl text-health-green" />,
      title: t('whyAms.cards.distribution.title'),
      description: t('whyAms.cards.distribution.description'),
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop'
    },
    {
      icon: <HiTruck className="text-3xl text-health-green" />,
      title: t('whyAms.cards.logistics.title'),
      description: t('whyAms.cards.logistics.description'),
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop'
    },
    {
      icon: <HiChartBar className="text-3xl text-health-green" />,
      title: t('whyAms.cards.deployment.title'),
      description: t('whyAms.cards.deployment.description'),
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
    }
  ]

  const productCategories = [
    { icon: <FaPills />, name: t('products.categories.antibiotics'), image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
    { icon: <FaSyringe />, name: t('products.categories.antimalarial'), image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&h=300&fit=crop' },
    { icon: <FaHeartbeat />, name: t('products.categories.cardiology'), image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
    { icon: <FaChild />, name: t('products.categories.pediatrics'), image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=300&fit=crop' },
  ]

  const countries = [
    { name: 'Côte d\'Ivoire', flag: '🇨🇮', capital: 'Abidjan' },
    { name: 'Sénégal', flag: '🇸🇳', capital: 'Dakar' },
    { name: 'Ghana', flag: '🇬🇭', capital: 'Accra' },
    { name: 'Togo', flag: '🇹🇬', capital: 'Lomé' },
    { name: 'Bénin', flag: '🇧🇳', capital: 'Cotonou' }
  ]

  return (
    <>
      <Helmet>
        <title>{t('home.meta.title')}</title>
        <meta name="description" content={t('home.meta.description')} />
        <style>{`
          .leaflet-container {
            z-index: 0 !important;
            font-family: 'Inter', sans-serif !important;
          }
          .leaflet-control-zoom {
            z-index: 0 !important;
          }
          .leaflet-pane {
            z-index: 0 !important;
          }
          .leaflet-popup-content-wrapper {
            border-radius: 12px !important;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15) !important;
          }
          .leaflet-popup-content {
            margin: 10px 14px !important;
            font-family: 'Inter', sans-serif !important;
          }
        `}</style>
      </Helmet>

      
    {/* Hero Section */}
<section className="relative flex items-center min-h-screen py-20 overflow-hidden md:pt-24 bg-gradient-to-br from-deep-blue via-premium-blue to-deep-blue">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} />
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 to-transparent" />

  {/* Floating Elements - STATIQUES */}
  <div className="absolute rounded-full w-96 h-96 -top-20 -right-20 bg-health-green/5 blur-3xl" />
  <div className="absolute rounded-full -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-500/5 blur-3xl" />

  <div className="container relative z-10 px-4 mx-auto">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="text-white"
      >
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center px-3 py-1.5 mb-5 border rounded-full bg-health-green/20 backdrop-blur-sm border-health-green/30"
        > */}
          {/* <span className="w-1.5 h-1.5 mr-2 rounded-full bg-health-green animate-pulse" /> */}
          {/* <span className="text-xs font-medium text-health-green">Premium Pharmaceutical Logistics</span> */}
        {/* </motion.div> */}

        {/* TITRE RÉDUIT - de text-6xl lg:text-7xl à text-4xl lg:text-5xl */}
        <h1 className="mb-5 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl font-sora">
          {t('hero.title')}
        </h1>
        
        {/* Sous-titre réduit */}
        <p className="max-w-2xl text-sm leading-relaxed text-gray-300 mb-7 md:text-base">
          {t('hero.subtitle')}
        </p>

        {/* Bouton */}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="flex items-center px-5 py-2.5 space-x-2 text-sm font-semibold text-white transition-all duration-300 shadow-lg group bg-health-green hover:bg-green-600 rounded-xl hover:shadow-2xl hover:shadow-health-green/25 md:px-6 md:py-3 md:text-base"
          >
            <span>{t('hero.cta1')}</span>
            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Stats avec compteurs dynamiques */}
        <div className="grid grid-cols-3 gap-6 pt-6 mt-10 border-t border-white/10">
          <div>
            <div className="text-xl font-bold md:text-2xl text-health-green">
              <AnimatedCounter target={50} suffix="+" />
            </div>
            <div className="mt-1 text-xs text-gray-400">{t('stats.partners')}</div>
          </div>
          <div>
            <div className="text-xl font-bold md:text-2xl text-health-green">
              <AnimatedCounter target={15} suffix="+" />
            </div>
            <div className="mt-1 text-xs text-gray-400">{t('stats.experience')}</div>
          </div>
          <div>
            <div className="text-xl font-bold md:text-2xl text-health-green">
              <AnimatedCounter target={5} />
            </div>
            <div className="mt-1 text-xs text-gray-400">{t('stats.countries')}</div>
          </div>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="relative overflow-hidden shadow-2xl rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop"
            alt="Medical logistics Africa"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/50 to-transparent" />
        </div>
        
        {/* Floating Card - Statique */}
        <div className="absolute p-3 shadow-xl -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-xl md:p-3.5 md:-bottom-5 md:-left-5 md:rounded-2xl">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="flex items-center justify-center rounded-lg w-9 h-9 md:w-10 md:h-10 bg-health-green/10 md:rounded-xl">
              <HiShieldCheck className="text-lg md:text-xl text-health-green" />
            </div>
            <div>
              <div className="text-xs font-semibold md:text-sm text-deep-blue">ISO 9001:2015</div>
              <div className="text-xs text-premium-gray">Certified Quality</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Why AMS Section */}
      <section className="py-24 md:py-32 bg-snow">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16 text-center md:mb-20"
          >
            <motion.span
              variants={fadeInUp}
              className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green"
            >
              {t('whyAms.badge')}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-3 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-sora text-deep-blue md:mt-4 md:mb-6"
            >
              {t('whyAms.title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-sm md:text-base text-premium-gray"
            >
              {t('whyAms.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {whyAmsCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="overflow-hidden transition-all bg-white duration-400 group rounded-2xl shadow-glass hover:shadow-premium"
              >
                <div className="h-40 overflow-hidden md:h-48">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="mb-3">{card.icon}</div>
                  <h3 className="mb-2 text-base font-bold md:text-lg font-sora text-deep-blue">{card.title}</h3>
                  <p className="text-sm leading-relaxed md:text-base text-premium-gray">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Model Section */}
      <section className="relative py-24 overflow-hidden md:py-32 bg-deep-blue">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:mb-20"
          >
            <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
              {t('partnership.badge')}
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl font-sora md:mt-4 md:mb-6">
              {t('partnership.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-300 md:text-base">
              {t('partnership.subtitle')}
            </p>
          </motion.div>

          <div className="grid items-center gap-6 lg:gap-8 lg:grid-cols-3">
            {/* European Lab */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 border md:p-8 bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl md:rounded-3xl"
            >
              <div className="mb-5 text-center">
                {/* Image corrigée avec fallback */}
                <div className="w-16 h-16 mx-auto mb-3 overflow-hidden rounded-xl md:w-20 md:h-20 md:mb-4 md:rounded-2xl bg-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-ab3b7c2b0a1b?w=200&h=200&fit=crop&crop=faces"
                    alt="European Laboratory"
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback si l'image ne charge pas
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-2xl">🔬</div>'
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl font-sora">{t('partnership.laboratory.title')}</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {(t('partnership.laboratory.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300 md:text-base">
                    <HiCheckCircle className="flex-shrink-0 mr-2 text-sm md:text-base text-health-green md:mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Logo AMS central */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center py-6 lg:py-0"
            >
              <div className="relative">
                <div className="flex items-center justify-center w-24 h-24 rounded-full md:w-32 md:h-32 bg-gradient-to-br from-health-green to-blue-500">
                  <span className="text-2xl font-bold text-white md:text-3xl font-sora">AMS</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-health-green/20 blur-2xl" />
              </div>
            </motion.div>

            {/* AMS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 border md:p-8 bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl md:rounded-3xl"
            >
              <div className="mb-5 text-center">
                <div className="w-16 h-16 mx-auto mb-3 overflow-hidden rounded-xl md:w-20 md:h-20 md:mb-4 md:rounded-2xl bg-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=200&fit=crop"
                    alt="AMS Africa"
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-2xl">🌍</div>'
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl font-sora">{t('partnership.ams.title')}</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {(t('partnership.ams.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300 md:text-base">
                    <HiCheckCircle className="flex-shrink-0 mr-2 text-sm md:text-base text-health-green md:mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mt-12 space-x-4 text-white md:mt-16 md:space-x-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-1 rounded-xl w-14 h-14 md:w-16 md:h-16 bg-blue-500/20 md:mb-2 md:rounded-2xl">
                <span className="text-xl md:text-2xl">🇪🇺</span>
              </div>
              <span className="text-xs font-medium md:text-sm">Europe</span>
            </div>
            
            <div className="relative flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-health-green">
              <HiChevronRight className="absolute right-0 text-lg -translate-y-1/2 md:text-xl top-1/2 text-health-green" />
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-1 rounded-xl w-14 h-14 md:w-16 md:h-16 bg-health-green/20 md:mb-2 md:rounded-2xl">
                <span className="text-lg font-bold md:text-2xl">AMS</span>
              </div>
              <span className="text-xs font-medium md:text-sm">Logistics</span>
            </div>
            
            <div className="relative flex-1 h-0.5 bg-gradient-to-r from-health-green to-green-400">
              <HiChevronRight className="absolute right-0 text-lg text-green-400 -translate-y-1/2 md:text-xl top-1/2" />
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-1 rounded-xl w-14 h-14 md:w-16 md:h-16 bg-green-400/20 md:mb-2 md:rounded-2xl">
                <span className="text-xl md:text-2xl">🌍</span>
              </div>
              <span className="text-xs font-medium md:text-sm">Africa</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Products Section */}
      <section className="py-24 md:py-32 bg-snow">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:mb-20"
          >
            <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
              {t('products.badge')}
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-sora text-deep-blue md:mt-4 md:mb-6">
              {t('products.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-premium-gray">
              {t('products.subtitle')}
            </p>
          </motion.div>

          <div className="grid gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden transition-all bg-white duration-400 group rounded-2xl shadow-glass hover:shadow-premium"
              >
                <div className="overflow-hidden h-44 md:h-52">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 text-lg rounded-lg md:w-10 md:h-10 bg-health-green/20 backdrop-blur-sm md:rounded-xl text-health-green">
                      {category.icon}
                    </div>
                    <h3 className="text-base font-bold text-white md:text-lg font-sora">{category.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Africa Expansion Map Section - CARTE LEAFLET */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-snow to-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:mb-20"
          >
            <span className="text-xs font-semibold tracking-wider uppercase md:text-sm text-health-green">
              {t('expansion.badge')}
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-sora text-deep-blue md:mt-4 md:mb-6">
              {t('expansion.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-premium-gray">
              {t('expansion.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-4 bg-white md:p-6 rounded-2xl md:rounded-3xl shadow-premium"
            >
              {/* Carte Interactive Leaflet - z-index corrigé */}
              <div className="relative mb-6 overflow-hidden rounded-xl md:rounded-2xl" style={{ zIndex: 0 }}>
                <WestAfricaMap />
              </div>

              {/* Pays avec détails */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
                {countries.map((country, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="p-2 text-center transition-all duration-300 rounded-lg md:p-3 bg-gray-50 hover:bg-health-green/5 hover:shadow-md md:rounded-xl"
                  >
                    <div className="mb-1 text-xl md:text-2xl">{country.flag}</div>
                    <div className="text-xs font-semibold md:text-sm text-deep-blue">{country.name}</div>
                    <div className="mt-0.5 text-xs text-premium-gray">{country.capital}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden md:py-32 bg-deep-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-3xl font-bold text-white md:text-5xl lg:text-6xl font-sora md:mb-6"
          >
            {t('cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-2xl mx-auto mb-8 text-base text-gray-300 md:text-lg md:mb-12"
          >
            {t('cta.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 space-x-2 text-base font-semibold text-white transition-all duration-300 shadow-2xl md:px-10 md:py-4 md:text-lg group bg-health-green hover:bg-green-600 rounded-xl md:rounded-2xl hover:shadow-health-green/25"
            >
              <span>{t('cta.button')}</span>
              <HiArrowRight className="text-xl transition-transform md:text-2xl group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home