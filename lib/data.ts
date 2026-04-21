// ─── Types ───────────────────────────────────────────────────────────────────

export interface HeroDetails {
  statusLabel: string;
  name: string;
  title: string;
  description: string;
  subText: string;
  contactMeHref: string;
}
export interface Skill {
  label: string;
  color?: string;
  borderColor?: string;
  bgColor?: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
  current?: boolean;
}

export interface Project {
  name: string;
  description: string;
  badge: string;
  badgeColor: "emerald" | "blue" | "violet" | "amber";
  tags: string[];
  url?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: "aws";
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: "email" | "phone" | "linkedin" | "globe";
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const heroDetails: HeroDetails = {
  statusLabel: "Available for opportunities in Germany",
  name: "Hamza Ahmed",
  title: "CTO | Full Stack Developer",
  description: "10+ years building scalable web applications with React, Node.js and modern cloud infrastructure. AWS Certified. Based in Pakistan —",
  subText: "relocating to Germany.",
  contactMeHref: "mailto:ahmed.hamza074@gmail.com"
}

export const skills: Skill[] = [
  {
    label: "React.js",
    color: "#61dafb",
    borderColor: "#61dafb33",
    bgColor: "#0a1929",
  },
  {
    label: "Node.js",
    color: "#68a063",
    borderColor: "#68a06333",
    bgColor: "#0c1f0c",
  },
  {
    label: "Next.js",
    color: "#ffffff",
    borderColor: "#ffffff22",
    bgColor: "#111827",
  },
  {
    label: "JavaScript",
    color: "#31c647ff",
    borderColor: "#3178c633",
    bgColor: "#07162e",
  },
  {
    label: "TypeScript",
    color: "#3178c6",
    borderColor: "#3178c633",
    bgColor: "#07162e",
  },
  {
    label: "AWS",
    color: "#ff9900",
    borderColor: "#ff990033",
    bgColor: "#1a1000",
  },
  {
    label: "TailwindCSS",
    color: "#38bdf8",
    borderColor: "#38bdf833",
    bgColor: "#071824",
  },
  {
    label: "MongoDB",
    color: "#47a248",
    borderColor: "#47a24833",
    bgColor: "#0a1f0a",
  },
  {
    label: "PostgreSQL",
    color: "#4169e1",
    borderColor: "#4169e133",
    bgColor: "#080f2a",
  },
  {
    label: "GraphQL",
    color: "#e535ab",
    borderColor: "#e535ab33",
    bgColor: "#1a0212",
  },
  {
    label: "Express.JS",
    color: "#f5a623",
    borderColor: "#f5a62333",
    bgColor: "#1a1100",
  },
  {
    label: "Microservices",
    color: "#e535ab",
    borderColor: "#e535ab33",
    bgColor: "#1a0212",
  },
  {
    label: "CI/CD",
    color: "#2088ff",
    borderColor: "#2088ff33",
    bgColor: "#030d1f",
  },
  {
    label: "Docker",
    color: "#2496ed",
    borderColor: "#2496ed33",
    bgColor: "#030e1f",
  },
  {
    label: "Vue.js",
    color: "#41b883",
    borderColor: "#41b88333",
    bgColor: "#051a10",
  },
  {
    label: "Strapi CMS",
    color: "#c7b9ff",
    borderColor: "#c7b9ff33",
    bgColor: "#100c1f",
  },
  {
    label: "JIRA",
    color: "#0052cc",
    borderColor: "#0052cc33",
    bgColor: "#000d2e",
  },
  { label: "Agile" },
  { label: "Team Lead" },
  { label: "Full Stack" },
  { label: "Senior Software Engineer" },
];

export const experiences: Experience[] = [
  {
    company: "Blooming Box Gifts LLC",
    location: "Dubai, Remote",
    role: "Lead Full-Stack Developer",
    period: "Jun 2024 — Present",
    description:
      "Improved Online Gift Platform performance by 30%, reduced AWS infrastructure costs by 15%, and led new platform version launch resulting in 20% user engagement increase.",
    bullets: [
      "Contributed to the development of a codebase supporting multiple countries, resulting in a revenue increase of 10% to 20%",
      "Integrated Google Merchant Center to enhance SEO and marketing efforts",
      "Integration of a third-party payment gateway (Tamara) for Buy Now, PaynLater (BNPL) functionality",
      "Developed a direct feed API for Tabby to improve marketing efficiency",
    ],
    tags: ["React", "Node.js", "AWS", "Microservices", "MongoDB"],
    current: true,
  },
  {
    company: "Toptal",
    location: "United States, Remote",
    role: "Full Stack Developer",
    period: "Nov 2021 — Present",
    description:
      "Toptal is a freelancing enterprise that connects companies with top freelancers across the globe",
    bullets: [
      "Built 2 advanced business solutions during a 2-year period.",
      "Completed over 3000+ plus hours with a single client.",
      "Achieved 98% on-time delivery of tasks.",
    ],
    tags: ["React", "Node.js", "TypeScript"],
    current: true,
  },
  {
    company: "Succes Finance",
    location: "Australia, Remote",
    role: "Senior Frontend Developer",
    period: "Mar 2024 — May 2024",
    description:
      "SUCASA Finance is a financial technology company focused on developing innovative solutions..",
    bullets: [
      "Improved user engagement by 25% through the development of the frontend for a rapidly growing VC-backed startup",
      "Facilitated a 120% increase in user acquisition through streamlined user account creation",
      "Engineered a user account creation page, reducing bounce rates by 20%",
    ],
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    company: "Pocket Media",
    location: "San Francisco, Remote",
    role: "Full Stack Developer",
    period: "Nov 2021 — Jun 2023",
    description:
      "Pocket Made is a leading e-commerce development company focused on advanced solutions.",
    bullets: [
      "Escalated sales potential by creating two e-commerce websites, generating an estimated $500K in revenue",
      "Applied TailwindCSS, improving website performance by 30%.",
      "Implemented server-side rendering, decreasing page load time from 7.2s to 2.2s",
    ],
    tags: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    company: "FWU",
    location: "Karachi, On-site",
    role: "Senior Consultant — Team Lead FILOS",
    period: "Jul 2019 — Jan 2022",
    description:
      "FWU is a financial services company providing cutting-edge solutions.",
    bullets: [
      "Coached a team of 5 developers to deliver a Single Page Application for over 50,000 business customers.",
      "Improved the usability of FILOS, increasing user base by 5%.",
      "Maintained team productivity by mentoring 5 team members and tracking progress using Jira.",
      "Shaped and influenced 5 junior developers in using modern wed development technologies.",
    ],
    tags: ["React", "Node.js", "PWA", "Team Lead"],
  },
  {
    company: "Livable",
    location: "California, Remote",
    role: "Full Stack Developer",
    period: "Dec 2017 — May 2019",
    description:
      "Developed 3 interconnected portals with Meteor + React + MongoDB. Designed API reducing response time by 30%.",
    bullets: ["Migrated portals to cleaner ES6 class components."],
    tags: ["React", "MongoDB", "Meteor"],
  },
  {
    company: "RIKSOF",
    location: "On-site",
    role: "Full-Stack Developer",
    period: "Dec 2014 — Dec 2017",
    description: "RIKSOF provides custom software development services.",
    bullets: [
      "Increased appointment scheduling efficiency by 40% through developing a web app for parents of autistic children",
      "Integrated TMDB with My5ive iOS application for enhanced movie information retrieval.",
      "Improved data analytics process by implementing Agile development for Microsoft Power BI dashboard, reducing reporting time by 40%.",
    ],
    tags: ["React", "Node.js", "Agile"],
  },
];

export const projects: Project[] = [
  {
    name: "BloomingBox",
    description:
      "At BloomingBox, I worked as a Full-Stack Developer where I built and scaled core eCommerce features using Next.js, React, and Node.js, supporting thousands of monthly users while improving platform stability. I enhanced frontend performance, reducing page load times by 30–40%, which contributed to better SEO rankings and increased user engagement.",
    badge: "+30-40% SEO optimization",
    badgeColor: "amber",
    tags: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Microservices",
    ],
    url: "http://bloomingbox.com/",
  },
  {
    name: "AYR Dispensary",
    description:
      "TypeScript eCommerce platform with MeiliSearch-powered rapid search experience and scalable CMS for business content management.",
    badge: "+20% user engagement",
    badgeColor: "emerald",
    tags: ["Next.js", "TypeScript", "GraphQL", "Strapi CMS", "Tailwind CSS"],
    url: "https://ayrdispensaries.com/",
  },
  {
    name: "FILOS — FWU",
    description:
      "The FILOS front office, a PWA built with React and Node.js, enabling business partners to manage digital applications seamlessly.",
    badge: "50,000+ contracts sold",
    badgeColor: "blue",
    tags: ["React", "Node.js", "PWA"],
    url: "https://fwulifelux.com/",
  },
  {
    name: "Livable Property Manager",
    description:
      "Full-stack property manager dashboard with utility tracking, leak alerts, and audit reporting tools.",
    badge: "+20% decision efficiency",
    badgeColor: "violet",
    tags: ["React", "Meteor", "MongoDB"],
    url: "https://www.livable.com/",
  },
];

export const stats = [
  { value: "10+", label: "Years experience" },
  { value: "5000+", label: "Toptal hours" },
  { value: "$500K", label: "Revenue generated" },
  { value: "98%", label: "On-time delivery" },
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "ahmed.hamza074@gmail.com",
    href: "mailto:ahmed.hamza074@gmail.com",
    icon: "email",
  },
  {
    label: "Phone",
    value: "+923326065243",
    href: "tel:+923326065243",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "Hamza-ahmed",
    href: "https://www.linkedin.com/in/khan-hamza-ahmed/",
    icon: "linkedin",
  },
  {
    label: "Toptal",
    value: "toptal.com/resume/hamza",
    href: "https://talent.toptal.com/resume/developers/hamza-ahmed",
    icon: "globe",
  },
];
