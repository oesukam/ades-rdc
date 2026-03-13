import { Heart, Target, Eye, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';

export function About() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('about.value.community'),
      description: t('about.value.community.desc'),
    },
    {
      icon: Target,
      title: t('about.value.sustainability'),
      description: t('about.value.sustainability.desc'),
    },
    {
      icon: Shield,
      title: t('about.value.integrity'),
      description: t('about.value.integrity.desc'),
    },
    {
      icon: Eye,
      title: t('about.value.innovation'),
      description: t('about.value.innovation.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={t('about.title')}
        description={t('about.subtitle')}
        url="/about"
        keywords={t('seo.keywords.about')}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0033A0] to-[#8B1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-100">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.story.description')}
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzMzOTI5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#0033A0] rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl mb-4 text-gray-900">
                {t('about.vision.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#8B1A1A] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl mb-4 text-gray-900">
                {t('about.mission.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            {t('about.values.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-[#0033A0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1694286080661-f44117e019ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXZpbmclMjBncm91cCUyMHdvbWVuJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Saving Groups"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1618265317491-8b7b2324320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBhZnJpY2F8ZW58MXx8fHwxNzczMzkyOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Agriculture"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1646457414481-60c356d88021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwaGVhbHRoJTIwd29ya2VycyUyMHZhY2NpbmF0aW9ufGVufDF8fHx8MTc3MzM5MjkwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healthcare"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
