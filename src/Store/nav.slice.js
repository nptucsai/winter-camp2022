import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNav } from '../API';

const slice = createSlice({
  name: 'nav',
  initialState: [],
  reducers: {
    setData: (state, { payload }) => {
      return payload;
    },
    deleteNav: (state, { payload }) => {
      return state.filter((x) => x.id !== payload.id);
    },
    pushNav: (state, { payload }) => {
      return [...state, payload];
    }
  }
});

export default slice.reducer;

import { deleteNav as _deleteNav, addNav as _addNav } from '../API';

export const fetchNavData = () => async (dispatch, _) => {
  const response = await getNav();
  dispatch({ type: 'nav/setData', payload: response.data.data.nav });
};

export const deleteNav = (id) => async (dispatch, getState) => {
  const token = getState().auth;

  try {
    const response = await _deleteNav(id, token);

    dispatch({ type: 'nav/deleteNav', payload: { id: response.data.data.deleteNav.id } });
    alert('Delete Succeed.');
  } catch (error) {
    alert('Failed to delete the item.');
  }
};

export const addNav = (label, url) => async (dispatch, getState) => {
  const token = getState().auth;

  try {
    const response = await _addNav(label, url, token);
    dispatch({ type: 'nav/pushNav', payload: { ...response.data.data.addNav } });
  } catch (error) {
    alert('Failed to add the item.');
  }
};
