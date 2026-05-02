import blogIndex from '../content/blog/index.json';

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
};

export function getBlogPosts(): BlogPostMeta[] {
  return blogIndex as BlogPostMeta[];
}
