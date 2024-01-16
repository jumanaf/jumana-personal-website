 export const resume = {
     summary: 
       " Data scientist with experience in techbio, focused on creating data-driven impact using effective \
        data engineering and storytelling techniques.",
    contact: {
      email: "jumanafa@gmail.com",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/jumanafa",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jumanafathima/",
        },
      ],
    },
    education: [
      {
        school: "University of Washington",
        degree: "Bachelor of Science in Bioengineering, Focus in Data Science",
        start: "2018",
        end: "2021",
      },
    ],
    work: [
      {
        company: "Parabol",
        link: "https://parabol.co",
        badges: ["Remote"],
        title: "Senior Full Stack Developer",
        start: "2021",
        end: "2024",
        description:
          "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
      },
      {
        company: "Clevertech",
        link: "https://clevertech.biz",
        badges: ["Remote"],
        title: "Lead Android Developer → Full Stack Developer",
        start: "2015",
        end: "2021",
        description:
          "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React/Next.js/Remix",
      "Node.js",
      "GraphQL",
      "Relay",
      "WebRTC",
    ],
    projects: [
      {
        title: "Consultly",
        techStack: [
          "Side Project",
          "TypeScript",
          "Next.js",
          "Vite",
          "GraphQL",
          "WebRTC",
        ],
        description: "A platform to build and grow your online business",
        link: {
          label: "consultly.com",
          href: "https://consultly.com/",
        },
      },
      {
        title: "Monito",
        techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
        description:
          "Browser extension that records everything happening in a web application",
        link: {
          label: "monito.dev",
          href: "https://monito.dev/",
        },
      },
    ],
  } as const;