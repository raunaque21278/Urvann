import { useState } from 'react';
import { addPlant } from '../api';

const AddPlantForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', price: '', categories: '', available: true });
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.price || !form.categories) {
      setError('All fields are required.');
      return;
    }
    try {
      await addPlant({
        ...form,
        price: Number(form.price),
        categories: form.categories.split(',').map(c => c.trim())
      });
      setForm({ name: '', price: '', categories: '', available: true });
      setError('');
      onAdd();
    } catch (err) {
      setError('Error adding plant.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="creative-form">
      <div className="input-group">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <span className="helper-text">Enter plant name</span>
      </div>
      <div className="input-group">
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
        <span className="helper-text">Set price in INR</span>
      </div>
      <div className="input-group">
        <input name="categories" placeholder="Categories (comma separated)" value={form.categories} onChange={handleChange} />
        <span className="helper-text">E.g. Home Decor, Indoor</span>
      </div>
      <div className="input-group checkbox-group">
        <label className="checkbox-label">
          Available:
          <input name="available" type="checkbox" checked={form.available} onChange={handleChange} className="animated-checkbox" />
        </label>
      </div>
      <button type="submit" className="creative-btn">Add Plant</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddPlantForm;