import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';
import { CONTACT_INFO } from '../../config/constants';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={t('contact.title')}
        description={t('contact.subtitle')}
        keywords={t('seo.keywords.contact')}
        url="/contact"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0033A0] to-[#8B1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-100">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">
                {t('contact.info.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0033A0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">
                      {t('contact.address')}
                    </h3>
                    <p className="text-gray-600">
                      {t('contact.address.city')}<br />
                      {t('contact.address.province')}<br />
                      {t('contact.address.country')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0033A0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">
                      {t('contact.phone')}
                    </h3>
                    <p className="text-gray-600">
                      {CONTACT_INFO.phone.map((phone, index) => (
                        <span key={index}>
                          {phone}
                          {index < CONTACT_INFO.phone.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0033A0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">
                      {t('contact.email')}
                    </h3>
                    <p className="text-gray-600">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0033A0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">
                      {t('contact.hours')}
                    </h3>
                    <p className="text-gray-600">
                      {t('contact.hours.weekday')}<br />
                      {t('contact.hours.saturday')}<br />
                      {t('contact.hours.sunday')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255155.21089354937!2d25.01!3d0.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979f55555555555%3A0x5555555555555555!2sKisangani%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ADES Location - Kisangani, DRC"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">
                {t('contact.form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0033A0] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0033A0] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0033A0] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0033A0] focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#0033A0] text-white rounded-md hover:bg-[#8B1A1A] transition-colors"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
