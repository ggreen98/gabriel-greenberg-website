import { testimonial } from '../content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import './Testimonial.css';

export default function Testimonial() {
  if (!testimonial.quote) return null;

  return (
    <section className="section testimonial">
      <div className="section-inner">
        <Reveal>
          <Eyebrow from="Their" to="Words" />
          <blockquote className="testimonial__quote">"{testimonial.quote}"</blockquote>
          <p className="testimonial__attribution">
            {testimonial.name}
            {testimonial.role ? `, ${testimonial.role}` : ''}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
