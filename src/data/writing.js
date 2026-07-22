// Post metadata registry. Bodies live in src/content/writing/<slug>.mdx and are
// wired to slugs in src/app/writing/[slug]/page.js. Keep newest first.
export const posts = [
  {
    slug: 'the-story-is-the-analysis',
    title: 'The story is the analysis',
    date: '2026-06-15',
    readingTime: '4 min read',
    excerpt:
      'A perfect model nobody acts on changes nothing. Some notes on why data storytelling is the real deliverable.',
  },
  {
    slug: 'making-things-by-hand',
    title: 'On making things by hand',
    date: '2026-03-02',
    readingTime: '3 min read',
    excerpt:
      'What embroidery taught me about patience, iteration, and the quiet joy of a finished thing.',
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
