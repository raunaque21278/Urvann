import { deletePlant } from '../api';

const AdminPlantList = ({ plants, onRemove }) => (
  <div className="plant-grid">
    {plants.map(plant => (
      <div key={plant._id} className="plant-card creative-card">
        <img
          src={plant.image || "https://cdn-icons-png.flaticon.com/512/2909/2909763.png"}
          alt={plant.name}
          className="plant-img"
          onError={e => { e.target.src = "https://cdn-icons-png.flaticon.com/512/2909/2909763.png"; }}
        />
        <h3>{plant.name}</h3>
        <p className="price">₹{plant.price}</p>
        <div className="categories">
          {plant.categories.map((cat, idx) => (
            <span key={idx} className={`badge badge-${cat.replace(/\s/g, '').toLowerCase()}`}>{cat}</span>
          ))}
        </div>
        <p className={`availability ${plant.available ? 'yes' : 'no'}`}>{plant.available ? 'Available' : 'Out of Stock'}</p>
        <button className="remove-btn" onClick={async () => { await deletePlant(plant._id); onRemove(); }}>Remove</button>
      </div>
    ))}
  </div>
);

export default AdminPlantList;