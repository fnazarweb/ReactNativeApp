import { getLatestStats, getStatsByDate } from './statsThunk';

const extraReducers = builder => {
  builder
    .addCase(getLatestStats.pending, state => {
      state.loading = true;
    })
    .addCase(getLatestStats.fulfilled, (state, action) => {
      state.loading = false;
      state.latestData = action.payload;
    })
    .addCase(getLatestStats.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })

    .addCase(getStatsByDate.pending, state => {
      state.loading = true;
    })
    .addCase(getStatsByDate.fulfilled, (state, action) => {
      state.loading = false;
      state.statsByDate = action.payload;
    })
    .addCase(getStatsByDate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};

export default extraReducers;
