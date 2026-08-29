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

## Strengthening the site for job hunting

Ideas for getting more attention as a young professional, in rough order of
impact. Templates for most of these already exist in the code — fill in the
data and they'll show up automatically.

- [ ] **State what you're open to.** `site.availability` in `content.js`
      drives the badge in the "Let's talk" section (e.g. full-time vs.
      contract, remote vs. Boulder-based). Already templated and live with a
      placeholder value — just edit the text.
- [ ] **Give one project real depth.** A single detailed case study (the
      problem, your approach, a real quantified outcome) beats three thin
      summaries. Set a project's `impact` field in `content.js` for a short
      quantified-outcome line under its description — currently empty/unset
      on all three, so nothing shows until you add one.
- [ ] **Add a testimonial.** A quote from a manager or collaborator (e.g. Dr.
      Helmig) is unusually persuasive early-career, since it's third-party
      validation. Fill in `testimonial` in `content.js` (quote/name/role) —
      the section is templated but stays hidden until `quote` is non-empty,
      so nothing fake ever gets published by accident.
- [ ] **Link to real code.** Set a project's `codeHref` in `content.js` to a
      public repo or notebook URL and a "View code ↗" link appears on that
      card automatically.
- [x] **Favicon.** Done — a modern "GG" monogram in a gradient circle
      (`public/favicon.svg`).

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
