// Placeholder content — edit these values with your real details.
// This is the only file you should need to touch to update copy.

export const site = {
  name: 'Gabriel Greenberg',
  llc: 'Gabriel Greenberg L.L.C.',
  title: 'Data Scientist',
  subtitle: 'Chemistry-trained. Data-focused. Independent contractor.',
  email: 'gabrielgreenbergwork@gmail.com',
  linkedin: 'https://linkedin.com/in/your-handle', // placeholder — update with your real URL
  github: 'https://github.com/your-handle', // placeholder — update with your real URL
  resumeHref: '#', // placeholder — link to a hosted resume PDF
};

export const skills = [
  { symbol: 'Py', name: 'Python' },
  { symbol: 'SQL', name: 'Databases' },
  { symbol: 'ML', name: 'Machine Learning' },
  { symbol: 'St', name: 'Statistics' },
  { symbol: 'Ac', name: 'Analytical Chemistry' },
  { symbol: 'Vz', name: 'Data Visualization' },
];

export const about = {
  paragraphs: [
    "I started in the lab — running reactions, reading spectra, and learning not to trust a result until it replicated. That instinct is still how I work: form a hypothesis, test it against evidence, and let the data argue back.",
    "Today I apply the same rigor to messier, less controlled datasets. I'm currently working independently through Gabriel Greenberg L.L.C., partnering with teams who need someone to turn raw data into a decision they can defend.",
    "Outside client work, I shoot photography and build web software — different instruments, same habit of paying close attention.",
  ],
};

export const experience = [
  {
    range: '2023 — Present',
    role: 'Independent Data Science Contractor',
    org: 'Gabriel Greenberg L.L.C.',
    bullets: [
      'Deliver end-to-end analytics engagements: data pipelines, statistical modeling, and stakeholder-facing dashboards.',
      'Work across clients as an embedded analyst — scoping the question before touching the data.',
    ],
  },
  {
    range: '2021 — 2023',
    role: 'Data Analyst',
    org: 'Placeholder Company',
    bullets: [
      'Built recurring reporting and ad-hoc analyses that shaped product and operations decisions.',
      'Owned SQL data models feeding internal dashboards.',
    ],
  },
  {
    range: '2019 — 2021',
    role: 'Research Chemist',
    org: 'Placeholder Laboratory',
    bullets: [
      'Designed and ran experiments; built the habit of treating every result as provisional until reproduced.',
      'Analyzed instrument data (spectroscopy/chromatography) — the root of a later move into data science.',
    ],
  },
  {
    range: '2015 — 2019',
    role: 'B.S., Chemistry',
    org: 'Placeholder University',
    bullets: [],
  },
];

export const projects = [
  {
    title: 'Reaction Yield Predictor',
    description:
      'A machine learning model that predicts chemical reaction yield from reagent and condition features — a direct bridge between the lab and the model.',
    tags: ['Python', 'scikit-learn', 'Chemistry'],
    href: '#',
  },
  {
    title: 'Customer Churn Dashboard',
    description:
      'An interactive dashboard surfacing churn risk from usage data, with a SQL data model feeding live visualizations for a non-technical audience.',
    tags: ['SQL', 'Python', 'Dashboards'],
    href: '#',
  },
  {
    title: 'Spectral Classification Pipeline',
    description:
      'A classification pipeline for spectroscopy data, comparing feature-engineered baselines against learned representations.',
    tags: ['ML', 'Signal Processing'],
    href: '#',
  },
];

export const webProjects = [
  {
    title: 'Chemistry Education Platform',
    description: 'A public-facing site teaching core chemistry concepts, designed and built end to end.',
    href: '#', // placeholder — link to your Vercel chemistry-education site
  },
  {
    title: 'This Site',
    description: 'A React + Vite site designed around a chemistry-to-data throughline, deployed from this repo.',
    href: '#',
  },
];

export const photography = [
  { caption: 'Portrait study, 2024' },
  { caption: 'Landscape, 2024' },
  { caption: 'Street, 2023' },
  { caption: 'Architecture, 2023' },
];
