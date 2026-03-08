import { SITE_CONFIG } from '@/lib/data';
import { obfuscateEmail, reconstructEmail } from '@/lib/utils/email';

export default function Contact() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const obfuscatedText = e.currentTarget.querySelector('span')?.textContent || '';
    const email = reconstructEmail(obfuscatedText);
    window.location.href = `mailto:${email}`;
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const obfuscatedText = e.currentTarget.querySelector('span')?.textContent || '';
      const email = reconstructEmail(obfuscatedText);
      window.location.href = `mailto:${email}`;
    }
  };

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
              href="#"
              onClick={handleEmailClick}
              onKeyDown={handleEmailKeyDown}
              className="text-terminal-green hover:text-terminal-bright-green transition-colors cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Click to reveal email address"
            >
              <span dangerouslySetInnerHTML={{ __html: obfuscateEmail(SITE_CONFIG.email) }} />
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
          href="#"
          onClick={handleEmailClick}
          onKeyDown={handleEmailKeyDown}
          className="inline-flex items-center text-sm font-mono text-terminal-green border border-terminal-dim-green/40 bg-neutral-bg2 hover:border-terminal-green/60 hover:bg-neutral-bg3 px-4 py-2 transition-colors cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label="Click to send email"
        >
          mail -s "Hello"{' '}
          <span dangerouslySetInnerHTML={{ __html: obfuscateEmail(SITE_CONFIG.email) }} />
        </a>
      </div>
    </div>
  );
}
