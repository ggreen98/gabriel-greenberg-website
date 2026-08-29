# Gabriel Greenberg — Personal Site

Personal marketing site: data science / chemistry background as the primary
lead, with photography and web development as a secondary "Other Work"
section. Built with React + Vite.

## Editing content

Almost everything (name, bio, skills, experience, projects, links) lives in
[`src/content.js`](src/content.js) — edit that file rather than the
components. Fields marked `// placeholder` still need a real value (resume
link, LinkedIn/GitHub URLs, project links, real bio/experience copy).

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint      # oxlint
```

## Deployment

Designed to deploy on [Vercel](https://vercel.com) — import this GitHub repo
as a new Vercel project (framework preset: Vite) and it will build and deploy
automatically on every push to `main`.
