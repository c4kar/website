import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { NAV_ITEMS } from '@/lib/data';
import clsx from 'clsx';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-bg1 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-10 flex items-center justify-between text-xs font-mono">
          {/* Left: user@host */}
          <Link to="/" className="flex items-center gap-0 text-text-muted hover:text-text-secondary transition-colors">
            <span className="text-terminal-dim-green">c4kar</span>
            <span className="text-text-muted">@</span>
            <span className="text-terminal-amber">portfoilo</span>
            <span className="text-text-muted ml-1.5">~</span>
          </Link>

          {/* Center/Right: Nav items as inline path */}
          <nav className="hidden md:flex items-center gap-0">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  clsx(
                    'px-2.5 py-1 transition-colors duration-100',
                    isActive
                      ? 'text-terminal-green'
                      : 'text-text-muted hover:text-text-secondary'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden text-text-muted hover:text-terminal-green text-xs font-mono"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '[x]' : '[=]'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-bg2 border-b border-border">
          <nav className="flex flex-col font-mono text-xs">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'block py-2.5 px-4 transition-colors duration-100',
                    isActive
                      ? 'text-terminal-green bg-white/[0.03]'
                      : 'text-text-muted hover:text-text-secondary'
                  )
                }
              >
                /{item.label.toLowerCase()}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
