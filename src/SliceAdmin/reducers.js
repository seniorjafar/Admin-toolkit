import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collapsed: true,
  text: '',
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { toggleCollapsed, setText } = rootSlice.actions;
export default rootSlice.reducer;