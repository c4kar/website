import { HeroSection } from '@/components/HeroSection';
import { AboutView } from '@/components/AboutView';
import { ProjectsView } from '@/components/ProjectsView';
import { ContactView } from '@/components/ContactView';
import { Tabs } from '@/components/ui/Tabs';

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  return (
    <main className="w-full max-w-[1165px] mx-auto px-8 h-full max-h-[832px] flex flex-col md:flex-row gap-0">
      {/* Left: Hero */}
      <aside className="md:w-[360px] flex-shrink-0 md:border-r md:border-border">
        <HeroSection />
      </aside>

      {/* Right: Tabbed Content */}
      <section className="flex-1 min-w-0 py-8 md:pl-8 flex flex-col">
        <Tabs tabs={TABS} defaultTab="about" className="h-full">
          {(activeTab) => (
            <div className="h-full">
              {activeTab === 'about' && <AboutView />}
              {activeTab === 'projects' && <ProjectsView />}
              {activeTab === 'contact' && <ContactView />}
            </div>
          )}
        </Tabs>
      </section>
    </main>
  );
}
