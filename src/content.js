// Content — most of this is now real. Remaining placeholders are marked.

export const site = {
  name: 'Gabriel Greenberg',
  llc: 'Gabriel Greenberg L.L.C.',
  title: 'Data Scientist',
  subtitle: 'Chemistry-trained. Data-focused.',
  email: 'gabriel.jwgreenberg@gmail.com',
  linkedin: 'https://linkedin.com/in/your-handle', // placeholder — update with your real URL
  github: 'https://github.com/your-handle', // placeholder — update with your real URL
  resumeHref: '#', // placeholder — link to a hosted resume PDF
  formEndpoint: 'https://formspree.io/f/your-form-id', // placeholder — replace with your Formspree endpoint (see README)
  availability: 'Open to in-office, hybrid, or remote — along the Front Range or abroad.', // placeholder — set what you're actually looking for
};

// A short third-party quote (former manager, collaborator, client). Set
// quote to '' to hide this section entirely until you have a real one.
export const testimonial = {
  quote: '', // placeholder — e.g. "Gabriel is one of the most rigorous analysts I've worked with."
  name: '', // e.g. 'Dr. Detlev Helmig'
  role: '', // e.g. 'Director, Boulder A.I.R.'
};

export const skills = [
  { symbol: 'Py', name: 'Python' },
  { symbol: 'R', name: 'R' },
  { symbol: 'SQL', name: 'SQL' },
  { symbol: 'ML', name: 'Machine Learning' },
  { symbol: 'St', name: 'Statistics' },
  { symbol: 'Ac', name: 'Atmospheric Chemistry' },
];

export const about = {
  paragraphs: [
    "I started in the lab — running gas chromatography on air samples collected from around the world, learning to read a chromatogram before I ever wrote a line of Python. That instinct is still how I work: form a hypothesis, test it against evidence, and don't trust a result until it replicates.",
    "I hold a bachelor's degree in chemistry from Quest University Canada and a master's degree in data science (4.0 GPA) from the University of Wisconsin–Eau Claire. For the past several years I've worked as a data scientist analyzing greenhouse gases and atmospheric pollutants — building the data pipelines, statistical models, and dashboards that turn raw sensor data into published, peer-reviewed research.",
    "Outside of that, I shoot photography and build web software — different instruments, same habit of paying close attention.",
  ],
};

export const experience = [
  {
    range: '2020 — Present',
    role: 'Data Scientist',
    org: 'Boulder A.I.R.',
    bullets: [
      'Five years analyzing greenhouse gases and atmospheric pollutants using Python and R for research and operational pipelines.',
      'Own data quality control, aggregation, and sharing across the full pipeline — from raw sensor data to exploratory analysis, modeling, and visualization.',
      'Build and maintain dashboards and internal tooling; automate recurring data pipelines.',
      'Co-authored 3 peer-reviewed publications on air quality and atmospheric chemistry (see below).',
    ],
  },
  {
    range: '2019 — 2020',
    role: 'Research Assistant',
    org: 'Quest University Canada',
    bullets: [
      'Studied experiential, interdisciplinary learning in chemistry through development of a forensic geochemistry course.',
      'Tested laboratory experiments and authored a lab manual for a future university course.',
    ],
  },
  {
    range: 'Summer 2019',
    role: 'Research Intern',
    org: 'University of Colorado — Institute of Arctic and Alpine Research',
    bullets: [
      "Trained to run, read, and interpret FID gas chromatography data to determine non-methane VOC concentrations in global flask samples, for INSTAAR's global VOC monitoring program.",
      'Wrote Python to plot and interpret trends in the resulting data.',
    ],
  },
  {
    range: '2025',
    role: "Master's Degree, Data Science — GPA 4.0",
    org: 'University of Wisconsin–Eau Claire',
    bullets: [
      'Coursework: machine learning & data mining, big data / high-performance computing, statistical methods, data visualization, prescriptive analytics.',
    ],
  },
  {
    range: '2020',
    role: "Bachelor's Degree, Chemistry",
    org: 'Quest University Canada',
    bullets: [],
  },
];

export const publications = [
  {
    citation:
      'Caputi, D., Helmig, D., Darby, L.S., Greenberg, G., Hueber, J., Simoncic, S., Ortega, J. (2025). Late winter ozone and PM2.5 NAAQS exceedance in the Northern Colorado Front Range in relation to oil and natural gas emissions.',
    journal: 'J. Geophys. Res. Atmos. 130, e2024JD041862',
    href: 'https://doi.org/10.1029/2024JD041862',
  },
  {
    citation:
      'Helmig, D., Greenberg, G., Hueber, J., Blanchard, B., Chopra, J., Simoncic, S., Angot, H., Darby, L.S., Ortega, J., Caputi, D. (2025). Methane and volatile organic compounds and their influence on air quality in Boulder, Colorado.',
    journal: 'Elem. Sci. Anth. 13, 00117',
    href: 'https://doi.org/10.1525/elementa.2023.00117',
  },
  {
    citation:
      'Helmig, D., Nobel, J., Caputi, D., Brown, D., Daly, R.W., Darby, L.S., Doe, P.T., Gonzalez, O., Greenberg, G., Hueber, J., Potter, K., Schade, G.W., Simoncic, S., Stahli, M., Subra, W. (2024). Elevated airborne radioactivity downwind of a Colorado oil refinery.',
    journal: 'J. Air Waste Manag. Assoc. 74, 920–931',
    href: 'https://doi.org/10.1080/10962247.2024.2393194',
  },
];

// `impact` is optional — a short, specific, quantified outcome line for a
// project that deserves a deeper case study (leave unset to omit it).
// `codeHref` is optional — link straight to a public repo/notebook if you
// have one; falls back to `href` if unset.
export const projects = [
  {
    title: 'VOC Trend Analysis Pipeline',
    description:
      'A Python pipeline that processes FID gas chromatography data from global flask samples, quantifying and plotting trends in non-methane volatile organic compounds.',
    tags: ['Python', 'Atmospheric Chemistry', 'GC-FID'],
    href: '#', // placeholder — link to a write-up or repo
    codeHref: '', // placeholder — e.g. a GitHub repo/notebook URL
    impact: '', // placeholder — e.g. "Processed 5+ years of flask data across 40 global sites"
  },
  {
    title: 'Greenhouse Gas Monitoring Dashboard',
    description:
      "An operational dashboard for Boulder A.I.R.'s air quality monitoring network — data quality control, aggregation, and visualization for a research and public audience.",
    tags: ['Python', 'Dashboards', 'Data QC'],
    href: '#', // placeholder — link to a write-up or repo
    codeHref: '',
    impact: '',
  },
  {
    title: 'Air Quality Modeling',
    description:
      'Statistical and machine learning models relating pollutant concentrations (ozone, PM2.5, VOCs) to emissions sources, supporting peer-reviewed research.',
    tags: ['R', 'Statistical Modeling', 'ML'],
    href: '#', // placeholder — link to a write-up or repo
    codeHref: '',
    impact: '',
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
