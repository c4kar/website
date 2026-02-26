import { useEffect } from 'react';

export function useSectionReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.3 }
    );

    const rules = document.querySelectorAll('.section-rule');
    rules.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
