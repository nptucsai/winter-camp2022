import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNav } from '../API';

const slice = createSlice({
  name: 'nav',
  initialState: [],
  reducers: {
    setData: (state, { payload }) => {
      return payload;
    }
  }
});

export default slice.reducer;

export const fetchNavData = () => async (dispatch, _) => {
  const response = await getNav();
  dispatch({ type: 'nav/setData', payload: response.data.data.nav });
};
