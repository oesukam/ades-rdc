import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '@images/logos/ades-logo.png';
import { SITE_URL, SITE_NAME_FULL, SITE_DESCRIPTION } from '../../config/constants';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  readingTime?: string;
}

export function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  tags,
  readingTime,
}: SEOProps) {
  const { language } = useLanguage();

  const defaultTitle = SITE_NAME_FULL[language];
  const defaultDescription = SITE_DESCRIPTION[language];

  const siteTitle = title ? `${title} | ADES` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const defaultImage = image || logo;
  const imageUrl = typeof defaultImage === 'string' && defaultImage.startsWith('http')
    ? defaultImage
    : `${SITE_URL}${defaultImage}`;

  // Generate JSON-LD structured data for articles
  const articleStructuredData = type === 'article' && publishedTime ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: siteDescription,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: author || 'ADES',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADES',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${logo}`,
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl,
    },
    ...(tags && tags.length > 0 && { keywords: tags.join(', ') }),
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:site_name" content="ADES" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${url || ''}`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}${url || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${url || ''}`} />

      {/* Article-specific meta tags */}
      {type === 'article' && author && <meta property="article:author" content={author} />}
      {type === 'article' && tags && tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      {type === 'article' && <meta property="article:section" content="Community Development" />}

      {/* JSON-LD Structured Data */}
      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}

      {/* Reading time for articles */}
      {readingTime && <meta name="twitter:label1" content="Reading time" />}
      {readingTime && <meta name="twitter:data1" content={readingTime} />}
    </Helmet>
  );
}
