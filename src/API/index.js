import axios from 'axios';

const graphql = 'http://localhost:5100/api/v1';
const restful = 'http://localhost:5100/api/v2';

export const api_v1 = axios.create({
  baseURL: graphql,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
});

export const api_v2 = axios.create({
  baseURL: restful
});

export const getNav = () => api_v1.post('/', { query: '{ nav { id label url } }' });
export const deleteNav = (id, token) =>
  api_v1.post(
    '/',
    { query: `mutation { deleteNav(id: "${id}") { id } }` },
    { headers: { Authorization: token } }
  );
export const addNav = (label, url, token) =>
  api_v1.post(
    '/',
    {
      query: `mutation { addNav(url: "${url}", label: "${label}") { id label url } }`
    },
    { headers: { Authorization: token } }
  );
export const editNav = (id, label, url, token) =>
  api_v1.post(
    '/',
    {
      query: `mutation { editNav(id: "${id}", url: "${url}", label: "${label}") { id label url } }`
    },
    { headers: { Authorization: token } }
  );

export const verifyToken = (token) =>
  api_v2.post('/auth/verify', {}, { headers: { Authorization: token } });

export const login = (name, password) => api_v2.post('/auth/login', { name, password });
