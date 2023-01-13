import { api_v2 } from './axios';

export const verifyToken = (token) =>
  api_v2.post('/auth/verify', {}, { headers: { Authorization: token } });

export const login = (name, password) => api_v2.post('/auth/login', { name, password });

export default { verifyToken, login };
