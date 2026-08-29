import { site } from '../content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import ContactForm from './ContactForm';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact__inner">
        <Reveal className="contact__intro">
          <Eyebrow from="Question" to="Conversation" />
          <h2 className="contact__heading">Let's talk</h2>
          <p className="contact__blurb">
            Open to data science and analytics contract work. Send a message directly, or
            find me on LinkedIn and GitHub.
          </p>

          <div className="contact__links">
            <a className="btn ghost" href={`mailto:${site.email}`}>
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

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
