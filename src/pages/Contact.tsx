import { SITE_CONFIG } from '@/lib/data';

export default function Contact() {
  return (
    <div>
      <div className="section-rule">contact</div>
      <p className="text-sm text-text-muted mb-6">
        <span className="text-terminal-dim-green">$</span> cat ~/.contact
      </p>

      <div className="panel mb-6">
        <div className="panel-header">endpoints</div>
        <div className="space-y-2 text-sm">
          <div className="flex gap-3">
            <span className="text-terminal-amber w-20 shrink-0">EMAIL</span>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-terminal-green hover:text-terminal-bright-green transition-colors"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
          <div className="flex gap-3">
            <span className="text-terminal-amber w-20 shrink-0">GITHUB</span>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green hover:text-terminal-bright-green transition-colors"
            >
              {SITE_CONFIG.github.replace('https://github.com/', '')}
            </a>
          </div>
          <div className="flex gap-3">
            <span className="text-terminal-amber w-20 shrink-0">LINKEDIN</span>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green hover:text-terminal-bright-green transition-colors"
            >
              {SITE_CONFIG.linkedin.replace('https://linkedin.com/in/', '')}
            </a>
          </div>

          <div className="flex gap-3">
            <span className="text-terminal-amber w-20 shrink-0">LOCATION</span>
            <span className="text-text-secondary">{SITE_CONFIG.location}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-text-muted">
        Open to interesting projects and conversations.
      </p>
      <div className="mt-4">
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="inline-flex items-center text-sm font-mono text-terminal-green border border-terminal-dim-green/40 bg-neutral-bg2 hover:border-terminal-green/60 hover:bg-neutral-bg3 px-4 py-2 transition-colors"
        >
          mail -s "Hello" {SITE_CONFIG.email}
        </a>
      </div>
    </div>
  );
}
