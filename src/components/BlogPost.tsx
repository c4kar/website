import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/tokyo-night-dark.css'; // Dark theme syntax highlighting
import frontMatter from 'front-matter';

interface BlogPostProps {
  slug: string;
  onBack: () => void;
}

export function BlogPost({ slug, onBack }: BlogPostProps) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    async function loadPost() {
      // Using Vite's glob import to read the raw markdown files
      const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
      const importFunc = modules[`../content/blog/${slug}.md`];
      
      if (importFunc) {
        const rawContent = await importFunc() as string;
        const parsed = frontMatter<any>(rawContent);
        
        setContent(parsed.body);
        setTitle(parsed.attributes.title || 'Untitled');
        setDate(parsed.attributes.date || '');
        setTags(parsed.attributes.tags || []);
      } else {
        setContent('# Post not found');
      }
    }
    
    loadPost();
  }, [slug]);

  return (
    <article className="max-w-3xl mx-auto pb-16">
      <button 
        onClick={onBack}
        className="text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors flex items-center gap-1"
      >
        ← Back to writing
      </button>

      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-foreground mb-4">{title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-muted-foreground gap-2">
          {tags.length > 0 && (
            <div className="flex gap-2">
              {tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-white/5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {date && (
            <span className="font-mono">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          )}
        </div>
      </header>

      <div className="prose prose-invert prose-p:text-[15px] prose-p:leading-[1.7] prose-p:text-muted-foreground prose-strong:text-foreground prose-headings:text-foreground prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-md prose-blockquote:border-l-2 prose-blockquote:border-white/20 prose-blockquote:text-muted-foreground prose-blockquote:font-normal prose-blockquote:not-italic">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeHighlight]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
