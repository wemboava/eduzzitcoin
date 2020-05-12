import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-api.devzz.ninja',
});

export default api;
