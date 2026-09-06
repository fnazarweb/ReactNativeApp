import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './extraReducers';

const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    loading: false,
    latestData: null,
    statsByDate: null,
    error: null,
  },
  extraReducers: extraReducers,
});

export default statsSlice.reducer;
