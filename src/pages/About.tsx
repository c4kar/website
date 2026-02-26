import { SITE_CONFIG } from '@/lib/data';

export default function About() {
  return (
    <div>
      <div className="section-rule">about</div>
      <p className="text-sm text-text-muted mb-6">
        <span className="text-terminal-dim-green">$</span> cat ~/about.md
      </p>

      {/* Bio */}
      <div className="panel mb-8">
        <div className="panel-header">bio</div>
        <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
          {SITE_CONFIG.bio}
        </p>
      </div>

      {/* Skills: evidence table */}
      {/* COMMENTED OUT TEMPORARILY
      <div className="section-rule">stack</div>
      <div className="overflow-x-auto mb-8">
        <table className="dtable">
          <thead>
            <tr>
              <th>TOOL</th>
              <th>TAG</th>
              <th>YRS</th>
              <th>PROJECTS</th>
            </tr>
          </thead>
          <tbody>
            {SITE_CONFIG.skills.map((skill) => {
              const tagColor =
                skill.tag === 'DAILY DRIVER'
                  ? 'text-terminal-green'
                  : skill.tag === 'PRODUCTION'
                  ? 'text-terminal-dim-green'
                  : skill.tag === 'LEARNING'
                  ? 'text-terminal-amber'
                  : 'text-terminal-cyan';
              return (
                <tr key={skill.name}>
                  <td className="cell-name">{skill.name}</td>
                  <td className={`text-xs font-bold ${tagColor}`}>{skill.tag}</td>
                  <td className="text-text-muted text-xs">{skill.years}yr</td>
                  <td className="text-xs text-text-muted">
                    {skill.projects.map((proj, i) =>
                      proj.url ? (
                        <a
                          key={i}
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-terminal-dim-green hover:text-terminal-green transition-colors mr-3"
                        >
                          {proj.title}&nbsp;[↗]
                        </a>
                      ) : (
                        <span key={i} className="text-text-muted mr-3">
                          {proj.title}
                        </span>
                      )
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      */}

      {/* Experience: data table */}
      <div className="section-rule">experience</div>
      <div className="overflow-x-auto">
        <table className="dtable">
          <thead>
            <tr>
              <th>ROLE</th>
              <th>ORG</th>
              <th>PERIOD</th>
            </tr>
          </thead>
          <tbody>
            {SITE_CONFIG.experience.map((exp, i) => (
              <tr key={i}>
                <td>
                  <div className="cell-name">{exp.role}</div>
                  <div className="text-xs text-text-muted mt-0.5">
                    {exp.description}
                  </div>
                </td>
                <td className="text-text-secondary">{exp.company}</td>
                <td className="text-text-muted text-xs whitespace-nowrap">
                  {exp.period}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
