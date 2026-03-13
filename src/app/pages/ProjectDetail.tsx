import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, Users, MapPin, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getImagesByProject } from '../data/galleryData';
import { ImageLightbox } from '../components/ImageLightbox';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  objectives: string[];
  impact: {
    label: string;
    value: string;
  }[];
  location: string;
  duration: string;
  beneficiaries: string;
  gallery: {
    url: string;
    caption: string;
  }[];
}

const projectsData: Record<string, ProjectData> = {
  'saving-groups': {
    id: 'saving-groups',
    title: 'Saving Groups',
    description: 'Empowering communities through financial literacy and savings programs.',
    fullDescription: 'Our Saving Groups program establishes Village Savings and Loan Associations (VSLAs) to promote financial inclusion and economic empowerment in rural communities. We provide training in financial literacy, group management, and entrepreneurship to help members build sustainable livelihoods.',
    objectives: [
      'Establish 200+ VSLAs across rural communities',
      'Train 5,000+ members in financial literacy',
      'Promote women economic empowerment',
      'Facilitate access to micro-credit for small businesses',
      'Build community resilience through collective savings',
    ],
    impact: [
      { label: 'Active Groups', value: '180+' },
      { label: 'Total Members', value: '4,500+' },
      { label: 'Total Savings', value: '$850,000+' },
      { label: 'Loans Disbursed', value: '$620,000+' },
    ],
    location: 'Rural districts across 5 provinces',
    duration: 'Ongoing since 2018',
    beneficiaries: '4,500+ community members (78% women)',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1694286080661-f44117e019ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXZpbmclMjBncm91cCUyMHdvbWVuJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNHww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Women participating in savings group meeting',
      },
      {
        url: 'https://images.unsplash.com/photo-1751276651723-3b9b000ce37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpbmFuY2lhbCUyMGxpdGVyYWN5JTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MzI5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Financial literacy training session',
      },
      {
        url: 'https://images.unsplash.com/photo-1626804274625-a2f62d433993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwc2F2aW5ncyUyMGxvYW5zJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Community members celebrating their savings',
      },
      {
        url: 'https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzMzOTI5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Group leaders during management training',
      },
    ],
  },
  'agro-business': {
    id: 'agro-business',
    title: 'Agro-Business Development',
    description: 'Supporting farmers with training, resources, and market access.',
    fullDescription: 'The Agro-Business Development program focuses on improving agricultural productivity and farmer incomes through sustainable farming practices, value chain development, and market linkages. We provide comprehensive training, quality inputs, and connect farmers to profitable markets.',
    objectives: [
      'Train 1,500+ farmers in modern agricultural techniques',
      'Promote climate-smart agriculture practices',
      'Establish farmer cooperatives and market linkages',
      'Increase crop yields by 40-50%',
      'Support value addition and post-harvest management',
    ],
    impact: [
      { label: 'Farmers Trained', value: '1,200+' },
      { label: 'Hectares Cultivated', value: '2,800+' },
      { label: 'Yield Increase', value: '45%' },
      { label: 'Income Increase', value: '38%' },
    ],
    location: 'Agricultural zones in 8 districts',
    duration: 'Ongoing since 2017',
    beneficiaries: '1,200+ smallholder farmers and their families',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1618265317491-8b7b2324320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBhZnJpY2F8ZW58MXx8fHwxNzczMzkyOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Farmers working in sustainable agriculture project',
      },
      {
        url: 'https://images.unsplash.com/photo-1643474004250-05d73e1473e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwdHJhaW5pbmclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NzMzOTMyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Training session on modern farming techniques',
      },
      {
        url: 'https://images.unsplash.com/photo-1722810767143-40a6a7a74b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzczMzkwNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Organic vegetable farming demonstration',
      },
      {
        url: 'https://images.unsplash.com/photo-1644175529498-694e121b808a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzczMzkyOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Farmer cooperative leadership team',
      },
    ],
  },
  'vaccination-campaigns': {
    id: 'vaccination-campaigns',
    title: 'Vaccination Campaigns',
    description: 'Providing access to life-saving vaccines through community outreach.',
    fullDescription: 'Our Vaccination Campaigns ensure comprehensive immunization coverage in underserved communities. Working closely with health authorities, we conduct outreach programs, mobile vaccination clinics, and health education sessions to protect children and vulnerable populations from preventable diseases.',
    objectives: [
      'Reach 60,000+ children with routine immunizations',
      'Conduct mobile vaccination clinics in remote areas',
      'Educate communities on vaccine importance',
      'Support cold chain management in health centers',
      'Monitor and track immunization coverage',
    ],
    impact: [
      { label: 'Vaccinations Delivered', value: '50,000+' },
      { label: 'Communities Reached', value: '120+' },
      { label: 'Coverage Rate', value: '92%' },
      { label: 'Mobile Clinics', value: '85' },
    ],
    location: 'Remote and underserved communities',
    duration: 'Annual campaigns since 2016',
    beneficiaries: '50,000+ children and vulnerable individuals',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1646457414481-60c356d88021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwaGVhbHRoJTIwd29ya2VycyUyMHZhY2NpbmF0aW9ufGVufDF8fHx8MTc3MzM5MjkwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Health workers conducting vaccination campaign',
      },
      {
        url: 'https://images.unsplash.com/photo-1632052999485-d748103abf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHZhY2NpbmF0aW9uJTIwaW1tdW5pemF0aW9ufGVufDF8fHx8MTc3MzM5MzI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Child receiving immunization',
      },
      {
        url: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3b3JrZXJzJTIwY29tbXVuaXR5JTIwb3V0cmVhY2h8ZW58MXx8fHwxNzczMzkzMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Community health outreach program',
      },
      {
        url: 'https://images.unsplash.com/photo-1551357177-fd346f2cdbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Mobile health clinic setup',
      },
    ],
  },
  'community-health': {
    id: 'community-health',
    title: 'Community Health',
    description: 'Strengthening healthcare systems and promoting preventive health practices.',
    fullDescription: 'The Community Health program works to strengthen healthcare delivery and promote preventive health practices in underserved areas. We train community health workers, support health facilities, and conduct health education campaigns on nutrition, hygiene, maternal health, and disease prevention.',
    objectives: [
      'Train 200+ community health workers',
      'Establish health education programs',
      'Improve maternal and child health outcomes',
      'Support primary healthcare facilities',
      'Promote hygiene and sanitation practices',
    ],
    impact: [
      { label: 'Health Workers Trained', value: '180+' },
      { label: 'Facilities Supported', value: '25' },
      { label: 'People Reached', value: '35,000+' },
      { label: 'Health Sessions', value: '450+' },
    ],
    location: 'Underserved communities in 6 districts',
    duration: 'Ongoing since 2019',
    beneficiaries: '35,000+ community members',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1551357177-fd346f2cdbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc3MzM5MjkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Community health center providing services',
      },
      {
        url: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3b3JrZXJzJTIwY29tbXVuaXR5JTIwb3V0cmVhY2h8ZW58MXx8fHwxNzczMzkzMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Health workers during community outreach',
      },
      {
        url: 'https://images.unsplash.com/photo-1646457414481-60c356d88021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwaGVhbHRoJTIwd29ya2VycyUyMHZhY2NpbmF0aW9ufGVufDF8fHx8MTc3MzM5MjkwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Healthcare service delivery in action',
      },
      {
        url: 'https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzMzOTI5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Health education session with community',
      },
    ],
  },
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectId ? projectsData[projectId] : null;

  // Get project images from centralized gallery data
  const projectImages = projectId ? getImagesByProject(projectId) : [];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4 text-gray-900">Project Not Found</h1>
          <Link to="/projects" className="text-[#0033A0] hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0033A0] to-[#8B1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>
          <p className="text-xl text-gray-100">{project.description}</p>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-2">
                <MapPin className="w-5 h-5 text-[#0033A0]" />
                <h3 className="font-semibold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600">{project.location}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-2">
                <Calendar className="w-5 h-5 text-[#0033A0]" />
                <h3 className="font-semibold text-gray-900">Duration</h3>
              </div>
              <p className="text-gray-600">{project.duration}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-5 h-5 text-[#0033A0]" />
                <h3 className="font-semibold text-gray-900">Beneficiaries</h3>
              </div>
              <p className="text-gray-600">{project.beneficiaries}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">About This Project</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {project.fullDescription}
              </p>
            </div>
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">
                <Target className="inline w-8 h-8 mr-2 text-[#0033A0]" />
                Objectives
              </h2>
              <ul className="space-y-3">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#0033A0] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.impact.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-2 text-[#0033A0]">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projectImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-white/80">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && projectImages.length > 0 && (
        <ImageLightbox
          images={projectImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}

      {/* Call to Action */}
      <section className="py-16 bg-[#0033A0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Support This Project
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Your contribution can help us expand this program and reach more communities in need.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#0033A0] rounded-md hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}
