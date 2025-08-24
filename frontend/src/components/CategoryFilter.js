const categories = ["Indoor", "Outdoor", "Succulent", "Air Purifying", "Home Decor"];

const CategoryFilter = ({ selected, onChange }) => (
  <select value={selected} onChange={e => onChange(e.target.value)}>
    <option value="">All Categories</option>
    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
  </select>
);

export default CategoryFilter;