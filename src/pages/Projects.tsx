import { PROJECTS } from '@/lib/data';
import { StatusDot, Badge } from '@/components/ui';

export default function Projects() {
  return (
    <div>
      <div className="section-rule">processes</div>
      <p className="text-sm text-text-muted mb-6">
        <span className="text-terminal-dim-green">$</span> ps aux --sort=-pid
      </p>

      {/* Desktop: full data table */}
      <div className="overflow-x-auto hidden sm:block">
        <table className="dtable">
          <thead>
            <tr>
              <th className="w-8"></th>
              <th>PID</th>
              <th>NAME</th>
              <th>YEAR</th>
              <th>STACK</th>
              <th>STATUS</th>
              <th>LINKS</th>
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((p) => (
              <tr key={p.id}>
                <td>
                  <StatusDot status={p.status} />
                </td>
                <td className="cell-id">{p.id}</td>
                <td>
                  <div className="cell-name">{p.title}</div>
                  <div className="text-xs text-text-muted mt-0.5">
                    {p.description}
                  </div>
                </td>
                <td className="text-text-muted">{p.year}</td>
                <td className="cell-tag">{p.tech.join(', ')}</td>
                <td className="text-xs text-text-muted">{p.status}</td>
                <td className="text-xs space-x-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-terminal-green transition-colors"
                    >
                      [src]
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-terminal-amber transition-colors"
                    >
                      [live]
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked panels */}
      <div className="sm:hidden space-y-3">
        {PROJECTS.map((p) => (
          <div key={p.id} className="panel">
            <div className="flex items-center gap-2 mb-2">
              <StatusDot status={p.status} />
              <span className="text-xs text-text-muted">{p.id}</span>
              <span className="text-xs text-text-muted ml-auto">{p.status}</span>
            </div>
            <div className="text-sm text-text-primary font-medium mb-1">
              {p.title}
            </div>
            <div className="text-xs text-text-muted mb-2">{p.description}</div>
            <div className="flex flex-wrap gap-1 mb-2">
              {p.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="text-xs space-x-2">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-terminal-green transition-colors"
                >
                  [src]
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-terminal-amber transition-colors"
                >
                  [live]
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-text-muted">
        {PROJECTS.length} processes listed.
      </div>
    </div>
  );
}
