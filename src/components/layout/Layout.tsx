import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useVimMotions } from '@/lib/useVimMotions';
import { useSectionReveal } from '@/lib/useSectionReveal';

export function Layout() {
  useVimMotions();
  useSectionReveal();

  // Re-run section reveal on route change
  const location = useLocation();
  useEffect(() => {
    // Small delay to let DOM render after route change
    const timer = setTimeout(() => {
      document.querySelectorAll('.section-rule').forEach((el) => {
        el.classList.remove('in-view');
      });
      // Re-trigger observer by forcing a reflow
      requestAnimationFrame(() => {
        document.querySelectorAll('.section-rule').forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.classList.add('in-view');
          }
        });
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-bg1">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
