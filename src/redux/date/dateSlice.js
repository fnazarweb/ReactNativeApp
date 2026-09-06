import { createSlice } from '@reduxjs/toolkit';

const today = new Date();
const dateString = `${today.getFullYear()}-${String(
  today.getMonth() + 1,
).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

const dateSlice = createSlice({
  name: 'date',
  initialState: { date: dateString },
  reducers: {
    changeData(state, action) {
      state.date = action.payload;
    },
  },
});

export const { changeData } = dateSlice.actions;
export default dateSlice.reducer;
