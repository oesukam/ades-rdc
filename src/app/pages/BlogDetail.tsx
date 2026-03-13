import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';
import { getBlogBySlug, getRecentPosts } from '../data/blogData';
import { lazy, Suspense } from 'react';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();

  const post = slug ? getBlogBySlug(slug) : null;
  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug);

  // Dynamically import the MDX content based on slug and language
  const MDXContent = slug
    ? lazy(() => import(`../../content/blog/${slug}.${language}.mdx`))
    : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-gray-900">{t('common.not_found')}</h1>
          <p className="text-xl text-gray-600 mb-8">{t('blog.post_not_found')}</p>
          <Link
            to="/blog"
            className="px-6 py-3 bg-[#0033A0] text-white rounded-md hover:bg-[#002080] transition-colors inline-flex items-center"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            {t('blog.back_to_blog')}
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={post.title[language]}
        description={post.excerpt[language]}
        keywords={post.tags[language].join(', ')}
        url={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        author={post.author[language]}
        publishedTime={post.date}
        tags={post.tags[language]}
        readingTime="5 min read"
      />

      {/* Hero Section with Featured Image */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={post.image}
          alt={post.title[language]}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
          <Link
            to="/blog"
            className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            {t('blog.back_to_blog')}
          </Link>
          <span className="inline-block px-3 py-1 bg-[#0033A0] text-white text-sm rounded-full mb-4 w-fit">
            {post.category[language]}
          </span>
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            {post.title[language]}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 pb-6 mb-6 border-b border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="w-5 h-5" />
                <span>{post.author[language]}</span>
              </div>
            </div>

            {/* Article Body */}
            <article className="prose prose-lg lg:prose-xl max-w-none mb-8 blog-content">
              {MDXContent ? (
                <Suspense fallback={<div className="text-center py-8 text-gray-600">Loading content...</div>}>
                  <MDXContent />

                  {/* Cover Images in Content */}
                  {post.coverImages && post.coverImages.length > 0 && (
                    <div className="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {post.coverImages.map((imageUrl, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                          <img
                            src={imageUrl}
                            alt={`${post.title[language]} - Image ${imgIndex + 1}`}
                            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </Suspense>
              ) : (
                <p className="text-gray-600">Content not available</p>
              )}
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200">
              {post.tags[language].map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Section */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                {t('blog.share_post')}
              </h3>
              <div className="flex items-center space-x-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title[language])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-8 text-gray-900">{t('blog.recent_posts')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title[language]}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg mb-2 text-gray-900 group-hover:text-[#0033A0] transition-colors line-clamp-2">
                      {relatedPost.title[language]}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt[language]}
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      {formatDate(relatedPost.date)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
