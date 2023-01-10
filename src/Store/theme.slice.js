import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'theme',
  initialState: () => {
    const location = window.localStorage.getItem('THEME');
    if (typeof location === 'string') return location;

    window.localStorage.setItem('THEME', 'auto');
    return 'auto';
  },
  reducers: {
    switchTheme(state, _) {
      let mode;
      if (state === 'auto') mode = 'light';
      if (state === 'light') mode = 'dark';
      if (state === 'dark') mode = 'auto';

      window.localStorage.setItem('THEME', mode);
      return mode;
    }
  }
});

export default slice.reducer;
export const { switchTheme } = slice.actions;
