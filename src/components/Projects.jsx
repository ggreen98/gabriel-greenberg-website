import { projects, webProjects } from '../content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <Reveal>
          <Eyebrow from="Idea" to="Interface" />
          <h2 className="projects__heading">Websites I've built</h2>
        </Reveal>
        <div className="web-grid">
          {webProjects.map((w, i) => (
            <Reveal
              as="a"
              href={w.href}
              key={w.title}
              delay={i * 60}
              className="web-card"
              target="_blank"
              rel="noreferrer"
            >
              {w.image && <img className="web-card__image" src={w.image.src} alt={w.image.alt} loading="lazy" />}
              <div className="web-card__body">
                <h4>{w.title} ↗</h4>
                <p>{w.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects__group">
          <Eyebrow from="Data" to="Insight" />
          <h2 className="projects__heading">Selected projects</h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => {
            const hasLink = p.href && p.href !== '#';
            return (
            <Reveal
              as="div"
              key={p.title}
              delay={i * 70}
              className={`project-card${p.featured ? ' project-card--featured' : ''}${p.wide ? ' project-card--wide' : ''}`}
            >
              {p.image && (
                <a className="project-card__image" href={p.image.src} target="_blank" rel="noreferrer">
                  <img src={p.image.src} alt={p.image.alt} loading="lazy" />
                </a>
              )}
              {hasLink ? (
                <a className="project-card__title" href={p.href} target="_blank" rel="noreferrer">
                  <h3>
                    {p.title} <span aria-hidden="true">↗</span>
                  </h3>
                </a>
              ) : (
                <h3>{p.title}</h3>
              )}
              <p>{p.description}</p>
              {p.impact && <p className="project-card__impact">{p.impact}</p>}
              {((hasLink && p.hrefLabel) || p.posterHref || p.codeHref) && (
                <div className="project-card__links">
                  {hasLink && p.hrefLabel && (
                    <a className="project-card__cta" href={p.href} target="_blank" rel="noreferrer">
                      {p.hrefLabel} ↗
                    </a>
                  )}
                  {p.posterHref && (
                    <a className="project-card__code" href={p.posterHref} target="_blank" rel="noreferrer">
                      Poster (PDF) ↗
                    </a>
                  )}
                  {p.codeHref && (
                    <a className="project-card__code" href={p.codeHref} target="_blank" rel="noreferrer">
                      View code ↗
                    </a>
                  )}
                </div>
              )}
              {p.highlights && (
                <dl className="project-card__highlights">
                  {p.highlights.map((h) => (
                    <div key={h.name}>
                      <dt>{h.name}</dt>
                      <dd>{h.text}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
