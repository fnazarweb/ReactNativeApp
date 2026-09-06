import { createSlice } from '@reduxjs/toolkit';
const statsSlice = createSlice({
  name: 'stats',
  initialState: {},
  reducers: {
    addStats(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addStats } = statsSlice.actions;
export default statsSlice.reducer;
