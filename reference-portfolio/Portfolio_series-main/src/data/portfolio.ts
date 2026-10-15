/**
 * Central portfolio data — generated from Dharmika's resume (Dharmika BBA Full Resume.pdf).
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
  role: 'BBA Student | Business Analyst | Finance Analyst | Banking | Business Operations | Project Management | Marketing & Sales',
  tagline: ['Business Analyst', 'Finance Analyst', 'Banking', 'Business Operations', 'Project Management', 'Marketing & Sales'],
  intro:
    'A Bachelor of Business Administration (BBA) student with a foundation in finance, human resources, marketing, and business operations. Skilled in Microsoft Excel, Power BI, Tally, SAP, and Generative AI, with knowledge of data analysis, business reporting, and digital marketing. Interested in applying analytical thinking and problem-solving skills to support business decisions, improve processes, and create practical business insights.', 
  location: 'Machilipatnam, Andhra Pradesh',
  email: 'dharmikagolla64@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/dharmikagolla',
    github: 'https://github.com/dharmika06',
  },
  resumePdf: '/assets/resume.pdf',
  portrait: {
  src: '/assets/profile.png',
  alt: 'Portrait of Dharmika Golla',
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
    org: 'Adhock',
    detail: 'Participated in digital marketing activities focused on social media promotion, content creation, and online campaign planning.',
    laurel: 'Digital Marketing',
  },
  {
    id: 'web-development',
    title: 'Web Development Hackathon',
    org: 'Adhock',
    detail: 'Collaborated on designing and developing a responsive webpage within a limited timeframe, applying frontend development and problem-solving skills.',
    laurel: 'Web Development',
  },
  {
    id: 'SEO Hackathon',
    title: 'SEO & Startup Website Project',
    org: 'Adhock',
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
    id: 'business-analytics',
    title: 'Business & Analytics',
    subtitle: 'Data analysis and reporting',
    skills: [
      { name: 'Advanced Excel', mono: 'XL' },
      { name: 'Power BI', mono: 'BI' },
      { name: 'Data Analysis', mono: 'DA' },
      { name: 'Dashboard Creation', mono: 'DB' },
      { name: 'KPI Reporting', mono: 'KPI' },
    ],
  },
  {
    id: 'management',
    title: 'Business & Management',
    subtitle: 'Core business knowledge',
    skills: [
      { name: 'Business Administration', mono: 'BA' },
      { name: 'Financial Management', mono: 'FM' },
      { name: 'HR Fundamentals', mono: 'HR' },
      { name: 'Marketing', mono: 'MK' },
      { name: 'Communication', mono: 'CM' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technology',
    subtitle: 'Business tools and digital skills',
    skills: [
      { name: 'Tally ERP', mono: 'TA' },
      { name: 'SAP', mono: 'SAP' },
      { name: 'Generative AI', mono: 'AI' },
      { name: 'Prompt Engineering', mono: 'PE' },
      { name: 'Python (Basic)', mono: 'PY' },
      { name: 'API Fundamentals', mono: 'API' },
    ],
  },
  {
    id: 'digital',
    title: 'Digital Skills',
    subtitle: 'Digital marketing and web basics',
    skills: [
      { name: 'SEO Fundamentals', mono: 'SEO' },
      { name: 'Digital Marketing', mono: 'DM' },
      { name: 'Google Search Console', mono: 'GSC' },
      { name: 'HTML', mono: 'HT' },
      { name: 'Web Design', mono: 'WD' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or hackathons on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'Microsoft Excel': ['Employee Payroll & Attendance Tracker'],
  'Power BI': ['Business data visualization and reporting'],
  'Tally ERP': ['Accounting and financial records'],
  SAP: ['SAP training'],
  'Generative AI': ['Generative AI Virtual Internship'],
  'Prompt Engineering': ['Generative AI Virtual Internship'],
  Python: ['Python fundamentals'],
  'API Fundamentals': ['Generative AI Virtual Internship'],
  SEO: ['SEO & Startup Website Project'],
  'Digital Marketing': ['Advanced Digital Marketing Hackathon'],
  HTML: ['Web Development Hackathon'],
  CSS: ['Web Development Hackathon'],
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
    synopsis: 'Intermediate years at Nobel College, Machilipatnam — Civics, Economics and Commerce.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'BIEAP, CEC at Nobel College, Machilipatnam.',
        tags: ['CEC', 'BIEAP'],
        runtime: 'Jun 2021 – May 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'My Journey',
    period: '2024-2027',
    synopsis: 'Bachelor of Business Administration at Aditya Degree College, Machilipatnam.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'CMA Foundation',
        description: 'CMA Foundation, INSTITUTE OF COST ACCOUNTANTS OF INDIA.',
        tags: ['CMA', 'Completed', 'ICMAI'],
        runtime: '2023-2024',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The BBA Student',
        description: 'Bachelor of Business Administration student at Aditya Degree College, Machilipatnam.',
        tags: ['bba', 'aditya degree college', 'machilipatnam'],
        runtime: '2024 – 2027',
        palette: crimson,
      },
  {
  code: 'S02 E03',
  title: 'The Community Researcher',
  description: 'Studied marketing strategies at malls and showrooms as part of a Community Service Project, exploring customer engagement and promotional techniques.',
  tags: ['Market Research', 'Marketing Strategy', 'Customer Engagement'],
  runtime: 'Community Service Project',
  palette: jade,
},
    ],
  },
  {
  number: 3,
   title: 'The Skill Builder',
   synopsis: 'Building practical business skills.',
   period: '2024–2026',      
   
  episodes: [
    {
      code: 'S03 E01',
      title: 'The Excel Analyst',
      description: 'Building practical data analysis skills using Advanced Excel, formulas, pivot tables, charts and dashboards.',
      tags: ['Advanced Excel', 'Data Analysis', 'Pivot Tables'],
      runtime: '2024–2026',
      palette: ocean,
    },
    {
      code: 'S03 E02',
      title: 'The Dashboard Creator',
      description: 'Learning to transform business data into meaningful reports and interactive dashboards using Power BI.',
      tags: ['Power BI', 'Data Visualization', 'KPI Dashboards'],
      runtime: '2025–2026',
      palette: violet,
    },
    {
      code: 'S03 E03',
      title: 'The Business Professional',
      description: 'Developing business and accounting skills through Tally, SAP, Generative AI and practical business projects.',
      tags: ['Tally', 'SAP', 'Generative AI', 'Business Analysis'],
      runtime: '2025–2026',
      palette: jade,
    },
  ],
},
{
  number: 4,
  title: 'Building Real Projects',
  period: '2026',
  synopsis: 'Applying business knowledge and technical skills to practical projects.',
  episodes: [
    {
      code: 'S04 E01',
      title: 'The Payroll Tracker',
      description: 'An Excel-based employee payroll and attendance tracker for organizing employee records and calculations.',
      tags: ['Excel', 'Payroll', 'HR Analytics'],
      runtime: '2026',
      palette: crimson,
    },
    {
      code: 'S04 E02',
      title: 'The FinTech Researcher',
      description: 'Researching the impact of FinTech lending startups on traditional bank credit disbursement to MSMEs.',
      tags: ['FinTech', 'Banking', 'MSMEs', 'Market Research'],
      runtime: '2026',
      palette: amber,
    },
    {
      code: 'S04 E03',
      title: 'The Business Analyst',
      description: 'Exploring business analysis, requirements, process improvement and data-driven decision-making.',
      tags: ['Business Analysis', 'Problem Solving', 'Data Analysis'],
      runtime: '2026',
      palette: ocean,
    },
  ],
},
{
  number: 5,
  title: "What's Next",
  period: '2026–2027',
  synopsis: 'Preparing for graduation, placements and a career with strong growth opportunities.',
  episodes: [
    {
      code: 'S05 E01',
      title: 'The Placement Journey',
      description: 'Preparing for aptitude tests, interviews, communication rounds and campus recruitment.',
      tags: ['Aptitude', 'Interview Preparation', 'Communication'],
      runtime: 'In progress',
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



export const topPicks: { label: string; title: string; detail: string; palette: string }[] = [
  {
    label: 'ANALYTICS',
    title: 'Power BI Dashboard',
    detail: 'Turning business data into useful insights.',
    palette: 'jade',
  },
  {
    label: 'FINANCE',
    title: 'Financial Management',
    detail: 'Understanding financial planning and analysis.',
    palette: 'violet',
  },
  {
    label: 'BUSINESS',
    title: 'Business Analysis',
    detail: 'Improving processes through data-driven decisions.',
    palette: 'ocean',
  },
  {
    label: 'PROJECT',
    title: 'HR Payroll & Attendance Tracker',
    detail: 'Managing employee payroll and attendance using Excel.',
    palette: 'crimson',
  },
  {
    label: 'DIGITAL',
    title: 'SEO & Website Hackathons',
    detail: 'Building a startup website and learning SEO.',
    palette: 'jade',
  },
];