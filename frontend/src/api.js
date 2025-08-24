import axios from 'axios';
const API_URL = 'http://192.168.1.8:5000/api/plants';

export const fetchPlants = (params) => axios.get(API_URL, { params });
export const addPlant = (data) => axios.post(API_URL, data);
export const deletePlant = (id) => axios.delete(`${API_URL}/${id}`);
