import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: () => {
    const location = window.localStorage.getItem('AUTH_TOKEN');
    if (typeof location === 'string') return location;

    return null;
  },
  reducers: {
    setToken: (state, { payload }) => {
      window.localStorage.setItem('AUTH_TOKEN', payload);
      return payload;
    },
    revokeToken: (state, _) => {
      window.localStorage.removeItem('AUTH_TOKEN');
      return null;
    }
  }
});

export default slice.reducer;

// Actions
import { verifyToken as _verifyToken, login as _login } from '../API';

export const verifyToken = () => async (dispatch, getItem) => {
  const token = getItem().auth;

  if (token === null) return;
  try {
    const response = await _verifyToken(token);

    dispatch({ type: 'auth/setToken', payload: response.data });
  } catch (error) {
    dispatch({ type: 'auth/revokeToken' });
  }
};

export const login = (name, password) => async (dispatch, _) => {
  try {
    const response = await _login(name, password);
    dispatch({ type: 'auth/setToken', payload: response.data });
  } catch ({ response }) {
    alert(response.data);
  }
};

export const { revokeToken } = slice.actions;
