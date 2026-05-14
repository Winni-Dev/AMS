// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'
// import { motion, AnimatePresence } from 'framer-motion'
// import { HiMenuAlt3, HiX, HiChevronDown, HiGlobe } from 'react-icons/hi'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [showLangMenu, setShowLangMenu] = useState(false)
//   const { t, i18n } = useTranslation()
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navLinks = [
//     { path: '/', label: t('nav.home') },
//     { path: '/about', label: t('nav.about') },
//     { path: '/services', label: t('nav.services') },
//     { path: '/case-studies', label: t('nav.caseStudies') },
//     { path: '/equipment', label: t('nav.equipment') },
//     { path: '/news', label: t('nav.news') },
//     { path: '/contact', label: t('nav.contact') },
//   ]

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng)
//     setShowLangMenu(false)
//   }

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         isScrolled
//           ? 'bg-deep-blue/95 backdrop-blur-xl shadow-premium'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="container px-4 mx-auto">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-health-green to-blue-500 rounded-xl">
//               <span className="text-xl font-bold text-white font-sora">AMS</span>
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="text-lg font-bold leading-tight text-white font-sora">Africa Med</h1>
//               <p className="text-xs text-gray-300 font-inter">Supply</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="items-center hidden space-x-1 lg:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                   location.pathname === link.path
//                     ? 'text-health-green bg-white/10'
//                     : 'text-gray-200 hover:text-white hover:bg-white/5'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Language Switcher & CTA */}
//           <div className="items-center hidden space-x-4 lg:flex">
//             {/* Language */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowLangMenu(!showLangMenu)}
//                 className="flex items-center px-3 py-2 space-x-1 text-gray-300 transition-colors rounded-lg hover:text-white hover:bg-white/5"
//               >
//                 <HiGlobe className="text-lg" />
//                 <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
//                 <HiChevronDown className="text-sm" />
//               </button>
              
//               <AnimatePresence>
//                 {showLangMenu && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     className="absolute right-0 w-32 mt-2 overflow-hidden bg-white rounded-xl shadow-premium"
//                   >
//                     <button
//                       onClick={() => changeLanguage('en')}
//                       className="block w-full px-4 py-3 text-sm text-left transition-colors hover:bg-gray-50"
//                     >
//                       🇬🇧 English
//                     </button>
//                     <button
//                       onClick={() => changeLanguage('fr')}
//                       className="block w-full px-4 py-3 text-sm text-left transition-colors hover:bg-gray-50"
//                     >
//                       🇫🇷 Français
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link
//               to="/contact"
//               className="bg-health-green text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               {t('hero.cta1')}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-2 text-white transition-colors rounded-lg lg:hidden hover:bg-white/10"
//           >
//             {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="border-t lg:hidden bg-deep-blue/98 backdrop-blur-xl border-white/10"
//             >
//               <div className="py-4 space-y-2">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
//                       location.pathname === link.path
//                         ? 'text-health-green bg-white/10'
//                         : 'text-gray-200 hover:text-white hover:bg-white/5'
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//                 <div className="flex px-4 pt-4 space-x-2">
//                   <button
//                     onClick={() => changeLanguage('en')}
//                     className="flex-1 py-2 text-sm text-white rounded-lg bg-white/10"
//                   >
//                     🇬🇧 EN
//                   </button>
//                   <button
//                     onClick={() => changeLanguage('fr')}
//                     className="flex-1 py-2 text-sm text-white rounded-lg bg-white/10"
//                   >
//                     🇫🇷 FR
//                   </button>
//                 </div>
//                 <div className="px-4 pt-2">
//                   <Link
//                     to="/contact"
//                     onClick={() => setIsOpen(false)}
//                     className="block w-full py-3 font-medium text-center text-white bg-health-green rounded-xl"
//                   >
//                     {t('hero.cta1')}
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   )
// }

// export default Navbar

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiChevronDown, HiGlobe, HiArrowRight } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowLangMenu(false)
  }, [location])

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/case-studies', label: t('nav.caseStudies') },
    { path: '/equipment', label: t('nav.equipment') },
    { path: '/news', label: t('nav.news') },
    { path: '/contact', label: t('nav.contact') },
  ]

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng)
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ams_lang', lng)
    }
    setShowLangMenu(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-deep-blue/95 backdrop-blur-xl shadow-2xl shadow-black/20'
          : 'bg-deep-blue'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo - COULEUR ORIGINALE, PLUS GRAND */}
          <Link 
            to="/" 
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="/favicon.png" 
              alt="AMS Africa Med Supply" 
              className="object-contain w-20 h-20 md:w-28 md:h-28"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const fallback = document.createElement('div')
                fallback.className = 'flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-xl bg-gradient-to-br from-health-green to-blue-500'
                fallback.innerHTML = '<span class="text-xl md:text-2xl font-bold text-white font-sora">AMS</span>'
                target.parentElement?.appendChild(fallback)
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-health-green'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-health-green rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop : Language + CTA */}
          <div className="items-center hidden space-x-3 lg:flex">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1.5 px-3 py-2 text-sm text-gray-300 transition-all duration-300 rounded-lg hover:text-white hover:bg-white/10"
              >
                <HiGlobe className="text-base" />
                <span className="font-medium">{i18n.language.toUpperCase()}</span>
                <HiChevronDown className={`text-xs transition-transform duration-300 ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 overflow-hidden bg-white border border-gray-100 shadow-xl w-36 rounded-xl"
                  >
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 flex items-center space-x-2 ${
                        i18n.language === 'en' ? 'text-health-green font-medium' : 'text-deep-blue'
                      }`}
                    >
                      <span>🇬🇧</span>
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => changeLanguage('fr')}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 flex items-center space-x-2 ${
                        i18n.language === 'fr' ? 'text-health-green font-medium' : 'text-deep-blue'
                      }`}
                    >
                      <span>🇫🇷</span>
                      <span>Français</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-white transition-all duration-300 shadow-lg group bg-health-green hover:bg-green-600 rounded-xl shadow-health-green/20 hover:shadow-xl hover:shadow-health-green/30"
            >
              <span>{t('hero.cta1')}</span>
              <HiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile : Langue + Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Sélecteur de langue sur mobile */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1 px-2 py-1.5 text-xs text-gray-300 transition-all rounded-lg hover:text-white hover:bg-white/10"
              >
                <HiGlobe className="text-sm" />
                <span className="font-medium">{i18n.language.toUpperCase()}</span>
                <HiChevronDown className={`text-xs transition-transform duration-300 ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 w-32 mt-2 overflow-hidden bg-white border border-gray-100 shadow-xl rounded-xl"
                  >
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-gray-50 flex items-center space-x-2 ${
                        i18n.language === 'en' ? 'text-health-green font-medium' : 'text-deep-blue'
                      }`}
                    >
                      <span>🇬🇧</span>
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => changeLanguage('fr')}
                      className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-gray-50 flex items-center space-x-2 ${
                        i18n.language === 'fr' ? 'text-health-green font-medium' : 'text-deep-blue'
                      }`}
                    >
                      <span>🇫🇷</span>
                      <span>Français</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bouton Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-white transition-colors rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="text-xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenuAlt3 className="text-xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="py-3 space-y-1 border-t border-white/10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        location.pathname === link.path
                          ? 'text-health-green bg-health-green/10 border-l-2 border-health-green'
                          : 'text-gray-300 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                      }`}
                    >
                      {link.label}
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="w-1.5 h-1.5 ml-auto rounded-full bg-health-green"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="px-4 pt-3"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-3 space-x-2 text-sm font-medium text-white transition-all duration-300 shadow-lg bg-health-green hover:bg-green-600 rounded-xl shadow-health-green/20"
                  >
                    <span>{t('hero.cta1')}</span>
                    <HiArrowRight className="text-sm" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showLangMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[-1]"
            onClick={() => setShowLangMenu(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar