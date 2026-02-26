import { useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from './data';

const SCROLL_STEP = 80;

export function useVimMotions() {
  const navigate = useNavigate();
  const location = useLocation();
  const lastKey = useRef('');
  const lastKeyTime = useRef(0);

  const isInputFocused = useCallback(() => {
    const el = document.activeElement;
    if (!el) return false;
    const tag = el.tagName.toLowerCase();
    return (
      tag === 'input' ||
      tag === 'textarea' ||
      tag === 'select' ||
      (el as HTMLElement).isContentEditable
    );
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (isInputFocused()) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const now = Date.now();
      const key = e.key;

      // gg = scroll to top (two g's within 500ms)
      if (key === 'g') {
        if (lastKey.current === 'g' && now - lastKeyTime.current < 500) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          lastKey.current = '';
          return;
        }
        lastKey.current = 'g';
        lastKeyTime.current = now;
        return;
      }

      // G = scroll to bottom
      if (key === 'G') {
        e.preventDefault();
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        lastKey.current = '';
        return;
      }

      // j = scroll down
      if (key === 'j') {
        e.preventDefault();
        window.scrollBy({ top: SCROLL_STEP, behavior: 'smooth' });
        lastKey.current = '';
        return;
      }

      // k = scroll up
      if (key === 'k') {
        e.preventDefault();
        window.scrollBy({ top: -SCROLL_STEP, behavior: 'smooth' });
        lastKey.current = '';
        return;
      }

      // h = previous page
      if (key === 'h') {
        e.preventDefault();
        const currentIdx = NAV_ITEMS.findIndex(
          (n) => n.path === location.pathname
        );
        if (currentIdx > 0) {
          navigate(NAV_ITEMS[currentIdx - 1].path);
        }
        lastKey.current = '';
        return;
      }

      // l = next page
      if (key === 'l') {
        e.preventDefault();
        const currentIdx = NAV_ITEMS.findIndex(
          (n) => n.path === location.pathname
        );
        if (currentIdx >= 0 && currentIdx < NAV_ITEMS.length - 1) {
          navigate(NAV_ITEMS[currentIdx + 1].path);
        }
        lastKey.current = '';
        return;
      }

      lastKey.current = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location.pathname, isInputFocused]);
}
