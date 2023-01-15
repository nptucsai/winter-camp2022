import { api_v1 } from './axios';

export const fetchData = () => api_v1.post('/', { query: 'query { basic { key value } }' });
export const setBasic = (data, token) =>
  api_v1.post(
    '/',
    {
      query: `
        mutation ChangeBasic($payload: [basicInput]) {
          changeBasic(data: $payload) {
            key value
          }
        }`,
      variables: JSON.stringify({ payload: data })
    },
    { headers: { Authorization: token } }
  );

export default { fetchData };
