import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { InterventionDetail } from './pages/InterventionDetail';
import { Gallery } from './pages/Gallery';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'interventions/:interventionId', Component: InterventionDetail },
      { path: 'projects', Component: Projects },
      { path: 'projects/:projectId', Component: ProjectDetail },
      { path: 'gallery', Component: Gallery },
      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: BlogDetail },
      { path: 'team', Component: Team },
      { path: 'contact', Component: Contact },
    ],
  },
]);