import { site, skills } from '../content';
import ElementTile from './ElementTile';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="section-inner hero__inner">
        <p className="hero__eyebrow">Chemistry · Data · Insight</p>

        <h1 className="hero__name">{site.name}</h1>

        <p className="hero__equation" aria-label={`${site.title}, ${site.subtitle}`}>
          <span>Chemistry</span>
          <svg viewBox="0 0 40 16" fill="none" aria-hidden="true">
            <line x1="0" y1="8" x2="34" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M28 2L34 8L28 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <span>Data</span>
          <svg viewBox="0 0 40 16" fill="none" aria-hidden="true">
            <line x1="0" y1="8" x2="34" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M28 2L34 8L28 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="hero__equation-highlight">Insight</span>
        </p>

        <p className="hero__blurb">
          {site.title} analyzing greenhouse gases and atmospheric pollutants, with a
          bachelor's degree in chemistry and a master's degree in data science. I also
          take on independent analytics and web projects through {site.llc}.
        </p>

        <div className="hero__actions">
          <a className="btn" href={site.resumeHref}>
            View résumé
          </a>
          <a className="btn ghost" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="hero__tiles" role="list" aria-label="Core skills">
          {skills.map((s, i) => (
            <ElementTile key={s.symbol} index={i + 1} symbol={s.symbol} name={s.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
