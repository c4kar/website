import { useState, useEffect } from 'react';
import { SITE_CONFIG, PROJECTS } from '@/lib/data';
import { getBlogPosts, type BlogPostMeta } from '@/lib/blog';
import { BlogPost } from '@/components/BlogPost';
import { getEmail, openMailto } from '@/lib/obfuscate';

export default function App() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const posts: BlogPostMeta[] = getBlogPosts();

  useEffect(() => {
    setEmail(getEmail());
  }, []);

  if (activeSlug) {
    return (
      <div className="min-h-screen bg-black text-neutral-300 font-mono">
        <main className="max-w-4xl mx-auto px-8 py-16 md:py-28">
          <BlogPost slug={activeSlug} onBack={() => setActiveSlug(null)} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-neutral-300 font-mono">
      <main className="max-w-4xl mx-auto px-8 py-16 md:py-28 space-y-24">
        {/* Header / Intro */}
        <header className="space-y-4">
          <div>
            <h1 className="text-base font-bold text-white tracking-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-neutral-500 text-xs mt-0.5">
              {SITE_CONFIG.title} &middot; {SITE_CONFIG.location}
            </p>
          </div>

          <p className="text-neutral-400 leading-relaxed">
            {SITE_CONFIG.bio}
          </p>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs pt-1">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <span className="text-neutral-700">/</span>
            <button
              type="button"
              onClick={openMailto}
              className="text-neutral-300 underline underline-offset-4 decoration-neutral-600 hover:text-white hover:decoration-white transition-colors cursor-pointer bg-transparent border-none p-0 text-xs font-mono"
            >
              {email ?? 'email'}
            </button>
          </nav>
        </header>

        {/* Writing / Posts */}
        {posts.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Writing
            </h2>
            <ul className="space-y-2 list-none p-0 m-0">
              {posts.map((post) => (
                <li key={post.slug} className="flex items-baseline justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveSlug(post.slug)}
                    className="text-left text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-colors cursor-pointer bg-transparent border-none p-0 text-sm font-mono"
                  >
                    {post.title}
                  </button>
                  <time className="text-xs text-neutral-600 tabular-nums shrink-0 font-mono">
                    {post.date ? new Date(post.date).toISOString().split('T')[0] : ''}
                  </time>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Selected Projects */}
        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
            Projects
          </h2>
          <ul className="space-y-5 list-none p-0 m-0">
            {PROJECTS.map((project) => (
              <li key={project.id} className="space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white hover:underline"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="font-medium text-white">{project.title}</span>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-neutral-500 hover:text-neutral-300"
                      >
                        [demo]
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-neutral-600 font-mono tabular-nums">
                    {project.year}
                  </span>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {project.description}
                </p>
                <div className="text-[11px] text-neutral-600 font-mono">
                  {project.tech.join(' &middot; ')}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
            Experience
          </h2>
          <ul className="space-y-6 list-none p-0 m-0">
            {SITE_CONFIG.experience.map((exp, idx) => (
              <li key={idx} className="space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-white font-medium">{exp.role}</span>
                  <span className="text-xs text-neutral-600 tabular-nums font-mono">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs text-neutral-500">{exp.company}</div>
                <p className="text-neutral-400 text-xs leading-relaxed pt-1">
                  {exp.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-600">
          <span>Yusuf Çakar</span>
          <span>HTML + CSS</span>
        </footer>
      </main>
    </div>
  );
}
