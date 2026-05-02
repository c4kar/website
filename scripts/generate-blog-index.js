import fs from 'fs';
import path from 'path';
import url from 'url';
import frontMatter from 'front-matter';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.resolve(__dirname, '../src/content/blog');
const outputFile = path.resolve(__dirname, '../src/content/blog/index.json');

function generateIndex() {
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

  const posts = files.map(file => {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = frontMatter(content);

    return {
      slug: file.replace(/\.md$/, ''),
      title: parsed.attributes.title || 'Untitled',
      date: parsed.attributes.date || new Date().toISOString(),
      tags: parsed.attributes.tags || [],
    };
  });

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  console.log(`Generated blog index with ${posts.length} posts.`);
}

generateIndex();
