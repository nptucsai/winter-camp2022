import axios from 'axios';

const graphql = 'http://localhost:5100/api/v1';

export const api_v1 = axios.create({
  baseURL: graphql,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
});

export const getNav = () => api_v1.post('/', { query: '{ nav { id label url } }' });
