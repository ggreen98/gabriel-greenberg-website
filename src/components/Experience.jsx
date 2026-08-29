import { experience, publications } from '../content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <Reveal>
          <Eyebrow from="Experience" to="Log" />
          <h2 className="experience__heading">Experience</h2>
        </Reveal>

        <ol className="experience__timeline">
          {experience.map((entry, i) => (
            <Reveal as="li" key={entry.role + entry.range} delay={i * 60} className="experience__entry">
              <span className="experience__date">{entry.range}</span>
              <div className="experience__content">
                <h3>{entry.role}</h3>
                <p className="experience__org">{entry.org}</p>
                {entry.bullets.length > 0 && (
                  <ul>
                    {entry.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="experience__publications">
          <h3 className="experience__pub-heading">Peer-reviewed publications</h3>
          <ul>
            {publications.map((pub) => (
              <li key={pub.href}>
                <a href={pub.href} target="_blank" rel="noreferrer">
                  {pub.citation}
                </a>
                <span className="experience__pub-journal">{pub.journal}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
