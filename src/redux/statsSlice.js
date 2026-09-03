import { createSlice } from '@reduxjs/toolkit';
const statsSlice = createSlice({
  name: 'stats',
  initialState: [],
  reducers: {
    addStats(state, action) {
      const item = action.payload;
      state.push(item);
      console.log('addStats', item);
    },
  },
});

export const { addStats } = statsSlice.actions;
export default statsSlice.reducer;
