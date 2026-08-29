# Gabriel Greenberg — Personal Site

Personal marketing site: data science / chemistry background as the primary
lead, with photography and web development as a secondary "Other Work"
section. Built with React + Vite.

## Editing content

Almost everything (name, bio, skills, experience, projects, links) lives in
[`src/content.js`](src/content.js) — edit that file rather than the
components. Fields marked `// placeholder` still need a real value (resume
link, LinkedIn/GitHub URLs, project links, real bio/experience copy).

## Contact form setup (Formspree)

The contact form posts to [Formspree](https://formspree.io) — free for up to
50 submissions/month, no backend needed.

1. Sign up at formspree.io (free) and verify your email.
2. Create a new form, pointed at the email you want submissions sent to.
3. Copy the form endpoint it gives you (looks like
   `https://formspree.io/f/abcdwxyz`).
4. Paste it into `site.formEndpoint` in [`src/content.js`](src/content.js),
   replacing the placeholder.
5. Submit the form once from the live site — Formspree requires one test
   submission to activate a new form.

Until this is configured, the form's submit button stays disabled and shows
a small notice instead.

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
