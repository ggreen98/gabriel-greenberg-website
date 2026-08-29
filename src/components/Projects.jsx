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
            <Reveal as="a" href={p.href} key={p.title} delay={i * 70} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
