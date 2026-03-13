import { Banknote, Sprout, Syringe, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'saving-groups',
      icon: Banknote,
      title: t('projects.saving.title'),
      description: t('projects.saving.description'),
      image: 'https://images.unsplash.com/photo-1694286080661-f44117e019ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXZpbmclMjBncm91cCUyMHdvbWVuJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-blue-600',
    },
    {
      id: 'agro-business',
      icon: Sprout,
      title: t('projects.agro.title'),
      description: t('projects.agro.description'),
      image: 'https://images.unsplash.com/photo-1618265317491-8b7b2324320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBhZnJpY2F8ZW58MXx8fHwxNzczMzkyOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-green-600',
    },
    {
      id: 'vaccination-campaigns',
      icon: Syringe,
      title: t('projects.vaccination.title'),
      description: t('projects.vaccination.description'),
      image: 'https://images.unsplash.com/photo-1646457414481-60c356d88021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwaGVhbHRoJTIwd29ya2VycyUyMHZhY2NpbmF0aW9ufGVufDF8fHx8MTc3MzM5MjkwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-red-600',
    },
    {
      id: 'community-health',
      icon: HeartPulse,
      title: t('projects.health.title'),
      description: t('projects.health.description'),
      image: 'https://images.unsplash.com/photo-1551357177-fd346f2cdbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-purple-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0033A0] to-[#8B1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-100">
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${project.color} p-3 rounded-lg`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Link 
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-[#0033A0] hover:text-[#8B1A1A] transition-colors"
                  >
                    {t('projects.learn')} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl mb-4 text-gray-900">
                {t('projects.saving.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Groups</span>
                  <span className="text-2xl text-[#0033A0]">180+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Members</span>
                  <span className="text-2xl text-[#0033A0]">4,500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Savings</span>
                  <span className="text-2xl text-[#0033A0]">$850K+</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl mb-4 text-gray-900">
                {t('projects.agro.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Farmers Trained</span>
                  <span className="text-2xl text-[#0033A0]">1,200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Hectares Cultivated</span>
                  <span className="text-2xl text-[#0033A0]">2,800+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Productivity Increase</span>
                  <span className="text-2xl text-[#0033A0]">45%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}