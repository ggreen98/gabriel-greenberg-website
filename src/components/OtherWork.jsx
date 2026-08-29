import { photography, webProjects } from '../content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import './OtherWork.css';

export default function OtherWork() {
  return (
    <section id="other-work" className="section other-work">
      <div className="section-inner">
        <Reveal>
          <Eyebrow from="Also" to="Building" tone="verdigris" />
          <h2 className="other-work__heading">Other work</h2>
          <p className="other-work__intro">
            Photography and web development, kept separate from client data work but built with the
            same attention.
          </p>
        </Reveal>

        <div className="other-work__block">
          <Reveal as="h3" className="other-work__label">
            <span>Light</span>
            <svg viewBox="0 0 40 16" fill="none" aria-hidden="true">
              <line x1="0" y1="8" x2="34" y2="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M28 2L34 8L28 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <span>Image</span>
          </Reveal>
          <div className="photo-grid">
            {photography.map((p, i) => (
              <Reveal key={p.caption} delay={i * 60} className="photo-tile">
                <span>{p.caption}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="other-work__block">
          <Reveal as="h3" className="other-work__label">
            <span>Idea</span>
            <svg viewBox="0 0 40 16" fill="none" aria-hidden="true">
              <line x1="0" y1="8" x2="34" y2="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M28 2L34 8L28 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <span>Interface</span>
          </Reveal>
          <div className="web-grid">
            {webProjects.map((w, i) => (
              <Reveal as="a" href={w.href} key={w.title} delay={i * 60} className="web-card">
                <h4>{w.title}</h4>
                <p>{w.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
