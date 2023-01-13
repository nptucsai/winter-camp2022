import axios from 'axios';

const mode = import.meta.env.MODE;

const graphql = mode === 'production' ? '/api/v1' : 'http://localhost:5100/api/v1';
const restful = mode === 'production' ? '/api/v2' : 'http://localhost:5100/api/v2';

export const api_v1 = axios.create({
  baseURL: graphql,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
});

export const api_v2 = axios.create({
  baseURL: restful
});
