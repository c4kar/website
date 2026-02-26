import { SITE_CONFIG } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border bg-neutral-bg1 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between font-mono text-xs text-text-muted">
        <span>
          PID 1 · STATUS <span className="text-terminal-green">ONLINE</span>
        </span>
        <span className="hidden sm:inline text-text-muted/60">vim: j/k scroll · h/l nav · gg/G jump</span>
        <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
      </div>
    </footer>
  );
}
