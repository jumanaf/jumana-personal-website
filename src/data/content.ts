export const profile = {
  name: 'Jumana Fathima',
  tagline: 'I like putting the pieces of complicated problems together',
  intro: [
    "I studied bioengineering, worked as a data scientist in gene therapy, and now I'm co-founding a robotics startup where I build most of the software — from the embedded systems on the hardware to the data pipelines, ML, and everything customers touch.",
    'The throughline is always the same: hard problems with a lot of moving pieces, and me in the middle fitting them together. I love solving puzzles, and getting to do it every day is so much fun.',
  ],
  now: "Heads-down building our robotics startup. On the side I'm reading a few classics, always keeping some sci-fi going, and just started getting into rock climbing.",
  location: 'Seattle, WA',
};

export const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jumanafathima/', icon: 'linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/jumanaf9', icon: 'twitter' },
  { name: 'GitHub', href: 'https://github.com/jumanafa', icon: 'github' },
  { name: 'Email', href: 'mailto:jumanafa@gmail.com', icon: 'mail' },
] as const;

export const reading = {
  current: [
    { title: 'Children of Time' },
    { title: 'Wuthering Heights' },
    { title: 'The Count of Monte Cristo' },
  ],
  finished: [
    { title: 'Dracula' },
    { title: 'The Secret History' },
    { title: 'The Art of Doing Science and Engineering' },
    { title: 'Stories of Your Life and Others' },
  ],
  toRead: [],
};

export type Role = {
  title: string;
  org: string;
  orgUrl?: string;
  start: string;
  end: string;
  summary: string;
  note?: string;
};

export const experience: Role[] = [
  {
    title: 'Co-founder',
    org: 'Kiwi Charge',
    start: '2024',
    end: 'Present',
    summary:
      'Leading software across the stack as we build our robot for manufacturing and scale.',
    note: 'I work across hardware, software, and ML, and spend most of my time at the interfaces where they meet. Beyond the tech, I lead teams and build the long-term, sustainable relationships that let us actually ship.',
  },
  {
    title: 'Computational Biologist',
    org: 'Dyno Therapeutics',
    orgUrl: 'https://www.dynotx.com/',
    start: '2021',
    end: '2023',
    summary:
      'Built the data pipelines and visualizations behind the company’s first commercial gene-therapy capsid launches.',
    note: 'I joined Dyno at ~50 people and watched it scale past ~200. Early on I wore many hats and bridged the gap between pure software engineers and pure biologists to build an accessible internal data-science toolkit.',
  },
  {
    title: 'Data Science Intern',
    org: 'Just–Evotec Biologics',
    start: '2021',
    end: '2021',
    summary:
      'Trained GAN models to design a diverse, high-throughput humanoid antibody library.',
    note: 'Focused on J.HAL, their humanoid-antibody-library platform. A great look at data science inside a larger-scale biotech, with wonderful mentors across the company.',
  },
  {
    title: 'Data Science Intern',
    org: 'Dyno Therapeutics',
    orgUrl: 'https://www.dynotx.com/',
    start: '2021',
    end: '2021',
    summary:
      'Built a Python structural-biology toolkit still used by computational biologists across the company.',
    note: 'My first techbio internship — where I fell for scientific curiosity, detail, and clear communication as the core of good data science.',
  },
];

export type Project = {
  title: string;
  stack: string[];
  description: string;
};

export const projects: Project[] = [
  {
    title: 'EV-charging startup — web & mobile app',
    stack: ['Next.js', 'React', 'Node.js', 'Express', 'Tailwind', 'Docker', 'GCS', 'Vercel'],
    description:
      'Built a web app for a stealth EV-charging startup’s pilot — users log in and we surface vehicle info to power a white-glove charging service. Currently building the companion iOS/Android app. A crash course in learning brand-new domains fast and shipping.',
  },
  {
    title: 'This website',
    stack: ['Next.js', 'React', 'Tailwind', 'MDX'],
    description:
      'The site you’re on — designed and built by me as a place to learn application design and share who I am, kept intentionally clean and personal.',
  },
];

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  coursework: string;
  note: string;
};

export const education: Education[] = [
  {
    school: 'University of Washington',
    degree: 'B.S. in Bioengineering, focus in Data Science',
    start: '2018',
    end: '2021',
    coursework:
      'Data Structures & Algorithms, Database Systems, Machine Learning, Elements of Statistical Methods, Foundational Skills for Data Science',
    note: 'A highly interdisciplinary program — CS, physics, civil and mechanical engineering, medicine — that showed me innovation lives at the intersection of fields. I loved pulling insight from rich biological data to build technology that matters.',
  },
];
