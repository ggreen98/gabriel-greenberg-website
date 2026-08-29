import { site } from '../content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <span>
          © {new Date().getFullYear()} {site.llc}
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
