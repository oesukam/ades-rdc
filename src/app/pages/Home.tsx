import { Link } from 'react-router';
import { ArrowRight, Users, Syringe, Banknote, Sprout, Briefcase, Leaf, Scale, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';

export function Home() {
  const { t, language } = useLanguage();

  const stats = [
    { icon: Users, label: t('home.stats.communities'), value: '250+' },
    { icon: Syringe, label: t('home.stats.vaccinations'), value: '50,000+' },
    { icon: Banknote, label: t('home.stats.savings'), value: '180+' },
    { icon: Sprout, label: t('home.stats.farmers'), value: '1,200+' },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        url="/"
        keywords={t('seo.keywords.home')}
      />
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0033A0]/90 to-[#8B1A1A]/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzMzOTI5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Community Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-[#0033A0] rounded-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              {t('home.hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              {t('home.hero.learn')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            {t('home.projects.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#0033A0]" />
                <div className="text-3xl mb-2 text-[#8B1A1A]">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains of Intervention Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900">
            {t('domains.title')}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Nos principaux domaines d\'action pour le développement communautaire durable' 
              : 'Our key areas of focus for sustainable community development'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Women's Entrepreneurship */}
            <Link
              to="/interventions/entrepreneurship"
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1761370981160-0e111d79ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBlbnRyZXByZW5ldXJzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczMzA3ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Women's Entrepreneurship"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0033A0]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-[#0033A0] transition-colors">
                  {t('domains.entrepreneurship.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('domains.entrepreneurship.description')}
                </p>
              </div>
            </Link>

            {/* Environment and Sustainable Development */}
            <Link
              to="/interventions/environment"
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1760624683181-7570791efd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVudmlyb25tZW50JTIwdHJlZSUyMHBsYW50aW5nfGVufDF8fHx8MTc3MzM5NjI4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Environment and Sustainable Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0033A0]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-[#0033A0] transition-colors">
                  {t('domains.environment.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('domains.environment.description')}
                </p>
              </div>
            </Link>

            {/* Decentralization and Local Governance */}
            <Link
              to="/interventions/governance"
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1722643882339-7a6c9cb080db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGdvdmVybmFuY2UlMjBjb21tdW5pdHklMjBtZWV0aW5nfGVufDF8fHx8MTc3MzM5NjI4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Decentralization and Local Governance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0033A0]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Scale className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-[#0033A0] transition-colors">
                  {t('domains.governance.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('domains.governance.description')}
                </p>
              </div>
            </Link>

            {/* Rural Economy */}
            <Link
              to="/interventions/rural"
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1767281076144-56846e388134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGVjb25vbXklMjBhZ3JpY3VsdHVyYWwlMjBtYXJrZXR8ZW58MXx8fHwxNzczMzk2MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rural Economy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0033A0]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-[#0033A0] transition-colors">
                  {t('domains.rural.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('domains.rural.description')}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0033A0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            {t('home.hero.cta')}
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join us in making a difference in communities across the region.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-[#0033A0] rounded-md hover:bg-gray-100 transition-colors"
          >
            {t('nav.contact')} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
