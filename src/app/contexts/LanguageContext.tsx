import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.gallery': 'Gallery',
    'nav.team': 'Our Team',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Empowering Communities for a Better Tomorrow',
    'home.hero.subtitle': 'Supporting sustainable development through saving groups, agro-business, vaccination campaigns, and community empowerment programs.',
    'home.hero.cta': 'Get Involved',
    'home.hero.learn': 'Learn More',
    'home.mission.title': 'Our Mission',
    'home.mission.description': 'ADES is dedicated to improving lives through community-driven development programs. We focus on economic empowerment, healthcare access, and sustainable agriculture.',
    'home.projects.title': 'Our Impact',
    'home.stats.communities': 'Communities Served',
    'home.stats.vaccinations': 'Vaccinations Delivered',
    'home.stats.savings': 'Saving Groups Formed',
    'home.stats.farmers': 'Farmers Supported',
    
    // Domains of Intervention
    'domains.title': 'Areas of Intervention',
    'domains.entrepreneurship.title': 'Women\'s Entrepreneurship',
    'domains.entrepreneurship.description': 'Empowering women through business skills training, access to finance, and entrepreneurship development programs.',
    'domains.environment.title': 'Environment and Sustainable Development',
    'domains.environment.description': 'Promoting eco-friendly practices, climate resilience, and sustainable resource management in communities.',
    'domains.governance.title': 'Decentralization and Local Governance',
    'domains.governance.description': 'Strengthening local governance structures and community participation in decision-making processes.',
    'domains.rural.title': 'Rural Economy',
    'domains.rural.description': 'Supporting rural economic development through agriculture, market access, and livelihood diversification.',
    
    // About Page
    'about.title': 'About ADES',
    'about.subtitle': 'Transforming lives through community development',
    'about.story.title': 'Our Story',
    'about.story.description': 'Founded with a vision to create sustainable change, ADES has been at the forefront of community development for years. We believe in empowering communities to take charge of their own development through participatory approaches.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'A world where every community has the resources and support needed to thrive independently and sustainably.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To empower communities through integrated development programs that promote economic growth, health, and sustainable livelihoods.',
    'about.values.title': 'Our Values',
    'about.value.community': 'Community-Centered',
    'about.value.community.desc': 'We put communities at the heart of everything we do.',
    'about.value.sustainability': 'Sustainability',
    'about.value.sustainability.desc': 'We promote long-term, sustainable solutions.',
    'about.value.integrity': 'Integrity',
    'about.value.integrity.desc': 'We operate with transparency and accountability.',
    'about.value.innovation': 'Innovation',
    'about.value.innovation.desc': 'We embrace creative solutions to complex challenges.',
    
    // Projects Page
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Making a difference across multiple sectors',
    'projects.saving.title': 'Saving Groups',
    'projects.saving.description': 'Empowering communities through financial literacy and savings programs. We help establish and support village savings and loan associations (VSLAs) to promote financial inclusion.',
    'projects.agro.title': 'Agro-Business Development',
    'projects.agro.description': 'Supporting farmers with training, resources, and market access to improve agricultural productivity and income. We focus on sustainable farming practices and value chain development.',
    'projects.vaccination.title': 'Vaccination Campaigns',
    'projects.vaccination.description': 'Providing access to life-saving vaccines through community outreach programs. We work with health authorities to ensure comprehensive immunization coverage.',
    'projects.health.title': 'Community Health',
    'projects.health.description': 'Strengthening healthcare systems and promoting preventive health practices in underserved communities.',
    'projects.learn': 'Learn More',
    
    // Team Page
    'team.title': 'Meet Our Team',
    'team.subtitle': 'Dedicated professionals committed to community development',
    
    // Gallery Page
    'gallery.title': 'Project Gallery',
    'gallery.subtitle': 'Capturing moments of impact and transformation',
    'gallery.filter.all': 'All',
    'gallery.filter.saving': 'Saving Groups',
    'gallery.filter.agro': 'Agriculture',
    'gallery.filter.health': 'Health',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.info.title': 'Contact Information',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address.city': 'Kisangani',
    'contact.address.province': 'Tshopo Province',
    'contact.address.country': 'Democratic Republic of Congo',
    'contact.hours': 'Office Hours',
    'contact.hours.weekday': 'Monday - Friday: 8:00 AM - 5:00 PM',
    'contact.hours.saturday': 'Saturday: 9:00 AM - 1:00 PM',
    'contact.hours.sunday': 'Sunday: Closed',
    
    // Footer
    'footer.about': 'About ADES',
    'footer.about.text': 'Dedicated to empowering communities through sustainable development programs.',
    'footer.quick': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',

    // Interventions Page
    'interventions.title': 'Areas of Intervention',
    'interventions.subtitle': 'Discover how ADES is making a difference across four key sectors of community development',
    'interventions.related_projects': 'Related Projects',
    'interventions.view_all_projects': 'View All Projects',
    'interventions.impact.title': 'Our Impact Across All Areas',
    'interventions.impact.subtitle': 'Measured results from years of dedicated community work',
    'interventions.stats.communities': 'Communities Reached',
    'interventions.stats.years': 'Years of Experience',
    'interventions.stats.projects': 'Active Projects',
    'interventions.stats.beneficiaries': 'Lives Impacted',
    'interventions.cta.title': 'Join Us in Making a Difference',
    'interventions.cta.description': 'Partner with ADES to create sustainable change in communities across the DRC',
    'interventions.cta.contact': 'Get in Touch',
    'interventions.cta.view_projects': 'Explore Projects',

    // Intervention Detail Page
    'interventions.key_achievements': 'Key Achievements',
    'interventions.our_activities': 'Our Activities',

    // Intervention Projects
    'interventions.projects.saving-groups.title': 'Village Savings Groups',
    'interventions.projects.saving-groups.description': 'Empowering communities through local savings and lending mechanisms',
    'interventions.projects.microfinance.title': 'Microfinance Initiatives',
    'interventions.projects.microfinance.description': 'Providing access to financial services for small businesses',
    'interventions.projects.business-training.title': 'Business Skills Training',
    'interventions.projects.business-training.description': 'Building entrepreneurial capacity and business management skills',
    'interventions.projects.agro-business.title': 'Agro-Business Development',
    'interventions.projects.agro-business.description': 'Supporting sustainable agricultural entrepreneurship',
    'interventions.projects.reforestation.title': 'Reforestation Programs',
    'interventions.projects.reforestation.description': 'Restoring forests and promoting environmental conservation',
    'interventions.projects.climate-resilience.title': 'Climate Resilience',
    'interventions.projects.climate-resilience.description': 'Building community capacity to adapt to climate change',
    'interventions.projects.community-leadership.title': 'Community Leadership',
    'interventions.projects.community-leadership.description': 'Developing local leaders for effective governance',
    'interventions.projects.civic-education.title': 'Civic Education',
    'interventions.projects.civic-education.description': 'Promoting civic awareness and participation',
    'interventions.projects.conflict-resolution.title': 'Conflict Resolution',
    'interventions.projects.conflict-resolution.description': 'Facilitating peaceful resolution of community disputes',
    'interventions.projects.vaccination.title': 'Vaccination Campaigns',
    'interventions.projects.vaccination.description': 'Ensuring community health through immunization programs',
    'interventions.projects.health.title': 'Community Health',
    'interventions.projects.health.description': 'Strengthening healthcare access and health education',
    'interventions.projects.agricultural-development.title': 'Agricultural Development',
    'interventions.projects.agricultural-development.description': 'Improving farming practices and food security',

    // Activities
    'interventions.activities.entrepreneurship.1': 'Training women in business management and financial literacy',
    'interventions.activities.entrepreneurship.2': 'Establishing village savings and loan associations (VSLAs)',
    'interventions.activities.entrepreneurship.3': 'Providing microfinance and startup capital support',
    'interventions.activities.entrepreneurship.4': 'Creating market linkages for women entrepreneurs',

    'interventions.activities.environment.1': 'Implementing sustainable agriculture and agroforestry practices',
    'interventions.activities.environment.2': 'Conducting reforestation and tree planting campaigns',
    'interventions.activities.environment.3': 'Building climate resilience through adaptation training',
    'interventions.activities.environment.4': 'Promoting renewable energy and waste management',

    'interventions.activities.governance.1': 'Training community leaders in participatory governance',
    'interventions.activities.governance.2': 'Strengthening local decision-making structures',
    'interventions.activities.governance.3': 'Facilitating community conflict resolution mechanisms',
    'interventions.activities.governance.4': 'Promoting transparency and accountability in local governance',

    'interventions.activities.rural.1': 'Conducting vaccination and immunization campaigns',
    'interventions.activities.rural.2': 'Training community health workers and volunteers',
    'interventions.activities.rural.3': 'Improving agricultural productivity and market access',
    'interventions.activities.rural.4': 'Strengthening rural health systems and infrastructure',

    // Achievements
    'interventions.achievements.women_trained': 'Women Trained',
    'interventions.achievements.businesses_started': 'Businesses Started',
    'interventions.achievements.savings_groups': 'Savings Groups',
    'interventions.achievements.trees_planted': 'Trees Planted',
    'interventions.achievements.farmers_trained': 'Farmers Trained',
    'interventions.achievements.hectares_restored': 'Hectares Restored',
    'interventions.achievements.leaders_trained': 'Leaders Trained',
    'interventions.achievements.conflicts_resolved': 'Conflicts Resolved',
    'interventions.achievements.communities_engaged': 'Communities Engaged',
    'interventions.achievements.vaccinations': 'Vaccinations Delivered',
    'interventions.achievements.health_workers': 'Health Workers Trained',
    'interventions.achievements.villages_served': 'Villages Served',

    // Common
    'common.not_found': 'Page Not Found',
    'common.back_home': 'Back to Home',
    'common.back': 'Back',
    'common.learn_more': 'Learn More',

    // Blog Page
    'blog.title': 'Our Blog',
    'blog.subtitle': 'Stories, insights, and updates from our work in the community',
    'blog.filter.all': 'All Posts',
    'blog.read_more': 'Read More',
    'blog.no_posts': 'No blog posts found',
    'blog.post_not_found': 'The blog post you\'re looking for doesn\'t exist',
    'blog.back_to_blog': 'Back to Blog',
    'blog.share_post': 'Share this post',
    'blog.recent_posts': 'Recent Posts',

    // SEO Keywords
    'seo.keywords.home': 'ADES, community development, DRC, Congo, NGO, saving groups, agro-business, vaccination, community health',
    'seo.keywords.about': 'ADES, about, story, mission, vision, values, community development',
    'seo.keywords.projects': 'ADES, projects, saving groups, agro-business, vaccination, community health, development programs',
    'seo.keywords.contact': 'ADES, contact, get in touch, support, volunteer, donate',
    'seo.keywords.gallery': 'ADES, gallery, photos, community projects, impact, transformation',
    'seo.keywords.team': 'ADES, team, staff, leadership, community workers',
    'seo.keywords.blog': 'ADES, blog, news, stories, updates, community development, impact stories',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.blog': 'Blog',
    'nav.gallery': 'Galerie',
    'nav.team': 'Notre Équipe',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Autonomiser les Communautés pour un Avenir Meilleur',
    'home.hero.subtitle': 'Soutenir le développement durable à travers les groupes d\'épargne, l\'agro-business, les campagnes de vaccination et les programmes d\'autonomisation communautaire.',
    'home.hero.cta': 'Participez',
    'home.hero.learn': 'En Savoir Plus',
    'home.mission.title': 'Notre Mission',
    'home.mission.description': 'ADES se consacre à améliorer les vies à travers des programmes de développement communautaire. Nous nous concentrons sur l\'autonomisation économique, l\'accès aux soins de santé et l\'agriculture durable.',
    'home.projects.title': 'Notre Impact',
    'home.stats.communities': 'Communautés Servies',
    'home.stats.vaccinations': 'Vaccinations Administrées',
    'home.stats.savings': 'Groupes d\'Épargne Formés',
    'home.stats.farmers': 'Agriculteurs Soutenus',
    
    // Domains of Intervention
    'domains.title': 'Domaines d\'Intervention',
    'domains.entrepreneurship.title': 'Entrepreneuriat des Femmes',
    'domains.entrepreneurship.description': 'Autonomiser les femmes grâce à la formation en compétences commerciales, l\'accès au financement et les programmes de développement de l\'entrepreneuriat.',
    'domains.environment.title': 'Environnement et Développement Durable',
    'domains.environment.description': 'Promouvoir des pratiques écologiques, la résilience climatique et la gestion durable des ressources dans les communautés.',
    'domains.governance.title': 'Décentralisation et Gouvernance Locale',
    'domains.governance.description': 'Renforcer les structures de gouvernance locale et la participation communautaire aux processus de prise de décision.',
    'domains.rural.title': 'Économie Rurale',
    'domains.rural.description': 'Soutenir le développement économique rural grâce à l\'agriculture, l\'accès au marché et la diversification des moyens de subsistance.',
    
    // About Page
    'about.title': 'À Propos d\'ADES',
    'about.subtitle': 'Transformer des vies grâce au développement communautaire',
    'about.story.title': 'Notre Histoire',
    'about.story.description': 'Fondée avec une vision de créer un changement durable, ADES est à l\'avant-garde du développement communautaire depuis des années. Nous croyons en l\'autonomisation des communautés pour qu\'elles prennent en charge leur propre développement à travers des approches participatives.',
    'about.vision.title': 'Notre Vision',
    'about.vision.description': 'Un monde où chaque communauté dispose des ressources et du soutien nécessaires pour prospérer de manière indépendante et durable.',
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Autonomiser les communautés à travers des programmes de développement intégrés qui favorisent la croissance économique, la santé et les moyens de subsistance durables.',
    'about.values.title': 'Nos Valeurs',
    'about.value.community': 'Centré sur la Communauté',
    'about.value.community.desc': 'Nous plaçons les communautés au cœur de tout ce que nous faisons.',
    'about.value.sustainability': 'Durabilité',
    'about.value.sustainability.desc': 'Nous promouvons des solutions durables à long terme.',
    'about.value.integrity': 'Intégrité',
    'about.value.integrity.desc': 'Nous opérons avec transparence et responsabilité.',
    'about.value.innovation': 'Innovation',
    'about.value.innovation.desc': 'Nous adoptons des solutions créatives aux défis complexes.',
    
    // Projects Page
    'projects.title': 'Nos Projets',
    'projects.subtitle': 'Faire une différence dans plusieurs secteurs',
    'projects.saving.title': 'Groupes d\'Épargne',
    'projects.saving.description': 'Autonomiser les communautés grâce à l\'éducation financière et aux programmes d\'épargne. Nous aidons à établir et à soutenir des associations villageoises d\'épargne et de crédit (AVEC) pour promouvoir l\'inclusion financière.',
    'projects.agro.title': 'Développement de l\'Agro-Business',
    'projects.agro.description': 'Soutenir les agriculteurs avec formation, ressources et accès au marché pour améliorer la productivité agricole et les revenus. Nous nous concentrons sur les pratiques agricoles durables et le développement de la chaîne de valeur.',
    'projects.vaccination.title': 'Campagnes de Vaccination',
    'projects.vaccination.description': 'Fournir un accès aux vaccins vitaux à travers des programmes de sensibilisation communautaire. Nous travaillons avec les autorités sanitaires pour assurer une couverture vaccinale complète.',
    'projects.health.title': 'Santé Communautaire',
    'projects.health.description': 'Renforcer les systèmes de santé et promouvoir les pratiques de santé préventive dans les communautés mal desservies.',
    'projects.learn': 'En Savoir Plus',
    
    // Team Page
    'team.title': 'Rencontrez Notre Équipe',
    'team.subtitle': 'Des professionnels dévoués au développement communautaire',
    
    // Gallery Page
    'gallery.title': 'Galerie de Projets',
    'gallery.subtitle': 'Capturer des moments d\'impact et de transformation',
    'gallery.filter.all': 'Tout',
    'gallery.filter.saving': 'Groupes d\'Épargne',
    'gallery.filter.agro': 'Agriculture',
    'gallery.filter.health': 'Santé',
    
    // Contact Page
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Entrez en contact avec notre équipe',
    'contact.info.title': 'Informations de Contact',
    'contact.form.title': 'Envoyez-nous un Message',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Votre Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address.city': 'Kisangani',
    'contact.address.province': 'Province de la Tshopo',
    'contact.address.country': 'République Démocratique du Congo',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.hours.weekday': 'Lundi - Vendredi : 8h00 - 17h00',
    'contact.hours.saturday': 'Samedi : 9h00 - 13h00',
    'contact.hours.sunday': 'Dimanche : Fermé',
    
    // Footer
    'footer.about': 'À Propos d\'ADES',
    'footer.about.text': 'Dédiée à l\'autonomisation des communautés à travers des programmes de développement durable.',
    'footer.quick': 'Liens Rapides',
    'footer.contact': 'Informations de Contact',
    'footer.rights': 'Tous droits réservés.',

    // Common
    'common.not_found': 'Page Non Trouvée',
    'common.back_home': 'Retour à l\'Accueil',
    'common.back': 'Retour',
    'common.learn_more': 'En Savoir Plus',

    // Blog Page
    'blog.title': 'Notre Blog',
    'blog.subtitle': 'Histoires, perspectives et mises à jour de notre travail dans la communauté',
    'blog.filter.all': 'Tous les Articles',
    'blog.read_more': 'Lire Plus',
    'blog.no_posts': 'Aucun article de blog trouvé',
    'blog.post_not_found': 'L\'article de blog que vous recherchez n\'existe pas',
    'blog.back_to_blog': 'Retour au Blog',
    'blog.share_post': 'Partager cet article',
    'blog.recent_posts': 'Articles Récents',

    // Interventions Page
    'interventions.title': 'Domaines d\'Intervention',
    'interventions.subtitle': 'Découvrez comment ADES fait la différence dans quatre secteurs clés du développement communautaire',
    'interventions.related_projects': 'Projets Associés',
    'interventions.view_all_projects': 'Voir Tous les Projets',
    'interventions.impact.title': 'Notre Impact dans Tous les Domaines',
    'interventions.impact.subtitle': 'Résultats mesurés après des années de travail communautaire dévoué',
    'interventions.stats.communities': 'Communautés Atteintes',
    'interventions.stats.years': 'Années d\'Expérience',
    'interventions.stats.projects': 'Projets Actifs',
    'interventions.stats.beneficiaries': 'Vies Impactées',
    'interventions.cta.title': 'Rejoignez-Nous pour Faire la Différence',
    'interventions.cta.description': 'Collaborez avec ADES pour créer un changement durable dans les communautés à travers la RDC',
    'interventions.cta.contact': 'Nous Contacter',
    'interventions.cta.view_projects': 'Explorer les Projets',

    // Intervention Projects
    'interventions.projects.saving-groups.title': 'Groupes d\'Épargne Villageois',
    'interventions.projects.microfinance.title': 'Initiatives de Microfinance',
    'interventions.projects.business-training.title': 'Formation en Compétences Commerciales',
    'interventions.projects.agro-business.title': 'Développement de l\'Agro-Business',
    'interventions.projects.reforestation.title': 'Programmes de Reboisement',
    'interventions.projects.climate-resilience.title': 'Résilience Climatique',
    'interventions.projects.community-leadership.title': 'Leadership Communautaire',
    'interventions.projects.civic-education.title': 'Éducation Civique',
    'interventions.projects.conflict-resolution.title': 'Résolution de Conflits',
    'interventions.projects.vaccination.title': 'Campagnes de Vaccination',
    'interventions.projects.health.title': 'Santé Communautaire',
    'interventions.projects.agricultural-development.title': 'Développement Agricole',

    // Intervention Project Descriptions
    'interventions.projects.saving-groups.description': 'Autonomiser les communautés grâce à des mécanismes locaux d\'épargne et de prêt',
    'interventions.projects.microfinance.description': 'Fournir un accès au capital pour de petites entreprises et des entrepreneurs',
    'interventions.projects.business-training.description': 'Former les femmes en gestion d\'entreprise et en compétences entrepreneuriales',
    'interventions.projects.agro-business.description': 'Développer des chaînes de valeur agricoles durables et l\'accès au marché',
    'interventions.projects.reforestation.description': 'Restaurer les écosystèmes grâce à la plantation d\'arbres et à la gestion forestière',
    'interventions.projects.climate-resilience.description': 'Construire la résilience communautaire face au changement climatique',
    'interventions.projects.community-leadership.description': 'Former les dirigeants locaux en gouvernance et en gestion communautaire',
    'interventions.projects.civic-education.description': 'Promouvoir la citoyenneté active et la participation démocratique',
    'interventions.projects.conflict-resolution.description': 'Faciliter le dialogue et la résolution pacifique des conflits',
    'interventions.projects.vaccination.description': 'Assurer l\'accès aux vaccins vitaux dans les zones rurales',
    'interventions.projects.health.description': 'Renforcer les systèmes de santé et la sensibilisation aux soins préventifs',
    'interventions.projects.agricultural-development.description': 'Améliorer la productivité agricole et la sécurité alimentaire',

    // Intervention Detail Page
    'interventions.key_achievements': 'Réalisations Clés',
    'interventions.our_activities': 'Nos Activités',

    // Activities - Entrepreneurship
    'interventions.activities.entrepreneurship.1': 'Former les femmes en gestion d\'entreprise et en littératie financière',
    'interventions.activities.entrepreneurship.2': 'Faciliter l\'accès au microcrédit et aux opportunités de financement',
    'interventions.activities.entrepreneurship.3': 'Créer des réseaux et des coopératives d\'affaires féminines',
    'interventions.activities.entrepreneurship.4': 'Fournir un mentorat et un soutien continu aux entrepreneurs',

    // Activities - Environment
    'interventions.activities.environment.1': 'Mettre en œuvre des programmes de reboisement et de restauration forestière',
    'interventions.activities.environment.2': 'Former en pratiques agricoles durables et en agroforesterie',
    'interventions.activities.environment.3': 'Promouvoir des sources d\'énergie renouvelable et la conservation',
    'interventions.activities.environment.4': 'Faciliter l\'adaptation et l\'atténuation du changement climatique',

    // Activities - Governance
    'interventions.activities.governance.1': 'Renforcer les structures de gouvernance locale et les capacités',
    'interventions.activities.governance.2': 'Promouvoir la participation citoyenne aux processus de prise de décision',
    'interventions.activities.governance.3': 'Faciliter la résolution de conflits et la cohésion sociale',
    'interventions.activities.governance.4': 'Soutenir le plaidoyer et l\'éducation civique',

    // Activities - Rural Economy
    'interventions.activities.rural.1': 'Améliorer les infrastructures de santé et les services ruraux',
    'interventions.activities.rural.2': 'Réaliser des campagnes de vaccination et des programmes de santé préventive',
    'interventions.activities.rural.3': 'Soutenir le développement agricole et la diversification des moyens de subsistance',
    'interventions.activities.rural.4': 'Renforcer les systèmes d\'approvisionnement en eau et d\'assainissement',

    // Achievement Metrics
    'interventions.achievements.women_trained': 'Femmes Formées',
    'interventions.achievements.businesses_started': 'Entreprises Créées',
    'interventions.achievements.savings_groups': 'Groupes d\'Épargne',
    'interventions.achievements.trees_planted': 'Arbres Plantés',
    'interventions.achievements.farmers_trained': 'Agriculteurs Formés',
    'interventions.achievements.hectares_restored': 'Hectares Restaurés',
    'interventions.achievements.leaders_trained': 'Dirigeants Formés',
    'interventions.achievements.conflicts_resolved': 'Conflits Résolus',
    'interventions.achievements.communities_engaged': 'Communautés Engagées',
    'interventions.achievements.vaccinations': 'Vaccinations',
    'interventions.achievements.health_workers': 'Travailleurs de Santé',
    'interventions.achievements.villages_served': 'Villages Desservis',

    // SEO Keywords
    'seo.keywords.home': 'ADES, développement communautaire, RDC, Congo, ONG, groupes d\'épargne, agro-business, vaccination, santé communautaire',
    'seo.keywords.about': 'ADES, à propos, histoire, mission, vision, valeurs, développement communautaire',
    'seo.keywords.projects': 'ADES, projets, groupes d\'épargne, agro-business, vaccination, santé communautaire, programmes de développement',
    'seo.keywords.contact': 'ADES, contact, nous contacter, soutien, bénévole, don',
    'seo.keywords.gallery': 'ADES, galerie, photos, projets communautaires, impact, transformation',
    'seo.keywords.team': 'ADES, équipe, personnel, direction, travailleurs communautaires',
    'seo.keywords.blog': 'ADES, blog, actualités, histoires, mises à jour, développement communautaire, histoires d\'impact',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage, fallback to 'fr' as default
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('ades-language') as Language;
      return savedLanguage || 'fr';
    }
    return 'fr';
  });

  // Persist language preference to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ades-language', language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
