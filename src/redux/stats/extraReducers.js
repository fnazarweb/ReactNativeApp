import { getLatestStats, getStatsByDate } from './statsThunk';

const extraReducers = builder => {
  builder
    .addCase(getLatestStats.pending, state => {
      state.loadingLatest = true;
    })
    .addCase(getLatestStats.fulfilled, (state, action) => {
      state.loadingLatest = false;
      state.latestData = action.payload;
    })
    .addCase(getLatestStats.rejected, (state, action) => {
      state.loadingLatest = false;
      state.error = action.error.message;
    })

    .addCase(getStatsByDate.pending, state => {
      state.loadingByDate = true;
    })
    .addCase(getStatsByDate.fulfilled, (state, action) => {
      state.loadingByDate = false;
      state.statsByDate = action.payload;
    })
    .addCase(getStatsByDate.rejected, (state, action) => {
      state.loadingByDate = false;
      state.error = action.error.message;
    });
};

export default extraReducers;
