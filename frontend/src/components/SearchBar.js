
const SearchBar = ({ value, onChange }) => (
  <div className="creative-search-bar">
    <span className="search-icon" role="img" aria-label="search">🔍</span>
    <input
      type="text"
      className="creative-search-input"
      placeholder="Search plants..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

export default SearchBar;