import { createSlice } from '@reduxjs/toolkit';
import fetchPackOfTickets from '../middlewares/fetchPackOfTickets';

const initialState = {
  ticketsArr: [],
  ticketsForRender: 5,
  isGettingFinished: false,
  statusTicketsReceipt: null,
  errorTicketsReceiptArr: [],
  errorFetchCount: 0,
  successFetchCount: 0,
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPackOfTickets.pending, (state) => {
        state.statusTicketsReceipt = 'loading';
      })
      .addCase(fetchPackOfTickets.fulfilled, (state, action) => {
        state.statusTicketsReceipt = 'resolved';
        state.successFetchCount += 1;
        state.ticketsArr = [...state.ticketsArr, ...action.payload.tickets];
        state.isGettingFinished = action.payload.stop;
      })
      .addCase(fetchPackOfTickets.rejected, (state, action) => {
        state.statusTicketsReceipt = 'rejected';
        state.errorTicketsReceiptArr.push(action.payload);
        state.errorFetchCount += 1;
      });
  },
});

export default ticketsSlice.reducer;
