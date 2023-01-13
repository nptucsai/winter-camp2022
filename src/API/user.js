import { api_v1 } from './axios';

export const getUser = (token) =>
  api_v1.post('/', { query: 'query { user { id name } }' }, { headers: { Authorization: token } });

export const removeUser = (id, token) =>
  api_v1.post(
    '/',
    { query: `mutation { removeUser(id: "${id}") { id } }` },
    { headers: { Authorization: token } }
  );
export const addUser = (name, password, token) =>
  api_v1.post(
    '/',
    {
      query: `mutation { addUser(name: "${name}", password: "${password}") { id name } }`
    },
    { headers: { Authorization: token } }
  );

export default { getUser, removeUser, addUser };
