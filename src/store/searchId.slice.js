import { createSlice } from '@reduxjs/toolkit';

import fetchSearchId from '../middlewares/fetchSearchId';

const initialState = {
  searchIdValue: null,
  statusSearchId: null,
  errorSearchId: null,
};

const searchIdSlice = createSlice({
  name: 'searchId',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.statusSearchId = 'loading';
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.statusSearchId = 'resolved';
        state.searchIdValue = action.payload;
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.statusSearchId = 'rejected';
        state.errorSearchId = action.payload;
      });
  },
});

export default searchIdSlice.reducer;
