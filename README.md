# Gabriel Greenberg: Portfolio Site

My personal portfolio: data science and atmospheric chemistry work, peer-reviewed publications, and web projects.

**Live site:** [gabriel-greenberg-website.vercel.app](https://gabriel-greenberg-website.vercel.app)

## Built with

- **React + Vite** for the app and build
- **Plain CSS** per component, with light and dark themes
- **Formspree** for the contact form (no backend needed)
- **Vercel** for hosting, deploying automatically on every push to `main`

## How it's organized

Nearly all the content (bio, skills, experience, projects, publications, links) lives in one file, [`src/content.js`](src/content.js). The components in [`src/components/`](src/components/) only handle layout. Updating the site means editing data, not markup.

## Running locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```
