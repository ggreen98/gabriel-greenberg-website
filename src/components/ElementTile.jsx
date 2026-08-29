import './ElementTile.css';

// A periodic-table-style tile for a skill: index, symbol, name.
export default function ElementTile({ index, symbol, name }) {
  return (
    <div className="element-tile">
      <span className="element-tile__index">{String(index).padStart(2, '0')}</span>
      <span className="element-tile__symbol">{symbol}</span>
      <span className="element-tile__name">{name}</span>
    </div>
  );
}
