import { api_v1 } from './axios';

export const fetchData = () => api_v1.post('/', { query: 'query { basic { key value } }' });

export default { fetchData };
