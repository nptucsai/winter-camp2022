import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'basic',
  initialState: {
    HOME_TITLE: 'NPTU CSAI Winter Camp',
    HOME_FONT_SIZE: '2rem',
    HOME_TITLE_SIZE: '1.6em',
    HOME_NAV_SIZE: '1em',
    HOME_EXTRA_STYLE: ''
  },
  reducers: {
    setData: (state, { payload }) => Object.assign(state, payload)
  }
});

export default slice.reducer;

import { fetchData, setBasic as _setBasic } from '../API/basic';

export const fetchBasic = () => async (dispatch, getState) => {
  try {
    const {
      data: {
        data: { basic }
      }
    } = await fetchData();

    const payload = basic.reduce((obj, { key, value }) => ({ ...obj, [key]: value }), {});
    dispatch({ type: 'basic/setData', payload });
  } catch (error) {
    console.log(error);
    return;
  }
};

export const setBasic = (data) => async (dispatch, getState) => {
  const token = getState().auth;
  try {
    const {
      data: {
        data: { changeBasic: temp }
      }
    } = await _setBasic(data, token);

    const payload = temp.reduce((obj, { key, value }) => ({ ...obj, [key]: value }), {});

    dispatch({ type: 'basic/setData', payload });
  } catch (error) {
    console.log(error);
    alert('Failed to update the item.');
  }
};
