// Content — most of this is now real. Remaining placeholders are marked.

export const site = {
  name: 'Gabriel Greenberg',
  llc: 'Gabriel Greenberg L.L.C.',
  title: 'Data Scientist',
  subtitle: 'Chemistry-trained. Data-focused.',
  email: 'gabriel.jwgreenberg@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gabe-greenberg-3604a31b7/',
  github: 'https://github.com/ggreen98',
  resumeHref: '#', // placeholder — link to a hosted resume PDF
  formEndpoint: 'https://formspree.io/f/mrpenjwv',
  availability: 'Based in Boulder, Colorado. Open to in-office, hybrid, or remote work along the Front Range or abroad.', // placeholder — set what you're actually looking for
};

// A short third-party quote (former manager, collaborator, client). Set
// quote to '' to hide this section entirely until you have a real one.
export const testimonial = {
  quote: '', // placeholder — e.g. "Gabriel is one of the most rigorous analysts I've worked with."
  name: '', // e.g. 'Dr. Detlev Helmig'
  role: '', // e.g. 'Director, Boulder A.I.R.'
};

// `details` are the tools/topics shown when a skill tile is hovered or
// clicked. Leave it empty to show just the skill name.
export const skills = [
  {
    symbol: 'EDA',
    name: 'Exploratory Data Analysis',
    details: ['Data cleaning', 'Summary statistics', 'Distributions & outliers', 'Correlation analysis', 'Time series decomposition', 'Hypothesis generation'],
  },
  {
    symbol: 'Py',
    name: 'Python',
    details: ['pandas', 'NumPy', 'SciPy', 'statsmodels', 'scikit-learn', 'XGBoost', 'PyTorch', 'Matplotlib', 'Seaborn', 'Plotly', 'Dash', 'Folium'],
  },
  {
    symbol: 'R',
    name: 'R',
    details: ['tidyverse', 'dplyr', 'ggplot2', 'lubridate', 'openair', 'caret'],
  },
  {
    symbol: 'SQL',
    name: 'SQL',
    details: ['SQLite', 'MySQL', 'SQLAlchemy'],
  },
  {
    symbol: 'ML',
    name: 'Machine Learning',
    details: ['scikit-learn', 'XGBoost', 'PyTorch', 'caret (R)', 'Data mining', 'DBSCAN clustering', 'Model testing & validation', 'Hyperparameter tuning', 'Linear optimization'],
  },
  {
    symbol: 'St',
    name: 'Statistics',
    details: ['Time series analysis', 'Regression analysis', 'Trend analysis', 'ARIMA / SARIMA', 'Statistical methods', 'SciPy'],
  },
  {
    symbol: 'Vz',
    name: 'Data Visualization',
    details: ['Tableau', 'Dash', 'Plotly', 'Matplotlib', 'Seaborn', 'ggplot2', 'Folium'],
  },
  {
    symbol: 'Ch',
    name: 'Chemistry',
    details: ['General chemistry', 'Physical chemistry', 'Organic chemistry', 'Inorganic chemistry', 'Spectroscopy'],
  },
  {
    symbol: 'Ac',
    name: 'Atmospheric Chemistry',
    details: ['Greenhouse gases', 'Methane', 'Volatile organic compounds (VOCs)', 'Ozone', 'PM2.5', 'GC-FID'], // placeholder — confirm
  },
];

export const about = {
  paragraphs: [
    "I started out as a chemist, earning my degree at Quest University Canada and running gas chromatography on air samples collected from around the world. What hooked me was the puzzle: form a hypothesis, test it against the evidence, and question a result before trusting it, especially when it's the one I was hoping for.",
    "Programming turned out to be the same kind of puzzle. I had no coding experience when I started, so I taught myself on the job, before AI assistants made that easier. I learned it well enough to earn a place in a data science master's program at the University of Wisconsin–Eau Claire without a single undergraduate programming course, and I finished with a 4.0.",
    "Since 2020 I've done primary research on ozone and other tropospheric pollutants at Boulder A.I.R., building the data pipelines, QC tools, statistical models, and libraries that turn raw sensor data into peer-reviewed results.",
    "Computer science moves faster than any field I know. In a few years I've gone from scripts on one machine to containerized pipelines running across many, and now to AI tools that change how code gets written. I'm enough of a nerd that learning the next thing is the fun part. But new tools make critical thinking more important, not less: an AI can write code in seconds, and someone still has to know whether the answer is right. That's the part of the job I take most seriously.",
    "Outside of work, I shoot photography, play guitar, and bake, which is really just chemistry you get to eat. Different instruments, same habit of paying close attention.",
  ],
};


export const experience = [
  {
    range: '2020–Present',
    role: 'Data Scientist',
    org: 'Boulder A.I.R.',
    orgHref: 'https://bouldair.com/',
    bullets: [
      'Rebuilt legacy station-specific submission scripts into a generalized Python library that formats data into EBAS-compliant NASA Ames files.',
      'Submit finalized station data to the EBAS, EPA AMATIC, and Arctic Data Center archives.',
      'Built Skytap, a Python pipeline that ran 285,103 HYSPLIT back trajectories, downloading and processing 30 TB of meteorological data in parallel across multiple machines to meet time, memory, and cost limitations.',
      'Built pscf_py, a multi-site Python library for potential source contribution function (PSCF) analysis, a geospatial statistical method for mapping likely pollution source regions. No multi-site PSCF library existed in Python, and it supports analysis and experimentation beyond existing PSCF tools.',
      'Built an interactive data-finalization tool for plot-based QC review of instrument data.',
      'Located a natural gas pipeline leak in a North Broomfield neighborhood (June 2022) from methane, volatile organic compound (VOC), and meteorological data; the City of Broomfield used these leads to find and shut in the leak.',
      "Built and maintain bouldair.com, Boulder A.I.R.'s company website.",
      'Co-authored 5 peer-reviewed publications on air quality and atmospheric chemistry (see below).',
    ],
  },
  {
    range: '2019–2020',
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
    org: 'University of Colorado (Institute of Arctic and Alpine Research)',
    bullets: [
      "Trained to run, read, and interpret FID gas chromatography data to determine non-methane volatile organic compound (VOC) concentrations in global flask samples, for INSTAAR's global VOC monitoring program.",
      'Wrote Python to plot and interpret trends in the resulting data.',
    ],
  },
  {
    range: '2025',
    role: "Master's Degree, Data Science (GPA 4.0)",
    org: 'University of Wisconsin–Eau Claire',
    bullets: [
      'Coursework: machine learning & data mining, big data / high-performance computing, statistical methods, data visualization, prescriptive analytics.',
    ],
  },
  {
    range: '2020',
    role: "Bachelor's Degree, Chemistry",
    org: 'Quest University Canada',
    bullets: [
      'Coursework: general chemistry I & II (physical chemistry), organic chemistry I & II, spectroscopy, inorganic chemistry.',
    ],
  },
];

export const publications = [
  {
    citation:
      'Caputi, D., Franklin, M., Greenberg, G., Hueber, J., Johnston, J., Potter, K., Schade, G., Stahli, M., Wu, J.Y., Cushing, L., Daly, R., Helmig, D. (2026). Airborne radioactivity in the New Mexico oil and gas development area of the Permian Basin.',
    journal: 'Elem. Sci. Anth. 14, 00128',
    href: 'https://doi.org/10.1525/elementa.2025.00128',
  },
  {
    citation:
      'Franklin, M., Schade, G., Caputi, D., Cushing, L.J., Daly, R.W., Greenberg, G., Helmig, D., Hueber, J., Johnston, J.E., Potter, K.E., Stahli, M., Wu, J.Y. (2026). Source contributions to air pollution in the Permian Basin: evaluating emissions from unconventional oil and gas activities.',
    journal: 'ACS ES&T Air 3, 1284–1300',
    href: 'https://doi.org/10.1021/acsestair.5c00429',
  },
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
// `posterHref` is optional — link to a poster PDF (files in `public/` are
// served from the site root).
// `featured` makes the card span the full grid width; `highlights` is an
// optional list of { name, text } shown as a short breakdown in the card.
// `image` is optional — { src, alt } shown at the top of the card, linking
// to the full-size file.
export const projects = [
  {
    title: 'Front Range Ozone Source Regions',
    description:
      'First-author conference poster, built as an interactive web page, tracing where summertime ozone and its precursors come from along the Northern Colorado Front Range. Funded by a Colorado Air Quality Enterprise research grant. Pairs ozone, nitrogen oxide (NOx), and volatile organic compound (VOC) observations with NOAA HYSPLIT back trajectories and PSCF source mapping. Prepared for the Intermountain West Ozone Exchange Conference (October 2026). A first-author journal manuscript is in preparation.',
    tags: ['Python', 'HYSPLIT', 'PSCF', 'Geospatial Statistics', 'Docker', 'Web'],
    featured: true,
    highlights: [
      {
        name: 'Skytap',
        text: 'A Python pipeline on Linux and Docker that ran 285,103 HYSPLIT back trajectories, temporarily downloading and processing 30 TB of meteorological data in parallel across multiple machines to meet time, memory, and cost limitations.',
      },
      {
        name: 'pscf_py',
        text: 'A multi-site Python library for potential source contribution function (PSCF) analysis, a geospatial statistical method for mapping likely pollution source regions. No multi-site PSCF library existed in Python, and it supports analysis and experimentation beyond existing PSCF tools.',
      },
    ],
    href: 'https://www.bouldair.com/ozone_conference_poster/ozone_source_regions_poster.html',
    hrefLabel: 'View interactive poster',
    posterHref: '/ozone-source-regions-poster.pdf',
    codeHref: '', // Skytap repo is private at Boulder A.I.R.'s request
    impact: '285,103 back trajectories across 23 monitoring sites and 11 ozone seasons (2015–2025).',
  },
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
    title: 'EBAS Data Submission Library',
    description:
      "A generalized Python library that formats Boulder A.I.R. monitoring data into EBAS-compliant NASA Ames files for international archive submission, replacing a set of station-specific legacy scripts.",
    tags: ['Python', 'NASA Ames', 'EBAS', 'Data QC'],
    href: '#', // placeholder — link to a write-up or repo
    codeHref: '',
    impact: '',
  },
  {
    title: 'Broomfield Pipeline Leak Detection',
    image: {
      src: '/broomfield-leak-map.jpg',
      alt: 'Map of north Broomfield showing wind sectors during ethane spikes at the Boulder A.I.R. monitoring station, converging on the pipeline leak at Zuni Street and 152nd Avenue.',
    },
    description:
      "Traced high-frequency ethane spikes at a Broomfield monitoring station to a plume from the southwest (~210°). The plume's ethane/methane ratio (~15% by volume) was 4–5× that of other directions, and the lack of an acetylene signal pointed to un-combusted leaking gas rather than flaring. The City of Broomfield used these leads to find an underground natural gas pipeline leak in a residential neighborhood, which was shut in.",
    tags: ['Atmospheric Chemistry', 'Source Attribution', 'Time Series'],
    href: '#', // placeholder — link to a write-up or the city's notice
    codeHref: '',
    impact: "June 2022 · Broomfield's July 2022 oil and gas update confirmed the leak was shut in with no ongoing safety issues.",
  },
];

export const webProjects = [
  {
    title: 'Allylic',
    description: 'A passion project: a public chemistry learning site with interactive 3D molecule views, designed and built end to end in Next.js and React Three Fiber.',
    href: 'https://allylic.org/',
    image: {
      src: '/allylic-screenshot.jpg',
      alt: 'Allylic home page: "The chemical world, decoded" headline beside an animated hydrogen atom model.',
    },
  },
  {
    title: 'Boulder A.I.R. Website',
    description: "The company website for Boulder A.I.R., which I built and maintain, including the public list of the group's publications.",
    href: 'https://bouldair.com/',
    image: {
      src: '/bouldair-screenshot.jpg',
      alt: 'Boulder A.I.R. home page: headline over a Flatirons photo, with a live air quality card.',
    },
  },
];

export const photography = [
  { caption: 'Portrait study, 2024' },
  { caption: 'Landscape, 2024' },
  { caption: 'Street, 2023' },
  { caption: 'Architecture, 2023' },
];
