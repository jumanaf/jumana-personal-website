// Post metadata registry. Bodies live in src/content/writing/<slug>.mdx and are
// wired to slugs in src/app/writing/[slug]/page.js. Keep newest first.
export const posts = [
  {
    slug: 'the-story-is-the-analysis',
    title: 'Post title goes here',
    date: '2026-07-23',
    readingTime: '1 min read',
    excerpt: 'A one-line summary of this post — edit me in src/data/writing.js.',
  },
  {
    slug: 'making-things-by-hand',
    title: 'Another post title',
    date: '2026-07-23',
    readingTime: '1 min read',
    excerpt: 'A one-line summary of this post — edit me in src/data/writing.js.',
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}
