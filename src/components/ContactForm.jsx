import { useState } from 'react';
import { site } from '../content';
import './ContactForm.css';

const isConfigured = !site.formEndpoint.includes('your-form-id');

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus('sending');
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form contact-form--done">
        <p>Message sent. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {!isConfigured && (
        <p className="contact-form__notice">
          Form endpoint not yet configured. See README for setup.
        </p>
      )}

      <div className="contact-form__row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className="contact-form__row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="contact-form__row">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      {/* honeypot field for basic spam filtering */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="contact-form__hp" />

      <button className="btn" type="submit" disabled={status === 'sending' || !isConfigured}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="contact-form__error">Something went wrong. Try again, or email me directly.</p>
      )}
    </form>
  );
}
