// The recurring "X -> Y" reaction-arrow motif used to frame every section
// as a transformation: chemistry -> data, data -> insight, light -> image.
export default function Eyebrow({ from, to, tone }) {
  return (
    <div className={`eyebrow${tone === 'verdigris' ? ' on-verdigris' : ''}`}>
      <span>{from}</span>
      <span className="arrow" aria-hidden="true">
        <svg viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="8" x2="34" y2="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M28 2L34 8L28 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </span>
      <span>{to}</span>
    </div>
  );
}
