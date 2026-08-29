import { projects } from '../content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <Reveal>
          <Eyebrow from="Data" to="Insight" />
          <h2 className="projects__heading">Selected projects</h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal as="div" key={p.title} delay={i * 70} className="project-card">
              <a className="project-card__title" href={p.href}>
                <h3>{p.title}</h3>
              </a>
              <p>{p.description}</p>
              {p.impact && <p className="project-card__impact">{p.impact}</p>}
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {p.codeHref && (
                <a className="project-card__code" href={p.codeHref} target="_blank" rel="noreferrer">
                  View code ↗
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
