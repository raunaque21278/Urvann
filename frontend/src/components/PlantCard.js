const placeholderImg = "https://cdn-icons-png.flaticon.com/512/2909/2909763.png";

const PlantCard = ({ plant }) => (
  <div className="plant-card creative-card">
    <img
      src={plant.image || placeholderImg}
      alt={plant.name}
      className="plant-img"
      onError={e => { e.target.src = placeholderImg; }}
    />
    <h3>{plant.name}</h3>
    <p className="price">₹{plant.price}</p>
    <div className="categories">
      {plant.categories.map((cat, idx) => (
        <span key={idx} className={`badge badge-${cat.replace(/\s/g, '').toLowerCase()}`}>{cat}</span>
      ))}
    </div>
    <p className={`availability ${plant.available ? 'yes' : 'no'}`}>{plant.available ? 'Available' : 'Out of Stock'}</p>
  </div>
);

export default PlantCard;