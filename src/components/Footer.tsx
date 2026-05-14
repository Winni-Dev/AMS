// import { Link } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'
// import { motion } from 'framer-motion'
// import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
// import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

// const Footer = () => {
//   const { t } = useTranslation()
//   const currentYear = new Date().getFullYear()

//   const quickLinks = [
//     { path: '/', label: 'nav.home' },
//     { path: '/about', label: 'nav.about' },
//     { path: '/services', label: 'nav.services' },
//     { path: '/case-studies', label: 'nav.caseStudies' },
//     { path: '/contact', label: 'nav.contact' },
//   ]

//   return (
//     <footer className="border-t bg-deep-blue border-white/5">
//       {/* Main Footer */}
//       <div className="container px-4 py-20 mx-auto">
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <Link to="/" className="flex items-center mb-6 space-x-3">
//               <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-health-green to-blue-500 rounded-xl">
//                 <span className="text-xl font-bold text-white font-sora">AMS</span>
//               </div>
//               <div>
//                 <h3 className="font-bold text-white font-sora">Africa Med</h3>
//                 <p className="text-xs text-gray-400">Supply</p>
//               </div>
//             </Link>
//             <p className="mb-6 leading-relaxed text-gray-400">
//               {t('footer.slogan')}
//             </p>
//             <div className="flex space-x-3">
//               <a href="#" className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 bg-white/5 hover:bg-health-green/20 rounded-xl hover:text-health-green">
//                 <FaLinkedin className="text-lg" />
//               </a>
//               <a href="#" className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 bg-white/5 hover:bg-health-green/20 rounded-xl hover:text-health-green">
//                 <FaTwitter className="text-lg" />
//               </a>
//               <a href="#" className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 bg-white/5 hover:bg-health-green/20 rounded-xl hover:text-health-green">
//                 <FaYoutube className="text-lg" />
//               </a>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//           >
//             <h4 className="mb-6 text-lg font-bold text-white font-sora">
//               {t('footer.quickLinks')}
//             </h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     className="text-gray-400 transition-colors duration-300 hover:text-health-green"
//                   >
//                     {t(link.label)}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <h4 className="mb-6 text-lg font-bold text-white font-sora">
//               Services
//             </h4>
//             <ul className="space-y-3">
//               <li><span className="text-gray-400">Regulatory Affairs</span></li>
//               <li><span className="text-gray-400">Distribution Network</span></li>
//               <li><span className="text-gray-400">Medical Logistics</span></li>
//               <li><span className="text-gray-400">Market Deployment</span></li>
//               <li><span className="text-gray-400">Supply Chain Management</span></li>
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//           >
//             <h4 className="mb-6 text-lg font-bold text-white font-sora">
//               {t('footer.contact')}
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start space-x-3">
//                 <HiLocationMarker className="mt-1 text-health-green" />
//                 <span className="text-gray-400">
//                   Abidjan, Côte d'Ivoire<br />
//                   West Africa
//                 </span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <HiMail className="text-health-green" />
//                 <a href="mailto:contact@ams-africa.com" className="text-gray-400 transition-colors hover:text-health-green">
//                   contact@ams-africa.com
//                 </a>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <HiPhone className="text-health-green" />
//                 <a href="tel:+22500000000" className="text-gray-400 transition-colors hover:text-health-green">
//                   +225 XX XX XX XX XX
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/5">
//         <div className="container px-4 py-6 mx-auto">
//           <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
//             <p className="text-sm text-gray-500">
//               {t('footer.copyright').replace('2024', currentYear.toString())}
//             </p>
//             <div className="flex space-x-6">
//               <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/about', label: 'nav.about' },
    { path: '/services', label: 'nav.services' },
    { path: '/case-studies', label: 'nav.caseStudies' },
    { path: '/equipment', label: 'nav.equipment' },
    { path: '/news', label: 'nav.news' },
    { path: '/contact', label: 'nav.contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="relative border-t bg-deep-blue border-white/5">
      {/* Ligne décorative supérieure */}
      <div className="h-1 opacity-50 bg-gradient-to-r from-health-green via-blue-500 to-health-green" />

      {/* Main Footer */}
      <div className="container px-4 py-16 mx-auto md:py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand - Logo uniquement, pas de texte */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="inline-block mb-5 transition-transform duration-300 hover:scale-105">
              <img 
                src="/favicon.png" 
                alt="AMS Africa Med Supply" 
                className="object-contain w-14 h-14 md:w-16 md:h-16"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const fallback = document.createElement('div')
                  fallback.className = 'flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-health-green to-blue-500'
                  fallback.innerHTML = '<span class="text-xl md:text-2xl font-bold text-white font-sora">AMS</span>'
                  target.parentElement?.appendChild(fallback)
                }}
              />
            </Link>
            <p className="max-w-xs mb-5 text-sm leading-relaxed text-gray-400">
              {t('footer.slogan')}
            </p>
            {/* <div className="flex space-x-2.5">
              <a 
                href="#" 
                className="flex items-center justify-center text-gray-400 transition-all duration-300 rounded-lg w-9 h-9 bg-white/5 hover:bg-health-green hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center text-gray-400 transition-all duration-300 rounded-lg w-9 h-9 bg-white/5 hover:bg-health-green hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter className="text-base" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center text-gray-400 transition-all duration-300 rounded-lg w-9 h-9 bg-white/5 hover:bg-health-green hover:text-white"
                aria-label="YouTube"
              >
                <FaYoutube className="text-base" />
              </a>
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-5 text-sm font-bold tracking-wider text-white uppercase font-sora">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-sm text-gray-400 transition-all duration-300 hover:text-health-green hover:translate-x-1 group"
                  >
                    <span className="w-0 h-0.5 bg-health-green mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2 rounded-full" />
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-5 text-sm font-bold tracking-wider text-white uppercase font-sora">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2.5">
              {(t('footer.serviceList', { returnObjects: true }) as string[]).map((service: string, index: number) => (
                <li key={index}>
                  <span className="inline-flex items-center text-sm text-gray-400 transition-all duration-300 cursor-default hover:text-health-green hover:translate-x-1 group">
                    <span className="w-0 h-0.5 bg-health-green mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-5 text-sm font-bold tracking-wider text-white uppercase font-sora">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="flex items-center justify-center w-8 h-8 mt-0.5 rounded-lg bg-health-green/10 group-hover:bg-health-green/20 transition-colors flex-shrink-0">
                  <HiLocationMarker className="text-sm text-health-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">{t('footer.address')}, {t('footer.contact')}</p>
                  <p className="text-xs text-gray-500">{t('footer.region')}</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition-colors rounded-lg bg-health-green/10 group-hover:bg-health-green/20">
                  <HiMail className="text-sm text-health-green" />
                </div>
                <a 
                  href="mailto:contact@ams-africa.com" 
                  className="text-sm text-gray-400 transition-colors hover:text-health-green"
                >
                  contact@ams-africa.com
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition-colors rounded-lg bg-health-green/10 group-hover:bg-health-green/20">
                  <HiPhone className="text-sm text-health-green" />
                </div>
                <a 
                  href="tel:+22500000000" 
                  className="text-sm text-gray-400 transition-colors hover:text-health-green"
                >
                  +225 XX XX XX XX XX
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container px-4 py-5 mx-auto">
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0">
            <p className="text-xs text-gray-500">
              © {currentYear} AMS - Africa Med Supply. {t('footer.rightsReserved')}
            </p>
            <div className="flex items-center space-x-5">
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-gray-300">
                {t('footer.privacyPolicy')}
              </a>
              <span className="text-gray-700">·</span>
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-gray-300">
                {t('footer.termsOfService')}
              </a>
              <span className="text-gray-700">·</span>
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-gray-300">
                {t('footer.cookiePolicy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer