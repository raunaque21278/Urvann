import PlantCard from './PlantCard';

const PlantList = ({ plants }) => (
  <div className="plant-grid">
    {plants.map(plant => <PlantCard key={plant._id} plant={plant} />)}
  </div>
);

export default PlantList;