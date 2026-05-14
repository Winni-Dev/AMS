import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const caseStudiesEn = {
  badge: 'Success Stories',
  title: 'Case Studies',
  subtitle: 'Success Stories from African Markets',
  meta: {
    title: 'Case Studies | AMS - Pharmaceutical Deployment Success Stories',
    description:
      "Explore AMS's successful pharmaceutical deployment case studies in West Africa. Real results in regulatory, distribution, and logistics.",
  },
  filter: {
    all: 'All Studies',
    pharmaceutical: 'Pharmaceutical',
    medical: 'Medical Devices',
    logistics: 'Logistics',
  },
  hero: {
    badge: 'Proven Results',
    description:
      'Discover how AMS has successfully deployed pharmaceutical products across West Africa, delivering measurable results for European laboratories.',
  },
  stats: [
    { value: '50', suffix: '+', label: 'Successful Deployments' },
    { value: '99.9', suffix: '%', label: 'Success Rate' },
    { value: '15', suffix: '+', label: 'Years Experience' },
    { value: '5', suffix: '', label: 'Countries' },
  ],
  labels: {
    client: 'Client:',
    challenge: 'Challenge',
    solution: 'Solution',
    projectTimeline: 'Project Timeline',
    discussProject: 'Discuss a Similar Project',
    ongoing: 'Ongoing',
  },
  cases: [
    {
      id: 'antimalarial-deployment',
      title: 'Antimalarial Product Deployment',
      client: 'Major European Pharmaceutical Laboratory',
      challenge:
        "Deploy a new antimalarial treatment across Côte d'Ivoire with full regulatory compliance and rapid market penetration.",
      solution:
        'Implemented an integrated regulatory-to-distribution pathway, achieving product registration in record time and establishing a nationwide distribution network.',
      category: 'Pharmaceutical',
      results: [
        { label: 'Time to Market', value: '6', suffix: ' months', isNumeric: true },
        { label: 'Coverage', value: '85', suffix: '%', isNumeric: true },
        { label: 'Patients Reached', value: '500', suffix: 'K+', isNumeric: true },
        { label: 'Growth Rate', value: '+240', suffix: '%', isNumeric: false },
      ],
      timeline: [
        { phase: 'Regulatory Approval', duration: '2 months', status: 'completed' },
        { phase: 'Distribution Setup', duration: '1.5 months', status: 'completed' },
        { phase: 'Market Launch', duration: '1 month', status: 'completed' },
        { phase: 'Scale & Optimize', duration: 'Ongoing', status: 'active' },
      ],
    },
    {
      id: 'injectable-distribution',
      title: 'National Distribution of Injectable Products',
      client: 'European Biotech Company',
      challenge:
        'Establish cold chain distribution for temperature-sensitive injectable products across multiple regions in West Africa.',
      solution:
        'Deployed certified cold chain infrastructure with real-time temperature monitoring and last-mile delivery capabilities.',
      category: 'Logistics',
      results: [
        { label: 'Temperature Compliance', value: '99.9', suffix: '%', isNumeric: true },
        { label: 'Delivery Points', value: '200', suffix: '+', isNumeric: true },
        { label: 'Regions Covered', value: '12', suffix: '', isNumeric: true },
        { label: 'Product Integrity', value: '100', suffix: '%', isNumeric: true },
      ],
      timeline: [
        { phase: 'Infrastructure Setup', duration: '3 months', status: 'completed' },
        { phase: 'Team Training', duration: '1 month', status: 'completed' },
        { phase: 'Pilot Launch', duration: '2 months', status: 'completed' },
        { phase: 'Full Deployment', duration: '3 months', status: 'completed' },
      ],
    },
    {
      id: 'medical-devices-supply-chain',
      title: 'Medical Devices Supply Chain',
      client: 'International Medical Device Manufacturer',
      challenge:
        'Create an efficient supply chain for medical devices with complex import requirements and hospital distribution needs.',
      solution:
        'Developed a comprehensive supply chain solution including customs clearance, warehousing, and direct hospital delivery.',
      category: 'Medical Devices',
      results: [
        { label: 'Cost Reduction', value: '-30', suffix: '%', isNumeric: false },
        { label: 'Hospitals Served', value: '50', suffix: '+', isNumeric: true },
        { label: 'Delivery Time', value: '-45', suffix: '%', isNumeric: false },
        { label: 'Satisfaction', value: '98', suffix: '%', isNumeric: true },
      ],
      timeline: [
        { phase: 'Supply Chain Audit', duration: '1 month', status: 'completed' },
        { phase: 'Process Optimization', duration: '2 months', status: 'completed' },
        { phase: 'Implementation', duration: '3 months', status: 'completed' },
        { phase: 'Continuous Improvement', duration: 'Ongoing', status: 'active' },
      ],
    },
  ],
  testimonialsSection: {
    badge: 'Testimonials',
    title: 'What Our Partners Say',
  },
  testimonials: [
    {
      quote:
        "AMS's regulatory expertise accelerated our market entry by 6 months. Their understanding of local requirements is exceptional.",
      author: 'Dr. Marie Laurent',
      role: 'CEO, European Pharma Lab',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    },
    {
      quote:
        'The cold chain infrastructure AMS deployed exceeded our expectations. Zero temperature excursions in 2 years of operation.',
      author: 'Jean-Pierre Dubois',
      role: 'Supply Chain Director, Biotech Co.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      quote:
        "Their market intelligence and distribution network gave us immediate access to markets we'd been trying to enter for years.",
      author: 'Sarah Mitchell',
      role: 'VP International, Medical Devices Inc.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    },
  ],
  cta: {
    title: 'Ready to Become Our Next Success Story?',
    subtitle:
      'Join leading European laboratories who trust AMS for their African pharmaceutical deployment.',
    button: 'Start Your Project',
  },
}

const caseStudiesFr = {
  badge: 'Histoires de réussite',
  title: 'Études de cas',
  subtitle: 'Des réussites sur les marchés africains',
  meta: {
    title: 'Études de cas | AMS - Déploiements pharmaceutiques réussis',
    description:
      "Découvrez les études de cas d'AMS en Afrique de l'Ouest : réglementation, distribution et logistique.",
  },
  filter: {
    all: 'Toutes les études',
    pharmaceutical: 'Pharmaceutique',
    medical: 'Dispositifs médicaux',
    logistics: 'Logistique',
  },
  hero: {
    badge: 'Résultats prouvés',
    description:
      "Découvrez comment AMS a déployé avec succès des produits pharmaceutiques en Afrique de l'Ouest, avec des résultats mesurables pour les laboratoires européens.",
  },
  stats: [
    { value: '50', suffix: '+', label: 'Déploiements réussis' },
    { value: '99.9', suffix: '%', label: 'Taux de réussite' },
    { value: '15', suffix: '+', label: "Années d'expérience" },
    { value: '5', suffix: '', label: 'Pays' },
  ],
  labels: {
    client: 'Client :',
    challenge: 'Défi',
    solution: 'Solution',
    projectTimeline: 'Calendrier du projet',
    discussProject: 'Discuter d’un projet similaire',
    ongoing: 'En cours',
  },
  cases: [
    {
      id: 'antimalarial-deployment',
      title: 'Déploiement de produits antipaludiques',
      client: 'Grand laboratoire pharmaceutique européen',
      challenge:
        'Déployer un nouveau traitement antipaludique en Côte d’Ivoire avec une conformité réglementaire complète et une pénétration rapide du marché.',
      solution:
        'Mise en place d’un parcours intégré de la réglementation à la distribution, enregistrement du produit en un temps record et réseau de distribution national.',
      category: 'Pharmaceutique',
      results: [
        { label: 'Temps de mise sur le marché', value: '6', suffix: ' mois', isNumeric: true },
        { label: 'Couverture', value: '85', suffix: '%', isNumeric: true },
        { label: 'Patients touchés', value: '500', suffix: 'k+', isNumeric: true },
        { label: 'Taux de croissance', value: '+240', suffix: '%', isNumeric: false },
      ],
      timeline: [
        { phase: 'Approbation réglementaire', duration: '2 mois', status: 'completed' },
        { phase: 'Mise en place distribution', duration: '1,5 mois', status: 'completed' },
        { phase: 'Lancement commercial', duration: '1 mois', status: 'completed' },
        { phase: 'Montée en charge & optimisation', duration: 'En cours', status: 'active' },
      ],
    },
    {
      id: 'injectable-distribution',
      title: 'Distribution nationale de produits injectables',
      client: 'Biotech européenne',
      challenge:
        'Mettre en place une chaîne du froid pour des produits injectables sensibles à la température dans plusieurs régions d’Afrique de l’Ouest.',
      solution:
        'Infrastructure certifiée chaîne du froid avec suivi des températures en temps réel et capacités de livraison du dernier kilomètre.',
      category: 'Logistique',
      results: [
        { label: 'Conformité température', value: '99.9', suffix: '%', isNumeric: true },
        { label: 'Points de livraison', value: '200', suffix: '+', isNumeric: true },
        { label: 'Régions couvertes', value: '12', suffix: '', isNumeric: true },
        { label: 'Intégrité produit', value: '100', suffix: '%', isNumeric: true },
      ],
      timeline: [
        { phase: 'Mise en place infrastructure', duration: '3 mois', status: 'completed' },
        { phase: 'Formation des équipes', duration: '1 mois', status: 'completed' },
        { phase: 'Lancement pilote', duration: '2 mois', status: 'completed' },
        { phase: 'Déploiement complet', duration: '3 mois', status: 'completed' },
      ],
    },
    {
      id: 'medical-devices-supply-chain',
      title: 'Chaîne d’approvisionnement dispositifs médicaux',
      client: 'Fabricant international de dispositifs médicaux',
      challenge:
        'Créer une chaîne d’approvisionnement efficace pour des dispositifs médicaux avec exigences d’importation complexes et besoins hospitaliers.',
      solution:
        'Solution complète : dédouanement, entreposage et livraison directe aux hôpitaux.',
      category: 'Dispositifs médicaux',
      results: [
        { label: 'Réduction des coûts', value: '-30', suffix: '%', isNumeric: false },
        { label: 'Hôpitaux desservis', value: '50', suffix: '+', isNumeric: true },
        { label: 'Délai de livraison', value: '-45', suffix: '%', isNumeric: false },
        { label: 'Satisfaction', value: '98', suffix: '%', isNumeric: true },
      ],
      timeline: [
        { phase: 'Audit supply chain', duration: '1 mois', status: 'completed' },
        { phase: 'Optimisation des processus', duration: '2 mois', status: 'completed' },
        { phase: 'Mise en œuvre', duration: '3 mois', status: 'completed' },
        { phase: 'Amélioration continue', duration: 'En cours', status: 'active' },
      ],
    },
  ],
  testimonialsSection: {
    badge: 'Témoignages',
    title: 'Ce que disent nos partenaires',
  },
  testimonials: [
    {
      quote:
        "L'expertise réglementaire d'AMS a accéléré notre entrée sur le marché de six mois. Leur compréhension des exigences locales est exceptionnelle.",
      author: 'Dr Marie Laurent',
      role: 'PDG, laboratoire pharmaceutique européen',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    },
    {
      quote:
        "La chaîne du froid déployée par AMS a dépassé nos attentes : aucune excursion de température en deux ans d'exploitation.",
      author: 'Jean-Pierre Dubois',
      role: 'Directeur supply chain, biotech',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      quote:
        "Leur intelligence de marché et leur réseau de distribution nous ont donné un accès immédiat à des marchés sur lesquels nous peinions depuis des années.",
      author: 'Sarah Mitchell',
      role: 'VP International, dispositifs médicaux',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    },
  ],
  cta: {
    title: 'Prêt à devenir notre prochaine réussite ?',
    subtitle:
      'Rejoignez les laboratoires européens qui font confiance à AMS pour leur déploiement en Afrique.',
    button: 'Lancer votre projet',
  },
}

const newsEn = {
  badge: 'Latest Updates',
  title: 'News & Insights',
  subtitle: 'Stay informed with the latest industry trends and AMS announcements',
  meta: {
    title: 'News & Insights | AMS - Pharmaceutical Industry Updates',
    description:
      'Stay updated with the latest news, partnerships, and insights from AMS and the African pharmaceutical industry.',
  },
  searchPlaceholder: 'Search articles...',
  featuredStories: 'Featured Stories',
  latestArticles: 'Latest Articles',
  readSuffix: 'read',
  readArticle: 'Read Article',
  readMore: 'Read More',
  noArticlesTitle: 'No Articles Found',
  noArticlesHint: 'Try adjusting your search or filter criteria.',
  loadMore: 'Load More Articles',
  categories: {
    all: 'All News',
    industry: 'Industry',
    company: 'AMS Updates',
    partnerships: 'Partnerships',
    health: 'African Health',
  },
  items: [
    {
      id: 1,
      title: 'AMS Expands Distribution Network to Senegal and Ghana',
      excerpt:
        'Africa Med Supply announces the expansion of its pharmaceutical distribution network to two new West African markets, strengthening regional healthcare access.',
      category: 'company',
      date: '2024-12-15',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 2,
      title: 'New Partnership with Leading European Vaccine Manufacturer',
      excerpt:
        'Strategic collaboration to improve vaccine distribution and cold chain logistics across West Africa, enhancing immunization coverage.',
      category: 'partnerships',
      date: '2024-11-28',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 3,
      title: "Regulatory Updates: New Pharmaceutical Guidelines in Côte d'Ivoire",
      excerpt:
        'Key changes in pharmaceutical regulations that impact market access and product registration in the Ivorian market.',
      category: 'industry',
      date: '2024-11-15',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 4,
      title: 'AMS Achieves ISO 9001:2015 Certification for Quality Management',
      excerpt:
        'Recognizing our commitment to excellence in pharmaceutical logistics and distribution services across all operations.',
      category: 'company',
      date: '2024-10-30',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 5,
      title: 'The Future of Healthcare Logistics in Sub-Saharan Africa',
      excerpt:
        'Analysis of emerging trends, challenges, and opportunities in African pharmaceutical supply chains for 2025 and beyond.',
      category: 'health',
      date: '2024-10-20',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 6,
      title: 'AMS Hosts International Pharmaceutical Forum in Abidjan',
      excerpt:
        'Bringing together European laboratories and African health authorities to foster collaboration and knowledge exchange.',
      category: 'company',
      date: '2024-10-10',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 7,
      title: 'Cold Chain Innovation: AMS Deploys IoT Temperature Monitoring',
      excerpt:
        'Implementation of real-time IoT sensors across the cold chain network for enhanced product safety and compliance.',
      category: 'industry',
      date: '2024-09-25',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 8,
      title: 'Partnership with Ghana Health Service for Medical Device Distribution',
      excerpt:
        'New agreement to supply essential medical devices to public health facilities across Ghana.',
      category: 'partnerships',
      date: '2024-09-15',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 9,
      title: 'African Pharmaceutical Market Report: Q3 2024 Insights',
      excerpt:
        'Comprehensive analysis of pharmaceutical market trends, growth sectors, and opportunities in West Africa.',
      category: 'health',
      date: '2024-09-05',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
      featured: false,
    },
  ],
}

const newsFr = {
  badge: 'Dernières mises à jour',
  title: 'Actualités et analyses',
  subtitle: 'Restez informé des tendances du secteur et des annonces AMS',
  meta: {
    title: 'Actualités | AMS - Secteur pharmaceutique africain',
    description:
      'Suivez les actualités, partenariats et analyses d’AMS et du marché pharmaceutique en Afrique.',
  },
  searchPlaceholder: 'Rechercher un article...',
  featuredStories: 'À la une',
  latestArticles: 'Derniers articles',
  readSuffix: 'de lecture',
  readArticle: 'Lire l’article',
  readMore: 'Lire la suite',
  noArticlesTitle: 'Aucun article trouvé',
  noArticlesHint: 'Modifiez votre recherche ou vos filtres.',
  loadMore: 'Charger plus d’articles',
  categories: {
    all: 'Toutes les actualités',
    industry: 'Industrie',
    company: 'Actualités AMS',
    partnerships: 'Partenariats',
    health: 'Santé en Afrique',
  },
  items: [
    {
      id: 1,
      title: 'AMS étend son réseau de distribution au Sénégal et au Ghana',
      excerpt:
        'Africa Med Supply annonce l’extension de son réseau de distribution pharmaceutique à deux nouveaux marchés ouest-africains pour renforcer l’accès aux soins.',
      category: 'company',
      date: '2024-12-15',
      readTime: '4 min de lecture',
      image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 2,
      title: 'Nouveau partenariat avec un fabricant européen de vaccins',
      excerpt:
        'Collaboration stratégique pour améliorer la distribution des vaccins et la logistique chaîne du froid en Afrique de l’Ouest.',
      category: 'partnerships',
      date: '2024-11-28',
      readTime: '5 min de lecture',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 3,
      title: 'Réglementation : nouvelles directives pharmaceutiques en Côte d’Ivoire',
      excerpt:
        'Changements majeurs impactant l’accès au marché et l’enregistrement des produits sur le marché ivoirien.',
      category: 'industry',
      date: '2024-11-15',
      readTime: '6 min de lecture',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 4,
      title: 'AMS obtient la certification ISO 9001:2015 pour la qualité',
      excerpt:
        'Reconnaissance de notre engagement pour l’excellence en logistique et distribution pharmaceutiques.',
      category: 'company',
      date: '2024-10-30',
      readTime: '3 min de lecture',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 5,
      title: 'L’avenir de la logistique sanitaire en Afrique subsaharienne',
      excerpt:
        'Analyse des tendances, défis et opportunités des chaînes d’approvisionnement pharmaceutiques pour 2025 et au-delà.',
      category: 'health',
      date: '2024-10-20',
      readTime: '7 min de lecture',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 6,
      title: 'AMS organise un forum pharmaceutique international à Abidjan',
      excerpt:
        'Rassembler laboratoires européens et autorités sanitaires africaines pour échanger et collaborer.',
      category: 'company',
      date: '2024-10-10',
      readTime: '4 min de lecture',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 7,
      title: 'Innovation chaîne du froid : capteurs IoT de température',
      excerpt:
        'Déploiement de capteurs en temps réel sur le réseau pour renforcer la sécurité des produits et la conformité.',
      category: 'industry',
      date: '2024-09-25',
      readTime: '5 min de lecture',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 8,
      title: 'Partenariat avec le Ghana Health Service pour les dispositifs médicaux',
      excerpt:
        'Nouvel accord pour fournir des dispositifs essentiels aux établissements de santé publics au Ghana.',
      category: 'partnerships',
      date: '2024-09-15',
      readTime: '4 min de lecture',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 9,
      title: 'Marché pharmaceutique africain : analyse T3 2024',
      excerpt:
        'Analyse des tendances, secteurs porteurs et opportunités en Afrique de l’Ouest.',
      category: 'health',
      date: '2024-09-05',
      readTime: '8 min de lecture',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
      featured: false,
    },
  ],
}

const equipmentEn = {
  badge: 'Our Infrastructure',
  title: 'State-of-the-art Equipment',
  subtitle: 'Advanced infrastructure supporting pharmaceutical excellence',
  meta: {
    title: 'Medical Equipment | AMS - Pharmaceutical & Hospital Supplies',
    description:
      "Browse AMS's catalog of medical equipment, consumables, and hospital supplies for West African healthcare markets.",
  },
  heroBadge: 'Premium equipment catalog',
  heroTitle: 'Medical Equipment & Supplies',
  heroDescription:
    'High-quality medical equipment, consumables, and hospital supplies from certified manufacturers for African healthcare facilities.',
  searchPlaceholder: 'Search equipment by name or category...',
  specifications: 'Specifications',
  requestQuote: 'Request Quote',
  emptyTitle: 'No Equipment Found',
  emptyHint: 'Try adjusting your search or filter criteria.',
  qualityBadge: 'Quality assurance',
  qualityTitle: 'Certified quality standards',
  qualitySubtitle: 'All our equipment meets international quality and safety standards',
  qualityCards: [
    {
      icon: '🏥',
      title: 'Medical grade',
      desc: 'All products meet medical-grade specifications',
    },
    {
      icon: '✅',
      title: 'ISO certified',
      desc: 'Manufactured under ISO 13485 quality systems',
    },
    {
      icon: '🌍',
      title: 'WHO aligned',
      desc: 'Aligned with WHO essential equipment expectations',
    },
  ],
  categories: {
    all: 'All equipment',
    consumables: 'Medical consumables',
    hospital: 'Hospital equipment',
    diagnostic: 'Diagnostic tools',
    protective: 'Protective gear',
  },
  badges: {
    bestSeller: 'Best seller',
    new: 'New',
    premium: 'Premium',
    featured: 'Featured',
  },
  items: [
    {
      id: 1,
      name: 'Sterile surgical gloves',
      category: 'consumables',
      type: 'Medical consumables',
      description: 'Premium latex-free surgical gloves, powder-free, medical grade.',
      specifications: ['Size: S–XL', 'Sterile: Yes', 'Material: Nitrile', 'Pack: 50 pairs'],
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      badge: 'bestSeller',
    },
    {
      id: 2,
      name: 'Disposable syringes',
      category: 'consumables',
      type: 'Medical consumables',
      description: 'Single-use sterile syringes with Luer lock, various sizes available.',
      specifications: ['Size: 2–20 ml', 'Sterile: Yes', 'Material: Medical PP', 'Pack: 100 units'],
      image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&h=300&fit=crop',
      badge: null,
    },
    {
      id: 3,
      name: 'Rapid test kits',
      category: 'diagnostic',
      type: 'Diagnostic tools',
      description: 'Professional rapid diagnostic kits for malaria and other tropical diseases.',
      specifications: ['Type: Malaria', 'Time: 15 min', 'Accuracy: 99%', 'Pack: 25 tests'],
      image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=300&fit=crop',
      badge: 'new',
    },
    {
      id: 4,
      name: 'Infusion pumps',
      category: 'hospital',
      type: 'Hospital equipment',
      description: 'Volumetric infusion pump system with programmable delivery rates.',
      specifications: ['Flow: 0.1–1200 ml/h', 'Battery: 8 h', 'Alarms: Multiple', 'Display: LCD'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop',
      badge: null,
    },
    {
      id: 5,
      name: 'Patient monitors',
      category: 'hospital',
      type: 'Hospital equipment',
      description: 'Multi-parameter patient monitoring for vital signs.',
      specifications: ['Parameters: 7', 'Screen: 15"', 'Battery: 4 h', 'Connectivity: Wi-Fi'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      badge: 'premium',
    },
    {
      id: 6,
      name: 'Surgical masks',
      category: 'protective',
      type: 'Protective gear',
      description: '3-ply surgical masks with high bacterial filtration efficiency.',
      specifications: ['BFE: 99%', 'Layers: 3', 'Type: Type IIR', 'Pack: 50 units'],
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop',
      badge: null,
    },
    {
      id: 7,
      name: 'Portable ventilators',
      category: 'hospital',
      type: 'Hospital equipment',
      description: 'Compact ICU-grade ventilator for emergency and transport use.',
      specifications: ['Modes: 6', 'Weight: 3.5 kg', 'Battery: 6 h', 'Display: Touch'],
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop',
      badge: 'featured',
    },
    {
      id: 8,
      name: 'Blood collection tubes',
      category: 'diagnostic',
      type: 'Diagnostic tools',
      description: 'Vacuum tubes with additives for laboratory testing.',
      specifications: ['Volume: 2–10 ml', 'Additives: Multiple', 'Sterile: Yes', 'Color-coded'],
      image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&h=300&fit=crop',
      badge: null,
    },
    {
      id: 9,
      name: 'Defibrillators',
      category: 'hospital',
      type: 'Hospital equipment',
      description: 'Automated external defibrillator with real-time CPR feedback.',
      specifications: ['Type: AED', 'Shock: Biphasic', 'Battery: 5 years', 'Weight: 2.4 kg'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop',
      badge: null,
    },
  ],
}

const equipmentFr = {
  badge: 'Notre infrastructure',
  title: 'Équipements de pointe',
  subtitle: 'Une infrastructure avancée au service de l’excellence pharmaceutique',
  meta: {
    title: 'Équipement médical | AMS - Fournitures hospitalières',
    description:
      'Catalogue d’équipements médicaux, consommables et fournitures hospitalières pour les marchés ouest-africains.',
  },
  heroBadge: 'Catalogue équipement premium',
  heroTitle: 'Équipements et fournitures médicales',
  heroDescription:
    'Équipements et consommables de qualité, issus de fabricants certifiés pour les établissements de santé en Afrique.',
  searchPlaceholder: 'Rechercher un équipement par nom ou catégorie...',
  specifications: 'Spécifications',
  requestQuote: 'Demander un devis',
  emptyTitle: 'Aucun équipement trouvé',
  emptyHint: 'Modifiez votre recherche ou vos filtres.',
  qualityBadge: 'Assurance qualité',
  qualityTitle: 'Normes de qualité certifiées',
  qualitySubtitle: 'Nos équipements respectent les standards internationaux de qualité et de sécurité',
  qualityCards: [
    {
      icon: '🏥',
      title: 'Qualité médicale',
      desc: 'Produits conformes aux spécifications médicales',
    },
    {
      icon: '✅',
      title: 'Certifié ISO',
      desc: 'Fabriqués selon les systèmes qualité ISO 13485',
    },
    {
      icon: '🌍',
      title: 'Aligné OMS',
      desc: 'Conformes aux attentes OMS pour l’équipement essentiel',
    },
  ],
  categories: {
    all: 'Tout l’équipement',
    consumables: 'Consommables médicaux',
    hospital: 'Équipement hospitalier',
    diagnostic: 'Outils de diagnostic',
    protective: 'Équipements de protection',
  },
  badges: {
    bestSeller: 'Best-seller',
    new: 'Nouveau',
    premium: 'Premium',
    featured: 'À la une',
  },
  items: equipmentEn.items.map((item, i) => ({
    ...item,
    name: [
      'Gants chirurgicaux stériles',
      'Seringues jetables',
      'Tests rapides',
      'Pompes à perfusion',
      'Moniteurs patients',
      'Masques chirurgicaux',
      'Ventilateurs portables',
      'Tubes de prélèvement sanguin',
      'Défibrillateurs',
    ][i],
    type: {
      consumables: 'Consommables médicaux',
      hospital: 'Équipement hospitalier',
      diagnostic: 'Outils de diagnostic',
      protective: 'Équipements de protection',
    }[item.category],
    description: [
      'Gants chirurgicaux sans latex, sans poudre, qualité médicale.',
      'Seringues stériles à usage unique, embout Luer lock, plusieurs tailles.',
      'Tests de diagnostic rapide professionnels pour le paludisme et autres maladies tropicales.',
      'Pompe à perfusion volumétrique avec débits programmables.',
      'Surveillance multiparamètres des signes vitaux.',
      'Masques chirurgicaux 3 plis, haute filtration bactérienne.',
      'Ventilateur compact niveau USI pour urgence et transport.',
      'Tubes sous vide avec additifs pour analyses de laboratoire.',
      'Défibrillateur externe automatisé avec retour temps réel sur la RCP.',
    ][i],
    specifications: [
      ['Taille : S–XL', 'Stérile : Oui', 'Matière : Nitrile', 'Conditionnement : 50 paires'],
      ['Taille : 2–20 ml', 'Stérile : Oui', 'Matière : PP médical', 'Conditionnement : 100 unités'],
      ['Type : Paludisme', 'Durée : 15 min', 'Précision : 99 %', 'Conditionnement : 25 tests'],
      ['Débit : 0,1–1200 ml/h', 'Batterie : 8 h', 'Alarmes : Multiples', 'Écran : LCD'],
      ['Paramètres : 7', 'Écran : 15"', 'Batterie : 4 h', 'Connectivité : Wi-Fi'],
      ['BFE : 99 %', 'Couches : 3', 'Type : IIR', 'Conditionnement : 50 unités'],
      ['Modes : 6', 'Poids : 3,5 kg', 'Batterie : 6 h', 'Écran : Tactile'],
      ['Volume : 2–10 ml', 'Additifs : Multiples', 'Stérile : Oui', 'Codage couleur'],
      ['Type : DEA', 'Choc : Biphasique', 'Batterie : 5 ans', 'Poids : 2,4 kg'],
    ][i],
  })),
}

function patch(file, caseStudies, news, equipment) {
  const p = path.join(root, 'src', 'i18n', 'locale', file)
  const j = JSON.parse(fs.readFileSync(p, 'utf8'))
  j.caseStudies = caseStudies
  j.news = news
  j.equipment = equipment
  fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n', 'utf8')
}

patch('en.json', caseStudiesEn, newsEn, equipmentEn)
patch('fr.json', caseStudiesFr, newsFr, equipmentFr)

console.log('Locales patched OK')
