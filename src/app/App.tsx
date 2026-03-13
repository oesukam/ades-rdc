import { RouterProvider } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import { router } from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </HelmetProvider>
  );
}
