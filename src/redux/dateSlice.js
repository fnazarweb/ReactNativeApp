import { createSlice } from '@reduxjs/toolkit';
const dateSlice = createSlice({
  name: 'date',
  initialState: {},
  reducers: {
    changeData(state, action) {
      state.date = action.payload;
    },
  },
});

export const { changeData } = dateSlice.actions;
export default dateSlice.reducer;
