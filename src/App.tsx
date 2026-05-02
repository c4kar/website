import { HeroSection } from '@/components/HeroSection';
import { AboutView } from '@/components/AboutView';
import { ProjectsView } from '@/components/ProjectsView';
import { BlogView } from '@/components/BlogView';
import { ContactView } from '@/components/ContactView';
import { Tabs } from '@/components/ui/Tabs';

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  return (
    <main className="w-full max-w-[1165px] mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-0 lg:h-full lg:max-h-[832px] flex flex-col lg:flex-row gap-0">
      {/* Left: Hero */}
      <aside className="lg:w-[360px] flex-shrink-0 lg:border-r lg:border-border">
        <HeroSection />
      </aside>

      {/* Divider on mobile */}
      <div className="lg:hidden border-t border-border my-6" />

      {/* Right: Tabbed Content */}
      <section className="flex-1 min-w-0 lg:py-8 lg:pl-8 flex flex-col">
        <Tabs tabs={TABS} defaultTab="about" className="h-full">
          {(activeTab) => (
            <div className="h-full">
              {activeTab === 'about' && <AboutView />}
              {activeTab === 'projects' && <ProjectsView />}
              {activeTab === 'blog' && <BlogView />}
              {activeTab === 'contact' && <ContactView />}
            </div>
          )}
        </Tabs>
      </section>
    </main>
  );
}
