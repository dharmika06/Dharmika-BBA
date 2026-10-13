/**
 * Central portfolio data — generated from Dharmika's resume (Dharmika BBA full resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Dharmika Golla',
  displayName: 'Dharmika Golla',
  firstName: 'DHARMIKA',
  seriesTag: 'MY JOURNEY',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A DHARMIKA ORIGINAL',
  role: 'Business Analyst',
  tagline: ['Business Analyst', 'Business Operations', 'Project Management', 'Marketing & Sales'],
  intro:
    'A BBA student Business Analyst focused on data-driven decision-making, business process improvement, and operational efficiency. Skilled in Excel, Power BI, and business reporting, with an interest in turning data into actionable business insights.', 
  location: 'Machilipatnam, Andhra Pradesh',
  email: 'dharmikagolla64@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/dharmikagolla',
    github: 'https://github.com/dharmika06',
  },
  resumePdf: '',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portait of Dharmika Golla',
  },
  interests: ['Business & Management', 'Finance & Banking', 'Exploring Digital TOOLs', 'Learning New Skills'],
};

export const education = [
  {
    College: 'Aditya Degree College',
    place: 'Machilipatnam',
    degree: 'Bachelor of Business Adminstration (BBA)',
    period: '2024 – 2027',
  },
  {
    Institution: 'INSTITUTE OF COST ACCOUNTANTS OF INDIA (ICMAI)',
    place: 'Guntur',
    degree: 'CMA Foundation (Completed)',
    period: '2023-2024',
  },
  {
    College: 'Nobel College',
    place: 'Machilipatnam',
    degree: 'CEC',
    period: '2021 – 2023',
  },
   {
    School: "ST. John's High (EM) School",
    place: 'Machilipatnam',
    degree: 'SSC',
    period: '2020 – 2021',
  },

];

export const experience = [
  {
  company: 'ULEARN',
  role: 'Generative AI Intern',
  place: 'Remote',
  period: '2 Months',
  points: [
    'Completed a virtual internship focused on Generative AI fundamentals.',
    'Learned prompt engineering, Python fundamentals, and API integration.',
    'Explored AI tools for practical business applications.',
      ],
  },

];


export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};


export const projects: Project[] = [
  {
    id: 'employee-payroll-tracker',
    title: 'Employee Payroll & Attendance Tracker',
    year: '2026',
    genre: 'HR Analytics • Excel',
    logline: 'An Excel-based tracker for employee attendance, payroll calculations, and HR reporting.',
    stack: ['Microsoft Excel', 'Formulas', 'Data Analysis'],
    build: [
      'Organized employee attendance and payroll records.',
      'Used spreadsheet formulas to calculate attendance and salary components.',
      'Designed a summary dashboard for HR reporting.'
    ],
    features: [
      'Employee attendance tracking',
      'Payroll calculation',
      'Monthly HR summaries',
      'Data validation and reporting'
    ],
    metrics: [],
    palette: {
      from: '#123047',
      via: '#247BA0',
      to: '#70C1B3',
      accent: '#F3FFBD'
    },
    motif: 'shield'
  },
  {
id: 'ai-adoption-roi-framework',
title: 'AI Adoption Business Analytics & ROI Assessment Framework',
year: '2026',
genre: 'Business Analytics • AI Strategy',
logline: 'A business analytics framework to evaluate AI adoption opportunities, operational efficiency, and return on investment.',
stack: ['Power BI', 'Excel', 'KPI Analysis', 'Process Mapping', 'Cost-Benefit Analysis'],
build: [
'Designed 3+ KPI dashboards in Power BI to evaluate productivity, cost savings, and ROI.',
'Analyzed 5+ business processes using process mapping, stakeholder analysis, and cost-benefit analysis to identify AI adoption opportunities.',
'Recommended AI-driven process improvements targeting a projected 30% reduction in manual tasks.'
],
features: [
'KPI dashboards for productivity and cost analysis',
'AI adoption opportunity assessment',
'Cost-benefit and ROI evaluation',
'Process improvement recommendations'
],
metrics: [],
palette: {
from: '#04121f',
via: '#0f4c6e',
to: '#5cceee',
accent: '#f4a95e'
},
motif: 'flow'
},
{
id: 'market-consumer-behavior-research',
title: 'Market and Consumer Behavior Research',
year: '2026',
genre: 'Market Research • Consumer Insights',
logline: 'A research project examining consumer behavior, buying patterns, market trends, and brand preferences.',
stack: ['Market Research', 'Consumer Behavior', 'Data Collection', 'Data Analysis', 'Report Writing'],
build: [
'Conducted primary market research on consumer behavior and buying patterns.',
'Collected and analyzed data from customers and retail shopkeepers.',
'Prepared a structured report on consumer trends and brand preferences.'
],
features: [
'Consumer buying pattern analysis',
'Customer and retail shopkeeper insights',
'Market trend identification',
'Brand preference analysis'
],
metrics: [],
palette: {
from: '#172554',
via: '#2563eb',
to: '#60a5fa',
accent: '#fbbf24'
},
motif: 'flow'
}
];



export type Hackathons = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const hackathons: Hackathons[] = [
  {
    id: 'advanced-digital-marketing',
    title: 'Advanced Digital Marketing Hackathon',
    org: 'Actual event organizer',
    detail: 'Participated in digital marketing activities focused on social media promotion, content creation, and online campaign planning.',
    laurel: 'Digital Marketing',
  },
  {
    id: 'web-development',
    title: 'Web Development Hackathon',
    org: 'Actual event organizer',
    detail: 'Collaborated on designing and developing a responsive webpage within a limited timeframe, applying frontend development and problem-solving skills.',
    laurel: 'Web Development',
  },
  {
    id: 'seo-startup-project',
    title: 'SEO & Startup Website Project',
    org: 'Actual college or event organizer',
    detail: 'Created a Google Sites website for the fictional startup concept "Cheers & Chills" and presented the website, PowerPoint presentation, and promotional poster as part of an SEO activity.',
    laurel: 'SEO & Digital Strategy',
  },
];


export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
{
    issuer: 'IBM',
    name: 'Introduction to Project Management',
  },
{
    issuer: 'IBM',
    name: 'SQL',
},
{
    issuer: 'Power BI',
    name: 'Skill Course',
},
{
    issuer: 'Tally Education and Distribution Services',
    name: 'Tally',
  },
{
    issuer: 'Microsoft',
    name: 'Business Analyst',
  },
{
    issuer: 'Tencon Infra',
    name: 'SAP in ABAP',
  },
{
    issuer: 'Cisco',
    name: 'Discovering Entrepreneurship',
  },
{
    issuer: 'Criativo ELearning',
    name: 'Advanced MS Excel',
  },
{
    issuer: 'MEPRO PEAESON',
    name: 'LSRW Skills',
  },

];


export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Collections', mono: 'Co' },
      { name: 'Multithreading', mono: 'Mt' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or hackathons on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 5-star'],
  Python: ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 5-star'],
  C: ['HackerRank 5-star'],
  React: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  HTML: ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  Docker: ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  Microservices: ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  PostgreSQL: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  DBMS: ['NPTEL Database Management System', 'Oracle Database Foundations'],
  DSA: ['AlgoUniversity Tech Fellow', '850+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Tech AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'Intermediate years at Sri Chaitanya Junior College, Kakinada — Mathematics, Physics and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'BIEAP, MPC at Sri Chaitanya Junior College, Kakinada — finishing with a score of 925/1000.',
        tags: ['MPC', 'BIEAP'],
        runtime: 'Jun 2021 – May 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2023 – Present',
    synopsis: 'B.Tech in Artificial Intelligence and Machine Learning at Aditya Engineering College, Surampalem.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Artificial Intelligence and Machine Learning — CGPA 9.10.',
        tags: ['B.Tech', 'AI & ML', 'CGPA 9.10'],
        runtime: 'Oct 2023 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Topper',
        description: 'AIML Branch Topper with a 9.24 SGPA for the semester.',
        tags: ['9.24 SGPA', 'Branch Topper'],
        runtime: 'One semester',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: 'LeetCode 350+ (peak 1442), GFG 300+ (1436), CodeChef 200+ and HackerRank 5-star badges in C, Python, Java and SQL.',
        tags: ['DSA', 'LeetCode', 'GFG', 'CodeChef', 'HackerRank'],
        runtime: '850+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2025 – 2026',
    synopsis: 'One year of intensive Full-Stack Development training as a Trainee at Technical Hub Pvt Ltd.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Trainee',
        description: 'Intensive Full-Stack Development training covering frontend, backend, database integration and deployment workflows.',
        tags: ['FSD', 'Frontend', 'Backend', 'Databases'],
        runtime: 'May 2025 – Jun 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Developer',
        description: 'Developed responsive web applications — user interfaces, server-side logic and database connectivity.',
        tags: ['React', 'Node.js', 'Express.js'],
        runtime: 'Technical Hub',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'Deployed and managed web applications with version control, debugging and end-to-end development practices.',
        tags: ['Git / GitHub', 'Deployment'],
        runtime: 'Technical Hub',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Three Originals — an AI platform, a payment gateway and a multi-tenant SaaS — plus national-level recognition.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Builder',
        description: 'PolicyGuard AI — LLM-based Q&A and key-information extraction across 500+ policy documents at 92% accuracy.',
        tags: ['Python', 'NLP', 'LLM'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Architect',
        description: 'Payment Gateway System and Multi-Tenant SaaS Platform — state machines, microservices, tenant isolation and RBAC.',
        tags: ['Node.js', 'PostgreSQL', 'Docker'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Fellow',
        description: 'Selected as a Tech Fellow at AlgoUniversity and reached the Semi-Finals of Flipkart GRiD 7.0.',
        tags: ['AlgoUniversity', 'Flipkart GRiD 7.0'],
        runtime: 'National stage',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring new skills, Aptitude, Consistency.',
        runtime: 'In progress',
        tags: ['Aptitude', 'Consistency', 'New Skills', 'Learning', 'Exploring'],
        palette: violet,
      },
    ],
  },
];



/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Bachelor of Business Administration (BBA)',
    lines: ['Aditya Degree College, Machilipatnam'],
  },

  {
    kicker: 'Skills',
    title: 'Skills.',
    lines: ['Advance Excel • Power BI • Business Analytics • Data Analysis • Business Reporting • Project Management • Marketing & Sales'],
    chips: ['Excel', 'Power BI', 'Business Analytics', 'Data Analysis', 'Business Reporting', 'Project Management', 'Marketing & Sales'],
  },
  {
    kicker: 'Internship',
    title: 'Generative AI Intern',
    lines: ['Ulearn', '2 Months'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Market and Consumer Behavior Research • HR Payroll & Attendance Tracker • AI Adoption Business Analytics & ROI Assessment Framework'],
  },
   {
    kicker: 'Hackathons',
    title: 'Experience i gained',
    lines: ['Advanced Digital Marketing Hackathon • Web Development Hackathon • SEO & Startup Website Project'],
  },
  {
    kicker: 'Certified',
    title: '10 Certifications',
    lines: ['IBM • Skill Course • Tally • Microsoft • Tencon Infra • Cisco • Criativo ELearning • MEPRO PEAESON'],
  }

];

export type ProfileId = 'Dharmika' | 'recruiter' |  'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'Dharmika',
    name: 'Dharmika',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, hackathons & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Hackathons', meta: `${hackathons.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },

};
