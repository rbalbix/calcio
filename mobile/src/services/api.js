import axios from 'axios';
import dbConfig from '../config/baseUrl.json';

const api = axios.create({
  baseURL: dbConfig.baseURL,
});

export default api;
