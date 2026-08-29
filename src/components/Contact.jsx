import { site } from '../content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <Reveal>
          <Eyebrow from="Question" to="Conversation" />
          <h2 className="contact__heading">Let's talk</h2>
          <p className="contact__blurb">
            Open to data science and analytics contract work. Reach out directly, or find me on
            LinkedIn and GitHub.
          </p>

          <div className="contact__links">
            <a className="btn" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="btn ghost" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn ghost" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
