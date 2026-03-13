import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Team() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Jean-Pierre LOKELOKE',
      position: 'President',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JeanPierreLokeloke&backgroundColor=e0e0e0&skinColor=transparent',
      bio: 'Leading ADES with vision and strategic direction for community development and sustainable impact.',
    },
    {
      name: 'To Be Announced',
      position: 'Vice-President',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VicePresident&backgroundColor=e0e0e0&skinColor=transparent',
      bio: 'Supporting the President and overseeing program implementation and organizational operations.',
    },
    {
      name: 'To Be Announced',
      position: 'Accountant',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Accountant&backgroundColor=e0e0e0&skinColor=transparent',
      bio: 'Managing financial resources, budgets, and ensuring transparent financial accountability.',
    },
    {
      name: 'To Be Announced',
      position: 'Secretary',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Secretary&backgroundColor=e0e0e0&skinColor=transparent',
      bio: 'Maintaining records, coordinating communications, and supporting organizational administration.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0033A0] to-[#8B1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t('team.title')}
          </h1>
          <p className="text-xl text-gray-100">
            {t('team.subtitle')}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-[#0033A0] mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0033A0] hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0033A0] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for passionate individuals who want to make a difference in communities. If you're interested in joining our team, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#0033A0] text-white rounded-md hover:bg-[#8B1A1A] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
