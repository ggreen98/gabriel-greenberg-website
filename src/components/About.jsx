import { about } from '../content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner about__inner">
        <Reveal className="about__intro">
          <Eyebrow from="Lab" to="Laptop" />
          <h2>About</h2>
          <img
            className="about__photo"
            src="/gabriel-greenberg.webp"
            alt="Gabriel Greenberg"
            width="800"
            height="1000"
            loading="lazy"
          />
        </Reveal>

        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80} className="about__paragraph">
              {p}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
