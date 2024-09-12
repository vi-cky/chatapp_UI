import axios from 'axios';

// Create an instance of Axios with default configuration
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Set base URL for API calls
  timeout: 1000,
});

export default api;
