import { api_v1 } from './axios';

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

export default { editNav, getNav, deleteNav, addNav };
