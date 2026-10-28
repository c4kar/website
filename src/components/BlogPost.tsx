import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark-dimmed.css';
import frontMatter from 'front-matter';

interface BlogPostProps {
  slug: string;
  onBack: () => void;
}

export function BlogPost({ slug, onBack }: BlogPostProps) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    async function loadPost() {
      const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
      const importFunc = modules[`../content/blog/${slug}.md`];

      if (importFunc) {
        const rawContent = (await importFunc()) as string;
        const parsed = frontMatter<any>(rawContent);

        setContent(parsed.body);
        setTitle(parsed.attributes.title || 'Untitled');
        setDate(parsed.attributes.date || '');
      } else {
        setContent('# Post not found');
      }
    }

    loadPost();
  }, [slug]);

  return (
    <article className="py-6">
      <nav className="mb-8">
        <button
          onClick={onBack}
          type="button"
          className="text-neutral-500 hover:text-white transition-colors cursor-pointer text-xs"
        >
          ← back to all posts
        </button>
      </nav>

      <header className="mb-8 pb-4 border-b border-neutral-900">
        <h1 className="text-lg font-bold text-white mb-2">{title}</h1>
        {date && (
          <time className="text-xs text-neutral-500 font-mono">
            {new Date(date).toISOString().split('T')[0]}
          </time>
        )}
      </header>

      <div className="prose prose-invert prose-neutral max-w-none text-sm text-neutral-300 leading-relaxed [&_pre]:bg-neutral-950 [&_pre]:border [&_pre]:border-neutral-900 [&_code]:font-mono [&_code]:text-neutral-200 [&_a]:text-neutral-300 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-neutral-600 [&_a:hover]:text-white [&_a:hover]:decoration-white">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
