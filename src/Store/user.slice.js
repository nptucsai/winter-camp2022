import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    setUser: (state, { payload }) => payload,
    removeUser: (state, { payload: { id } }) => state.filter((x) => x.id !== id),
    pushUser: (state, { payload }) => [...state, payload]
  }
});

export default slice.reducer;

// Actions
import { getUser, removeUser as _removeUser, addUser as _addUser } from '../API/user';

export const fetchUser = () => async (dispatch, getState) => {
  const token = getState().auth;

  try {
    const response = await getUser(token);
    dispatch({ type: 'user/setUser', payload: response.data.data.user });
  } catch (error) {
    return;
  }
};

export const removeUser = (id) => async (dispatch, getState) => {
  const state = getState();

  if (state.user.length <= 1) {
    alert('You must reserve at least one user.');
    return;
  }

  const token = getState().auth;

  try {
    const response = await _removeUser(id, token);
    dispatch({ type: 'user/removeUser', payload: response.data.data.removeUser });
    alert('Delete Succeed.');
  } catch (error) {
    alert('Failed to delete user.');
  }
};

export const addUser = (name, password) => async (dispatch, getState) => {
  const token = getState().auth;

  try {
    const response = await _addUser(name, password, token);
    dispatch({ type: 'user/pushUser', payload: response.data.data.addUser });
  } catch (error) {
    return;
  }
};
