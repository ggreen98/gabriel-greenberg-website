import './ElementTile.css';

// A periodic-table-style tile for a skill: index, symbol, name. Hovering,
// focusing, or clicking it reveals that skill's details in the hero panel.
export default function ElementTile({ index, symbol, name, active, pinned, onPreview, onToggle }) {
  return (
    <button
      type="button"
      className={`element-tile${active ? ' is-active' : ''}`}
      aria-pressed={pinned}
      aria-controls="skill-detail"
      onMouseEnter={onPreview}
      onFocus={onPreview}
      onClick={onToggle}
    >
      <span className="element-tile__index">{String(index).padStart(2, '0')}</span>
      <span className="element-tile__symbol">{symbol}</span>
      <span className="element-tile__name">{name}</span>
    </button>
  );
}
