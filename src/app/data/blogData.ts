export interface BlogPost {
  id: string;
  slug: string;
  title: {
    en: string;
    fr: string;
  };
  excerpt: {
    en: string;
    fr: string;
  };
  author: {
    en: string;
    fr: string;
  };
  date: string;
  category: {
    en: string;
    fr: string;
  };
  image: string;
  tags: {
    en: string[];
    fr: string[];
  };
  coverImages?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'empowering-women-through-savings-groups',
    title: {
      en: 'Empowering Women Through Savings Groups',
      fr: "Autonomiser les Femmes par les Groupes d'Épargne",
    },
    excerpt: {
      en: 'Discover how ADES savings groups are transforming lives and building economic resilience in rural communities across the DRC.',
      fr: "Découvrez comment les groupes d'épargne ADES transforment des vies et construisent la résilience économique dans les communautés rurales de la RDC.",
    },
    author: {
      en: 'ADES Team',
      fr: 'Équipe ADES',
    },
    date: '2025-01-15',
    category: {
      en: 'Entrepreneurship',
      fr: 'Entrepreneuriat',
    },
    image: 'https://images.unsplash.com/photo-1694286080661-f44117e019ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXZpbmclMjBncm91cCUyMHdvbWVuJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: {
      en: ['Women Empowerment', 'Savings Groups', 'Financial Inclusion'],
      fr: ["Autonomisation des Femmes", "Groupes d'Épargne", 'Inclusion Financière'],
    },
    coverImages: [
      'https://images.unsplash.com/photo-1751276651723-3b9b000ce37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpbmFuY2lhbCUyMGxpdGVyYWN5JTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MzI5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1626804274625-a2f62d433993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwc2F2aW5ncyUyMGxvYW5zJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: '2',
    slug: 'sustainable-agriculture-climate-change',
    title: {
      en: 'Sustainable Agriculture in the Face of Climate Change',
      fr: 'Agriculture Durable Face au Changement Climatique',
    },
    excerpt: {
      en: 'Learn how ADES is helping farmers adapt to climate change through sustainable farming practices and climate-smart agriculture.',
      fr: "Découvrez comment ADES aide les agriculteurs à s'adapter au changement climatique grâce à des pratiques agricoles durables et une agriculture intelligente face au climat.",
    },
    author: {
      en: 'ADES Team',
      fr: 'Équipe ADES',
    },
    date: '2025-01-10',
    category: {
      en: 'Environment',
      fr: 'Environnement',
    },
    image: 'https://images.unsplash.com/photo-1618265317491-8b7b2324320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBhZnJpY2F8ZW58MXx8fHwxNzczMzkyOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: {
      en: ['Climate Change', 'Sustainable Agriculture', 'Food Security'],
      fr: ['Changement Climatique', 'Agriculture Durable', 'Sécurité Alimentaire'],
    },
    coverImages: [
      'https://images.unsplash.com/photo-1643474004250-05d73e1473e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwdHJhaW5pbmclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NzMzOTMyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1722810767143-40a6a7a74b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzczMzkwNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: '3',
    slug: 'vaccination-campaigns-protecting-communities',
    title: {
      en: 'Vaccination Campaigns: Protecting Our Communities',
      fr: 'Campagnes de Vaccination : Protéger Nos Communautés',
    },
    excerpt: {
      en: "Read about ADES's vaccination outreach efforts bringing life-saving immunizations to remote and underserved communities.",
      fr: "Découvrez les efforts de sensibilisation à la vaccination d'ADES apportant des immunisations vitales aux communautés éloignées et mal desservies.",
    },
    author: {
      en: 'ADES Team',
      fr: 'Équipe ADES',
    },
    date: '2025-01-05',
    category: {
      en: 'Health',
      fr: 'Santé',
    },
    image: 'https://images.unsplash.com/photo-1646457414481-60c356d88021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwaGVhbHRoJTIwd29ya2VycyUyMHZhY2NpbmF0aW9ufGVufDF8fHx8MTc3MzM5MjkwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: {
      en: ['Healthcare', 'Vaccination', 'Community Health'],
      fr: ['Soins de Santé', 'Vaccination', 'Santé Communautaire'],
    },
  },
];

// Helper function to get blog post by slug
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Helper function to get recent posts
export function getRecentPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Helper function to get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category.en === category || post.category.fr === category);
}
