import { useParams, Link } from 'react-router';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';

export function InterventionDetail() {
  const { interventionId } = useParams<{ interventionId: string }>();
  const { t } = useLanguage();

  // Define intervention areas data
  const interventionData: Record<string, {
    icon: string;
    color: string;
    activities: string[];
    projects: Array<{ id: string; slug: string }>;
    achievements: Array<{ metric: string; value: string }>;
  }> = {
    entrepreneurship: {
      icon: '💼',
      color: 'from-purple-600 to-pink-600',
      activities: [
        'interventions.activities.entrepreneurship.1',
        'interventions.activities.entrepreneurship.2',
        'interventions.activities.entrepreneurship.3',
        'interventions.activities.entrepreneurship.4',
      ],
      projects: [
        { id: 'saving-groups', slug: 'saving-groups' },
        { id: 'microfinance', slug: 'microfinance' },
        { id: 'business-training', slug: 'business-training' },
      ],
      achievements: [
        { metric: 'interventions.achievements.women_trained', value: '2,500+' },
        { metric: 'interventions.achievements.businesses_started', value: '180+' },
        { metric: 'interventions.achievements.savings_groups', value: '120+' },
      ],
    },
    environment: {
      icon: '🌿',
      color: 'from-green-600 to-emerald-600',
      activities: [
        'interventions.activities.environment.1',
        'interventions.activities.environment.2',
        'interventions.activities.environment.3',
        'interventions.activities.environment.4',
      ],
      projects: [
        { id: 'agro-business', slug: 'agro-business' },
        { id: 'reforestation', slug: 'reforestation' },
        { id: 'climate-resilience', slug: 'climate-resilience' },
      ],
      achievements: [
        { metric: 'interventions.achievements.trees_planted', value: '50,000+' },
        { metric: 'interventions.achievements.farmers_trained', value: '1,200+' },
        { metric: 'interventions.achievements.hectares_restored', value: '500+' },
      ],
    },
    governance: {
      icon: '⚖️',
      color: 'from-blue-600 to-indigo-600',
      activities: [
        'interventions.activities.governance.1',
        'interventions.activities.governance.2',
        'interventions.activities.governance.3',
        'interventions.activities.governance.4',
      ],
      projects: [
        { id: 'community-leadership', slug: 'community-leadership' },
        { id: 'civic-education', slug: 'civic-education' },
        { id: 'conflict-resolution', slug: 'conflict-resolution' },
      ],
      achievements: [
        { metric: 'interventions.achievements.leaders_trained', value: '300+' },
        { metric: 'interventions.achievements.conflicts_resolved', value: '45+' },
        { metric: 'interventions.achievements.communities_engaged', value: '80+' },
      ],
    },
    rural: {
      icon: '📈',
      color: 'from-orange-600 to-red-600',
      activities: [
        'interventions.activities.rural.1',
        'interventions.activities.rural.2',
        'interventions.activities.rural.3',
        'interventions.activities.rural.4',
      ],
      projects: [
        { id: 'vaccination', slug: 'vaccination' },
        { id: 'health', slug: 'health' },
        { id: 'agricultural-development', slug: 'agricultural-development' },
      ],
      achievements: [
        { metric: 'interventions.achievements.vaccinations', value: '50,000+' },
        { metric: 'interventions.achievements.health_workers', value: '200+' },
        { metric: 'interventions.achievements.villages_served', value: '150+' },
      ],
    },
  };

  const intervention = interventionId ? interventionData[interventionId] : null;

  if (!intervention || !interventionId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">{t('common.not_found')}</p>
          <Link
            to="/"
            className="px-6 py-3 bg-[#0033A0] text-white rounded-md hover:bg-[#002080] transition-colors inline-flex items-center"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            {t('common.back_home')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={t(`domains.${interventionId}.title`)}
        description={t(`domains.${interventionId}.description`)}
        keywords={t('seo.keywords.projects')}
        url={`/interventions/${interventionId}`}
      />

      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-r ${intervention.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            {t('common.back')}
          </Link>
          <div className="flex items-start space-x-6">
            <div className="text-6xl">{intervention.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl mb-4">
                {t(`domains.${interventionId}.title`)}
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                {t(`domains.${interventionId}.description`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">{t('interventions.key_achievements')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {intervention.achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#0033A0] mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 text-lg">
                  {t(achievement.metric)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12">{t('interventions.our_activities')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {intervention.activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  {t(activity)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12">{t('interventions.related_projects')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {intervention.projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${intervention.color}`} />
                <div className="p-6">
                  <h3 className="text-xl mb-3 group-hover:text-[#0033A0] transition-colors">
                    {t(`interventions.projects.${project.id}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(`interventions.projects.${project.id}.description`)}
                  </p>
                  <div className="inline-flex items-center text-[#0033A0] font-semibold group-hover:translate-x-2 transition-transform">
                    {t('common.learn_more')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">
            {t('interventions.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('interventions.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#0033A0] text-white rounded-md hover:bg-[#002080] transition-colors inline-flex items-center justify-center"
            >
              {t('interventions.cta.contact')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 bg-white text-[#0033A0] border-2 border-[#0033A0] rounded-md hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              {t('interventions.cta.view_projects')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
