import axios from 'axios';

// API URL configuration for different environments
const getApiUrl = () => {
  // Production: Use environment variable or fallback to Vercel backend
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_API_URL || '/api/plants';
  }
  // Development: Use environment variable or fallback to localhost
  return process.env.REACT_APP_API_URL || 'http://localhost:5000/api/plants';
};

const API_URL = getApiUrl();

console.log('API URL:', API_URL); // Debug log

export const fetchPlants = (params) => axios.get(API_URL, { params });
export const addPlant = (data) => axios.post(API_URL, data);
export const deletePlant = (id) => axios.delete(`${API_URL}/${id}`);
