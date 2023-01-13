import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'basic',
  initialState: {
    HOME_TITLE: 'NPTU CSAI Winter Camp',
    HOME_FONT_SIZE: '2rem',
    HOME_TITLE_SIZE: '1.6em',
    HOME_NAV_SIZE: '1em'
  },
  reducers: {
    setData: (state, { payload }) => {}
  }
});

export default slice.reducer;

import { fetchData } from '../API/basic';

export const fetchBasic = () => async (dispatch, getState) => {
  try {
    const {
      data: { data }
    } = await fetchData();
    console.log(data);
  } catch (error) {
    return;
  }
};
