import axios from 'axios';

// Dynamic API URL based on environment
const getApiUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_API_URL || '/api/plants';
  }
  return process.env.REACT_APP_API_URL || 'http://localhost:5000/api/plants';
};

const API_URL = getApiUrl();

export const fetchPlants = (params) => axios.get(API_URL, { params });
export const addPlant = (data) => axios.post(API_URL, data);
export const deletePlant = (id) => axios.delete(`${API_URL}/${id}`);
