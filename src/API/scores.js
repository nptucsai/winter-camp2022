import { api_v1 } from './axios';

export const fetchData = () => api_v1.post('/', { query: 'query { scores { id team score } }' });
export const addTeam = (name, token) =>
  api_v1.post(
    '/',
    {
      query: `mutation { addTeam (name: "${name}") { id team score } }`
    },
    { headers: { Authorization: token } }
  );
export const deleteTeam = (id, token) =>
  api_v1.post(
    '/',
    {
      query: `mutation { deleteTeam (id: "${id}") { id } }`
    },
    { headers: { Authorization: token } }
  );
export const increaseScore = (id, score, token) =>
  api_v1.post(
    '/',
    {
      query: `mutation { increaseScore (id: "${id}", score: ${score}) { id score } }`
    },
    { headers: { Authorization: token } }
  );

export const decreaseScore = (id, score, token) =>
  api_v1.post(
    '/',
    {
      query: `mutation { decreaseScore (id: "${id}", score: ${score}) { id score } }`
    },
    { headers: { Authorization: token } }
  );
