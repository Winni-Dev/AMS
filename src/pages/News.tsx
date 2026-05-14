import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { 
  HiSearch, 
  HiCalendar, 
  HiArrowRight, 
  HiClock
} from 'react-icons/hi'

type NewsItem = {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  featured: boolean
}

const News = () => {
  const { t, i18n } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categoryIds = ['all', 'industry', 'company', 'partnerships', 'health'] as const

  const categories = useMemo(
    () => categoryIds.map((id) => ({ id, name: t(`news.categories.${id}`) })),
    [t, i18n.language]
  )

  const articles = useMemo(() => {
    const raw = t('news.items', { returnObjects: true }) as NewsItem[]
    return Array.isArray(raw) ? raw : []
  }, [t, i18n.language])

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter(a => a.featured)
  const regularArticles = filteredArticles.filter(a => !a.featured)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const locale = i18n.language?.startsWith('fr') ? 'fr-FR' : 'en-US'
    return new Date(dateString).toLocaleDateString(locale, options)
  }

  const categoryLabel = (cat: string) => t(`news.categories.${cat as 'industry' | 'company' | 'partnerships' | 'health'}`)

  return (
    <>
      <Helmet>
        <title>{t('news.meta.title')}</title>
        <meta name="description" content={t('news.meta.description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-deep-blue to-premium-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1920&q=80')`,
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
              {t('news.badge')}
            </motion.span>
            
            <h1 className="mb-6 text-5xl font-bold font-sora md:text-6xl">
              {t('news.title')}
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-300">
              {t('news.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky z-40 py-8 bg-white border-b border-gray-100 top-20 backdrop-blur-xl bg-white/95">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative flex-1 max-w-md">
              <HiSearch className="absolute text-xl text-gray-400 -translate-y-1/2 left-4 top-1/2" />
              <input
                type="text"
                placeholder={t('news.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-health-green/20 focus:border-health-green"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-health-green text-white shadow-lg'
                      : 'bg-gray-100 text-premium-gray hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20 bg-snow">
        <div className="container px-4 mx-auto">
          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-16">
              <h2 className="flex items-center mb-8 text-2xl font-bold font-sora text-deep-blue">
                <span className="w-8 h-1 mr-3 rounded-full bg-health-green" />
                {t('news.featuredStories')}
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <AnimatePresence mode="wait">
                  {featuredArticles.map((article) => (
                    <motion.article
                      key={article.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="overflow-hidden transition-all duration-500 bg-white group rounded-3xl shadow-glass hover:shadow-premium"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent" />
                        <span className="absolute px-3 py-1 text-xs font-semibold text-white capitalize rounded-full top-4 left-4 bg-health-green">
                          {categoryLabel(article.category)}
                        </span>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center mb-4 space-x-4 text-sm text-premium-gray">
                          <span className="flex items-center">
                            <HiCalendar className="mr-1" />
                            {formatDate(article.date)}
                          </span>
                          <span className="flex items-center">
                            <HiClock className="mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        
                        <h3 className="mb-3 text-2xl font-bold transition-colors font-sora text-deep-blue group-hover:text-health-green">
                          {article.title}
                        </h3>
                        
                        <p className="mb-6 leading-relaxed text-premium-gray">
                          {article.excerpt}
                        </p>
                        
                        <Link
                          to={`/news/${article.id}`}
                          className="inline-flex items-center space-x-2 font-semibold transition-colors group text-health-green hover:text-green-600"
                        >
                          <span>{t('news.readArticle')}</span>
                          <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* All Articles */}
          <div>
            <h2 className="flex items-center mb-8 text-2xl font-bold font-sora text-deep-blue">
              <span className="w-8 h-1 mr-3 rounded-full bg-health-green" />
              {t('news.latestArticles')}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="wait">
                {regularArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="overflow-hidden transition-all duration-500 bg-white group rounded-2xl shadow-glass hover:shadow-premium"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/50 to-transparent" />
                      <span className="absolute px-2 py-1 text-xs font-medium capitalize rounded-lg top-3 left-3 bg-white/90 backdrop-blur-sm text-deep-blue">
                        {categoryLabel(article.category)}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3 space-x-3 text-xs text-premium-gray">
                        <span className="flex items-center">
                          <HiCalendar className="mr-1" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center">
                          <HiClock className="mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="mb-2 text-lg font-bold transition-colors font-sora text-deep-blue group-hover:text-health-green line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="mb-4 text-sm leading-relaxed text-premium-gray line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <Link
                        to={`/news/${article.id}`}
                        className="inline-flex items-center space-x-1 text-sm font-semibold transition-colors text-health-green hover:text-green-600"
                      >
                        <span>{t('news.readMore')}</span>
                        <HiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <HiSearch className="mx-auto mb-4 text-6xl text-gray-300" />
                <h3 className="mb-2 text-2xl font-bold text-deep-blue">{t('news.noArticlesTitle')}</h3>
                <p className="text-premium-gray">{t('news.noArticlesHint')}</p>
              </motion.div>
            )}
          </div>

          {/* Load More */}
          {filteredArticles.length > 6 && (
            <div className="mt-12 text-center">
              <button className="px-8 py-3 font-medium text-white transition-all duration-300 shadow-lg bg-deep-blue hover:bg-premium-blue rounded-xl hover:shadow-xl">
                {t('news.loadMore')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="relative py-24 overflow-hidden bg-deep-blue">
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white font-sora">
              Stay Updated
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Subscribe to our newsletter for the latest pharmaceutical industry insights and AMS updates.
            </p>
            
            <div className="flex max-w-md gap-3 mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-white placeholder-gray-400 transition-all border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl focus:outline-none focus:border-health-green"
              />
              <button className="px-6 py-3 font-medium text-white transition-all duration-300 bg-health-green hover:bg-green-600 rounded-xl">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </>
  )
}

export default News