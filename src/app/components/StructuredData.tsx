import { Helmet } from 'react-helmet-async';
import logo from '@images/logos/ades-logo.png';
import { SITE_URL, SITE_NAME, SITE_NAME_FULL, SITE_DESCRIPTION, CONTACT_INFO, SOCIAL_LINKS } from '../../config/constants';

interface OrganizationSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    email: string;
    contactType: string;
  };
  sameAs?: string[];
}

export function OrganizationSchema({
  name = SITE_NAME_FULL.en,
  description = SITE_DESCRIPTION.en,
  url = SITE_URL,
  logo: logoUrl,
  address = CONTACT_INFO.address,
  contactPoint = {
    telephone: CONTACT_INFO.phone[0],
    email: CONTACT_INFO.email,
    contactType: 'Customer Service',
  },
  sameAs = Object.values(SOCIAL_LINKS),
}: OrganizationSchemaProps) {
  const finalLogoUrl = logoUrl || `${SITE_URL}${logo}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name,
    description,
    url,
    logo: {
      '@type': 'ImageObject',
      url: finalLogoUrl,
    },
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint,
    },
    sameAs,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  potentialAction?: {
    target: string;
    queryInput: string;
  };
}

export function WebsiteSchema({
  name = SITE_NAME,
  url = SITE_URL,
  potentialAction = {
    target: `${SITE_URL}/search?q={search_term_string}`,
    queryInput: 'required name=search_term_string',
  },
}: WebsiteSchemaProps) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: potentialAction.target,
      'query-input': potentialAction.queryInput,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
