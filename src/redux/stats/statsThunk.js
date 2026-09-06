import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getLatestStats = createAsyncThunk(
  'stats/getLatestStats',
  async () => {
    const response = await axios.get(
      'https://russianwarship.rip/api/v2/statistics/latest',
    );
    return response.data;
  },
);

//date should be in format "YYYY-MM-DD"
export const getStatsByDate = createAsyncThunk(
  'stats/getStatsByDate',
  async date => {
    const response = await axios.get(
      `https://russianwarship.rip/api/v2/statistics/${date}`,
    );
    return response.data;
  },
);
