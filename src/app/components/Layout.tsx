import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { OrganizationSchema, WebsiteSchema } from './StructuredData';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <OrganizationSchema />
      <WebsiteSchema />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
