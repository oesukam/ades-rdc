export interface GalleryImage {
  url: string;
  title: string;
  caption: string;
  project: string; // Project ID
}

export const galleryImages: GalleryImage[] = [
  // Saving Groups Project
  {
    url: 'https://images.unsplash.com/photo-1694286080661-f44117e019ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXZpbmclMjBncm91cCUyMHdvbWVuJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Women Savings Group Meeting',
    caption: 'Women participating in savings group meeting',
    project: 'saving-groups',
  },
  {
    url: 'https://images.unsplash.com/photo-1751276651723-3b9b000ce37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpbmFuY2lhbCUyMGxpdGVyYWN5JTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MzI5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Financial Literacy Training',
    caption: 'Financial literacy training session',
    project: 'saving-groups',
  },
  {
    url: 'https://images.unsplash.com/photo-1626804274625-a2f62d433993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwc2F2aW5ncyUyMGxvYW5zJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Community Savings Celebration',
    caption: 'Community members celebrating their savings',
    project: 'saving-groups',
  },
  {
    url: 'https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzMzOTI5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Leadership Training',
    caption: 'Group leaders during management training',
    project: 'saving-groups',
  },

  // Agro-Business Project
  {
    url: 'https://images.unsplash.com/photo-1618265317491-8b7b2324320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBhZnJpY2F8ZW58MXx8fHwxNzczMzkyOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Sustainable Agriculture',
    caption: 'Farmers working in sustainable agriculture project',
    project: 'agro-business',
  },
  {
    url: 'https://images.unsplash.com/photo-1643474004250-05d73e1473e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwdHJhaW5pbmclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NzMzOTMyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Farming Techniques Training',
    caption: 'Training session on modern farming techniques',
    project: 'agro-business',
  },
  {
    url: 'https://images.unsplash.com/photo-1722810767143-40a6a7a74b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzczMzkwNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Organic Farming',
    caption: 'Organic vegetable farming demonstration',
    project: 'agro-business',
  },
  {
    url: 'https://images.unsplash.com/photo-1644175529498-694e121b808a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzczMzkyOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Farmer Cooperative',
    caption: 'Farmer cooperative leadership team',
    project: 'agro-business',
  },

  // Vaccination Campaigns Project
  {
    url: 'https://images.unsplash.com/photo-1646457414481-60c356d88021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwaGVhbHRoJTIwd29ya2VycyUyMHZhY2NpbmF0aW9ufGVufDF8fHx8MTc3MzM5MjkwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Vaccination Campaign',
    caption: 'Health workers conducting vaccination campaign',
    project: 'vaccination',
  },
  {
    url: 'https://images.unsplash.com/photo-1632052999485-d748103abf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHZhY2NpbmF0aW9uJTIwaW1tdW5pemF0aW9ufGVufDF8fHx8MTc3MzM5MzI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Child Immunization',
    caption: 'Child receiving immunization',
    project: 'vaccination',
  },
  {
    url: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3b3JrZXJzJTIwY29tbXVuaXR5JTIwb3V0cmVhY2h8ZW58MXx8fHwxNzczMzkzMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Community Outreach',
    caption: 'Community health outreach program',
    project: 'vaccination',
  },
  {
    url: 'https://images.unsplash.com/photo-1551357177-fd346f2cdbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mobile Health Clinic',
    caption: 'Mobile health clinic setup',
    project: 'vaccination',
  },

  // Community Health Project
  {
    url: 'https://images.unsplash.com/photo-1551357177-fd346f2cdbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Health Center Services',
    caption: 'Community health center providing services',
    project: 'health',
  },
  {
    url: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3b3JrZXJzJTIwY29tbXVuaXR5JTIwb3V0cmVhY2h8ZW58MXx8fHwxNzczMzkzMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Health Workers Outreach',
    caption: 'Health workers during community outreach',
    project: 'health',
  },
  {
    url: 'https://images.unsplash.com/photo-1646457414481-60c356d88021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwaGVhbHRoJTIwd29ya2VycyUyMHZhY2NpbmF0aW9ufGVufDF8fHx8MTc3MzM5MjkwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Healthcare Delivery',
    caption: 'Healthcare service delivery in action',
    project: 'health',
  },
  {
    url: 'https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzMzOTI5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Health Education',
    caption: 'Health education session with community',
    project: 'health',
  },
];

// Project mapping for display names
export const projectNames: Record<string, { en: string; fr: string }> = {
  'saving-groups': {
    en: 'Saving Groups',
    fr: 'Groupes d\'Épargne',
  },
  'agro-business': {
    en: 'Agro-Business Development',
    fr: 'Développement de l\'Agro-Business',
  },
  'vaccination': {
    en: 'Vaccination Campaigns',
    fr: 'Campagnes de Vaccination',
  },
  'health': {
    en: 'Community Health',
    fr: 'Santé Communautaire',
  },
};

// Helper function to get images by project
export function getImagesByProject(projectId: string): GalleryImage[] {
  return galleryImages.filter((image) => image.project === projectId);
}

// Helper function to get all unique projects
export function getAllProjects(): string[] {
  return Array.from(new Set(galleryImages.map((image) => image.project)));
}
