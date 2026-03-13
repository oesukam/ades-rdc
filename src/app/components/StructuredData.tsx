import { Helmet } from 'react-helmet-async';
import logo from '@images/logos/ades-logo.png';

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
  name = 'ADES - Action for Development and Social Empowerment',
  description = 'ADES is dedicated to improving lives through community-driven development programs. We focus on economic empowerment, healthcare access, and sustainable agriculture.',
  url = 'https://www.ades-rdc.org',
  logo: logoUrl,
  address = {
    streetAddress: '123 Development Street',
    addressLocality: 'Kinshasa',
    addressCountry: 'CD',
  },
  contactPoint = {
    telephone: '+243-123-456-789',
    email: 'info@ades-rdc.org',
    contactType: 'Customer Service',
  },
  sameAs = [
    'https://facebook.com/ades',
    'https://twitter.com/ades',
    'https://instagram.com/ades',
    'https://linkedin.com/company/ades',
  ],
}: OrganizationSchemaProps) {
  const baseUrl = 'https://www.ades-rdc.org';
  const finalLogoUrl = logoUrl || `${baseUrl}${logo}`;

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
  name = 'ADES',
  url = 'https://www.ades-rdc.org',
  potentialAction = {
    target: 'https://www.ades-rdc.org/search?q={search_term_string}',
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
