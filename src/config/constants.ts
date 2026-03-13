/**
 * Application-wide constants
 */

export const SITE_URL = 'https://www.ades-rdc.org';

export const SITE_NAME = 'ADES';

export const SITE_NAME_FULL = {
  en: 'ADES - Action for Development and Social Empowerment',
  fr: 'ADES - Action pour le Développement et l\'Épanouissement Social',
} as const;

export const SITE_DESCRIPTION = {
  en: 'ADES is dedicated to improving lives through community-driven development programs. We focus on economic empowerment, healthcare access, and sustainable agriculture.',
  fr: 'ADES se consacre à améliorer les vies à travers des programmes de développement communautaire. Nous nous concentrons sur l\'autonomisation économique, l\'accès aux soins de santé et l\'agriculture durable.',
} as const;

export const CONTACT_INFO = {
  email: 'info@ades-rdc.org',
  phone: ['+243 822 754 420'],
  address: {
    streetAddress: '123 Development Street',
    addressLocality: 'Kisangani',
    addressRegion: 'Tshopo Province',
    addressCountry: 'CD',
  },
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/ades',
  twitter: 'https://twitter.com/ades',
  instagram: 'https://instagram.com/ades',
  linkedin: 'https://linkedin.com/company/ades',
} as const;
