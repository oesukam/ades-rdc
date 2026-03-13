# SEO Setup Guide for ADES Website

This document describes the SEO implementation for the ADES website, including meta tags, structured data, and sitemap configuration.

## Overview

The website is fully optimized for search engines with:
- Dynamic meta tags using react-helmet-async
- Structured data (JSON-LD) for organizations
- XML sitemap for search engine crawlers
- Robots.txt configuration
- Multilingual SEO support (English and French)
- Canonical URLs to prevent duplicate content

## Components

### 1. SEO Component (`src/app/components/SEO.tsx`)

The main SEO component that handles all meta tags for pages.

**Usage:**
```tsx
import { SEO } from '../components/SEO';

function MyPage() {
  const { t } = useLanguage();

  return (
    <div>
      <SEO
        title={t('page.title')}
        description={t('page.description')}
        keywords={t('seo.keywords.page')}
        url="/my-page"
        image="/custom-image.png" // Optional
        type="website" // Optional: 'website' | 'article' | 'profile'
      />
      {/* Page content */}
    </div>
  );
}
```

**Features:**
- Automatic title formatting: "Page Title | ADES"
- Open Graph meta tags for social media sharing
- Twitter Card meta tags
- Canonical URLs to prevent duplicate content
- Multi-language support with hreflang tags
- Default fallback values for missing props

### 2. Structured Data Components (`src/app/components/StructuredData.tsx`)

Implements Schema.org structured data for better search engine understanding.

#### OrganizationSchema
Provides structured data about ADES as an NGO organization.

**Usage:**
```tsx
<OrganizationSchema
  name="ADES - Action for Development and Social Empowerment"
  description="..."
  url="https://ades-rdc.org"
  logo="https://ades-rdc.org/logo.png"
  address={{
    streetAddress: "123 Development Street",
    addressLocality: "Kinshasa",
    addressCountry: "CD"
  }}
  contactPoint={{
    telephone: "+243-123-456-789",
    email: "info@ades-rdc.org",
    contactType: "Customer Service"
  }}
  sameAs={[
    "https://facebook.com/ades",
    "https://twitter.com/ades",
    "https://instagram.com/ades",
    "https://linkedin.com/company/ades"
  ]}
/>
```

#### WebsiteSchema
Defines the website structure for search engines.

#### BreadcrumbSchema
For implementing breadcrumb navigation (useful for deep pages).

**Usage:**
```tsx
<BreadcrumbSchema
  items={[
    { name: 'Home', url: 'https://ades-rdc.org/' },
    { name: 'Projects', url: 'https://ades-rdc.org/projects' },
    { name: 'Project Name', url: 'https://ades-rdc.org/projects/project-name' }
  ]}
/>
```

### 3. Sitemap (`public/sitemap.xml`)

The sitemap lists all pages for search engine crawlers.

**Current pages included:**
- Home (/)
- About (/about)
- Projects (/projects)
- Gallery (/gallery)
- Team (/team)
- Contact (/contact)
- Individual project pages

**Multi-language support:**
Each URL includes xhtml:link tags for alternate language versions.

**Updating the sitemap:**
When adding new pages, update `public/sitemap.xml`:

```xml
<url>
  <loc>https://ades-rdc.org/new-page</loc>
  <lastmod>2026-03-13</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
  <xhtml:link rel="alternate" hreflang="en" href="https://ades-rdc.org/new-page" />
  <xhtml:link rel="alternate" hreflang="fr" href="https://ades-rdc.org/new-page" />
</url>
```

### 4. Robots.txt (`public/robots.txt`)

Controls search engine crawler access.

**Current configuration:**
- Allows all crawlers
- Points to sitemap location
- No restricted areas

## Translations for SEO

All SEO-related text is translated in `src/app/contexts/LanguageContext.tsx`:

```typescript
// English
'seo.keywords.home': 'ADES, community development, DRC, Congo, NGO, ...',
'seo.keywords.about': 'ADES, about, story, mission, vision, values, ...',

// French
'seo.keywords.home': 'ADES, développement communautaire, RDC, Congo, ONG, ...',
'seo.keywords.about': 'ADES, à propos, histoire, mission, vision, valeurs, ...',
```

**Adding new page keywords:**
1. Add to English translations
2. Add to French translations
3. Use in page: `keywords={t('seo.keywords.yourpage')}`

## Implementation Checklist for New Pages

When creating a new page, follow these steps:

- [ ] Import SEO component
- [ ] Add SEO component with appropriate props
- [ ] Add translations for title, description, and keywords
- [ ] Update sitemap.xml with new URL
- [ ] Add structured data if needed (BreadcrumbSchema for deep pages)

**Example:**
```tsx
import { SEO } from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

export function NewPage() {
  const { t } = useLanguage();

  return (
    <div>
      <SEO
        title={t('newpage.title')}
        description={t('newpage.description')}
        keywords={t('seo.keywords.newpage')}
        url="/new-page"
      />
      {/* Page content */}
    </div>
  );
}
```

## Canonical URLs

The SEO component automatically generates canonical URLs to prevent duplicate content issues:

```html
<link rel="canonical" href="https://ades-rdc.org/about" />
```

**Important:**
- Each page should have a unique URL prop
- Use the same URL structure across language versions
- The canonical URL always points to the same page regardless of language

## Open Graph & Social Media

The SEO component includes Open Graph tags for better social media sharing:

- og:type (website/article/profile)
- og:url
- og:title
- og:description
- og:image
- og:locale (en_US or fr_FR)
- og:site_name

**Testing social media previews:**
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

## Performance

The SEO setup has minimal impact on performance:
- react-helmet-async: Async rendering of head tags
- Structured data: JSON-LD (non-blocking)
- Bundle size increase: ~28KB (gzipped: ~8KB)

## Verification

### 1. Local Testing
```bash
bun run build
bun run dev
```

Visit pages and check:
- Browser title
- View page source for meta tags
- Structured data in `<script type="application/ld+json">`

### 2. Production Testing

After deployment:
- Google Search Console: Submit sitemap
- Google Rich Results Test: https://search.google.com/test/rich-results
- Bing Webmaster Tools: Submit sitemap

### 3. Lighthouse SEO Audit
Run Lighthouse in Chrome DevTools:
```
DevTools > Lighthouse > SEO category > Generate report
```

Target score: 95+/100

## Best Practices

1. **Keep titles under 60 characters**
2. **Keep descriptions between 150-160 characters**
3. **Use relevant keywords naturally**
4. **Update sitemap when adding pages**
5. **Test social media previews before sharing**
6. **Update lastmod in sitemap when content changes**
7. **Use descriptive alt text for images**
8. **Ensure all pages have unique meta descriptions**

## Troubleshooting

### Issue: SEO tags not appearing
**Solution:** Ensure HelmetProvider wraps your app in `App.tsx`

### Issue: Duplicate canonical tags
**Solution:** Remove any `<link rel="canonical">` from index.html, only use SEO component

### Issue: Social media preview not updating
**Solution:** Clear cache in social media debugging tools (URLs above)

### Issue: Language not switching in meta tags
**Solution:** Check that `useLanguage()` is being called and SEO component receives translated props

## Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
