import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'scores',
  initialState: [],
  reducers: {
    setAllData: (state, { payload }) => payload,
    setData: (state, { payload }) => {
      const item = state.find((x) => x.id === payload.id);
      item.score = payload.score;
    },
    addTeam: (state, { payload }) => [...state, payload],
    deleteTeam: (state, { payload }) => state.filter((x) => x.id !== payload),
    increase: (state, { payload }) => {
      const item = state.find((x) => x.id === payload.id);
      item.score += payload.score;
    },
    decrease: (state, { payload }) => {
      const item = state.find((x) => x.id === payload.id);
      item.score -= payload.score;
    }
  }
});

export default slice.reducer;

import {
  fetchData as _fetchData,
  addTeam as _addTeam,
  deleteTeam as _deleteTeam,
  increaseScore as _increaseScore,
  decreaseScore as _decreaseScore
} from '../API/scores';

export const fetchData = () => async (dispatch, getState) => {
  try {
    const response = await _fetchData();
    dispatch({ type: 'scores/setAllData', payload: response.data.data.scores });
  } catch (error) {
    return;
  }
};

export const addTeam = (name) => async (dispatch, getState) => {
  const token = getState().auth;
  try {
    const response = await _addTeam(name, token);
    dispatch({ type: 'scores/addTeam', payload: response.data.data.addTeam });
  } catch (error) {
    alert('Failed to add team.');
    return;
  }
};

export const deleteTeam = (id) => async (dispatch, getState) => {
  const token = getState().auth;
  try {
    const response = await _deleteTeam(id, token);
    console.log(response.data.data.deleteTeam.id);
    alert('Delete team succeed.');
    dispatch({ type: 'scores/deleteTeam', payload: response.data.data.deleteTeam.id });
  } catch (error) {
    console.log(error);
    alert('Failed to delete team.');
    return;
  }
};

export const increaseScore = (id, score) => async (dispatch, getState) => {
  const token = getState().auth;
  try {
    const response = await _increaseScore(id, score, token);
    dispatch({ type: 'scores/increase', payload: response.data.data.increaseScore });
  } catch (error) {
    alert('Failed to update the score.');
    return;
  }
};

export const decreaseScore = (id, score) => async (dispatch, getState) => {
  const token = getState().auth;
  try {
    const response = await _decreaseScore(id, score, token);
    dispatch({ type: 'scores/decrease', payload: response.data.data.decreaseScore });
  } catch (error) {
    alert('Failed to update the score.');
    return;
  }
};
