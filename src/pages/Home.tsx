import { Link } from 'react-router-dom';
import { SITE_CONFIG, PROJECTS, BLOG_POSTS, STATS } from '@/lib/data';
import { StatusDot } from '@/components/ui';

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div>
      {/* ── NEOFETCH ── */}
      <section className="mb-8">
        <div className="font-mono text-xs text-text-muted mb-4 select-none">
          <span className="text-terminal-dim-green">system</span>
          <span>@</span>
          <span className="text-terminal-amber">portfolio</span>
          <span> ~ $ </span>
          <span className="text-text-secondary">neofetch</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6">
          {/* Left: identity */}
          <div>
            <pre className="text-terminal-green text-xs leading-tight mb-4 select-none">{`
  ███████████████████████████  
  ███████████████████████████  
                               
                               
  ████████████   █████   ████  
  ████████████   █████   ████  
          ████   █████   ████  
          ████   █████   ████  
  ████████████   █████   ████  
  ████████████   █████   ████  
  ████    ████   █████   ████  
  ████    ████   █████   ████  
  ███████████████████████████  
  ███████████████████████████  
`.trimStart()}</pre>
            <h1 className="text-3xl font-bold text-text-primary mb-1">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-sm text-terminal-green mb-1">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-text-secondary">
              {SITE_CONFIG.title} · {SITE_CONFIG.location}
            </p>
          </div>

          {/* Right: stats key-value */}
          <div className="panel">
            <div className="panel-header">system info</div>
            <div className="space-y-1 text-sm">
              {Object.entries(STATS).map(([key, val]) => (
                <div key={key} className="flex">
                  <span className="text-terminal-amber w-24 shrink-0">
                    {key.toUpperCase()}
                  </span>
                  <span
                    className={
                      key === 'status'
                        ? 'text-terminal-green'
                        : 'text-text-secondary'
                    }
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4 text-sm">
          <Link
            to="/projects"
            className="text-terminal-green hover:text-terminal-bright-green transition-colors"
          >
            [ls ~/projects]
          </Link>
          <Link
            to="/contact"
            className="text-text-muted hover:text-text-secondary transition-colors"
          >
            [./contact]
          </Link>
          <Link
            to="/blog"
            className="text-text-muted hover:text-text-secondary transition-colors"
          >
            [cat ~/blog]
          </Link>
        </div>
      </section>

      {/* ── FEATURED PROJECTS (process table) ── */}
      <section>
        <div className="section-rule">active processes</div>
        <div className="overflow-x-auto">
          <table className="dtable">
            <thead>
              <tr>
                <th className="w-8"></th>
                <th>PID</th>
                <th>NAME</th>
                <th>YEAR</th>
                <th>STACK</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {featuredProjects.map((p) => (
                <tr
                  key={p.id}
                  className="cursor-pointer"
                  onClick={() => (window.location.href = '/projects')}
                >
                  <td>
                    <StatusDot status={p.status} />
                  </td>
                  <td className="cell-id">{p.id}</td>
                  <td className="cell-name">{p.title}</td>
                  <td className="text-text-muted">{p.year}</td>
                  <td className="cell-tag">{p.tech.slice(0, 3).join(', ')}</td>
                  <td className="text-xs text-text-muted">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link
          to="/projects"
          className="text-xs text-text-muted hover:text-terminal-dim-green mt-3 inline-block transition-colors"
        >
          → view all processes
        </Link>
      </section>

      {/* ── LATEST BLOG (journalctl) ── */}
      <section className="mt-6">
        <div className="section-rule">journal</div>
        <div className="space-y-0">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block py-2 px-3 -mx-3 hover:bg-white/[0.02] transition-colors text-sm font-mono"
            >
              <span className="text-text-muted">{post.date}</span>
              <span className="text-terminal-dim-green mx-2">INFO</span>
              <span className="text-text-primary">{post.title}</span>
              <span className="text-terminal-cyan ml-2">
                [{post.tags.join(',')}]
              </span>
              <span className="text-text-muted ml-2">{post.readTime}</span>
            </Link>
          ))}
        </div>
        <Link
          to="/blog"
          className="text-xs text-text-muted hover:text-terminal-dim-green mt-3 inline-block transition-colors"
        >
          → journalctl -f
        </Link>
      </section>

      {/* ── TOOLCHAIN ── */}
      <section className="mt-6">
        <div className="section-rule">toolchain</div>
        <div className="flex flex-wrap gap-2">
          {SITE_CONFIG.skills.map((skill) => {
            const tagColor =
              skill.tag === 'DAILY DRIVER'
                ? 'text-terminal-green border-terminal-green/30'
                : skill.tag === 'PRODUCTION'
                ? 'text-terminal-dim-green border-terminal-dim-green/30'
                : skill.tag === 'LEARNING'
                ? 'text-terminal-amber border-terminal-amber/30'
                : 'text-terminal-cyan border-terminal-cyan/30';
            return (
              <span
                key={skill.name}
                className={`text-xs border px-2 py-0.5 font-mono ${tagColor}`}
                title={`${skill.tag} · ${skill.years}yr`}
              >
                {skill.name}
              </span>
            );
          })}
        </div>
        <div className="mt-2 flex gap-4 text-xs text-text-muted">
          <span><span className="text-terminal-green">■</span> daily driver</span>
          <span><span className="text-terminal-dim-green">■</span> production</span>
          <span><span className="text-terminal-amber">■</span> learning</span>
          <span><span className="text-terminal-cyan">■</span> hobbyist</span>
        </div>
      </section>

    </div>
  );
}
