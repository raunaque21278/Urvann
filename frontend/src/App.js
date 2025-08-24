import { useCallback, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { fetchPlants } from './api';
import './App.css';
import AddPlantForm from './components/AddPlantForm';
import AdminLogin from './components/AdminLogin';
import PlantList from './components/PlantList';
import SearchBar from './components/SearchBar';

const categories = ["Indoor", "Outdoor", "Succulent", "Air Purifying", "Home Decor", "Flowering", "Medicinal", "Colorful", "Fragrant", "Low Maintenance"];

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const loadPlants = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await fetchPlants({ search, category });
      setPlants(data);
    } catch {
      setError('Failed to fetch plants.');
    }
    setLoading(false);
  }, [search, category]);

  useEffect(() => { loadPlants(); }, [search, category, loadPlants]);

  // Stats
  const total = plants.length;
  const available = plants.filter(p => p.available).length;
  const outOfStock = total - available;

  // Toast for add plant
  const handleAddPlant = () => {
    loadPlants();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Dark mode toggle
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <Router>
      <div className={`app-container${darkMode ? ' dark' : ''}`}>
        <header className="app-header">
          <img src="https://cdn-icons-png.flaticon.com/512/2909/2909763.png" alt="Plant Store Logo" className="logo" />
          <h1>Urvann Mini Plant Store</h1>
          <p className="subtitle">Browse, search, and add beautiful plants to your collection!</p>
          <button className="dark-toggle" onClick={() => setDarkMode(d => !d)}>{darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}</button>
        </header>
        <main className="main-content">
          {window.location.pathname !== '/admin' && (
            <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
              <a href="/admin">
                <button className="admin-btn">Admin</button>
              </a>
            </div>
          )}
          <Routes>
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <section className="add-plant-section">
                <h2>Add a New Plant</h2>
                <AddPlantForm onAdd={handleAddPlant} />
                {showToast && <div className="toast-success">🌱 Plant added successfully!</div>}
              </section>
            } />
            <Route path="/" element={
              <>
                <div className="stats-bar">
                  <span>Total Plants: <b>{total}</b></span>
                  <span>Available: <b>{available}</b></span>
                  <span>Out of Stock: <b>{outOfStock}</b></span>
                </div>
                <section className="controls">
                  <div className="search-bar-animated">
                    <SearchBar value={search} onChange={setSearch} />
                  </div>
                  <div className="category-chips">
                    <span
                      className={`chip${category === '' ? ' selected' : ''}`}
                      onClick={() => setCategory('')}
                    >All</span>
                    {categories.map(cat => (
                      <span
                        key={cat}
                        className={`chip${category === cat ? ' selected' : ''}`}
                        onClick={() => setCategory(cat)}
                      >{cat}</span>
                    ))}
                  </div>
                </section>
                <section className="plant-list-section">
                  <h2>Plant Catalog</h2>
                  {loading ? <div className="loader">Loading...</div> : error ? <div className="error">{error}</div> : <PlantList plants={plants} />}
                </section>
              </>
            } />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Made with 🌱 by Raunaque</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
