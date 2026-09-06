import { configureStore } from '@reduxjs/toolkit';
import statsSlice from './stats/statsSlice';
import dateSlice from './date/dateSlice';

export const store = configureStore({
  reducer: {
    stats: statsSlice,
    date: dateSlice,
  },
});
