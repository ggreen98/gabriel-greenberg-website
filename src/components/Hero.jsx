import { useState } from 'react';
import { site, skills } from '../content';
import ElementTile from './ElementTile';
import './Hero.css';

export default function Hero() {
  // Hover/focus previews a skill; clicking pins it so it stays open (and
  // works on touch, where there is no hover).
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(null);
  const shown = skills.find((s) => s.symbol === (hovered ?? pinned));

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
          I build data pipelines, models, and visualizations that turn raw sensor data
          into research-grade results. My current work is primary research on ozone and
          other tropospheric pollutants, backed by a chemistry degree and a master's in
          data science. I also take on independent analytics and web projects through{' '}
          {site.llc}
        </p>

        <div className="hero__actions">
          <a className="btn ghost" href={site.resumeHref}>
            View résumé
          </a>
          <a className="btn" href="#contact">
            Get in touch
          </a>
        </div>

        <p id="skills-label" className="hero__tiles-label">
          Skills &amp; tools I've worked with
        </p>

        <div
          className="hero__tiles"
          role="group"
          aria-labelledby="skills-label"
          onMouseLeave={() => setHovered(null)}
          onBlur={() => setHovered(null)}
        >
          {skills.map((s, i) => (
            <ElementTile
              key={s.symbol}
              index={i + 1}
              symbol={s.symbol}
              name={s.name}
              active={shown?.symbol === s.symbol}
              pinned={pinned === s.symbol}
              onPreview={() => setHovered(s.symbol)}
              onToggle={() => {
                // Clear the preview too, so a second tap closes it on touch.
                if (pinned === s.symbol) setHovered(null);
                setPinned(pinned === s.symbol ? null : s.symbol);
              }}
            />
          ))}
        </div>

        <div id="skill-detail" className="hero__detail" aria-live="polite">
          {shown ? (
            <>
              <span className="hero__detail-name">{shown.name}</span>
              {shown.details?.length > 0 && (
                <ul className="hero__detail-list">
                  {shown.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <span className="hero__detail-hint">Hover or tap an element for details.</span>
          )}
        </div>
      </div>
    </section>
  );
}
