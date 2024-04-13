import { createSlice } from '@reduxjs/toolkit';

import fetchPackOfTickets from '../middlewares/fetchPackOfTickets';

const initialState = {
  ticketsArr: [],
  sortedTicketsArr: [],
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

  reducers: {
    changeticketsForRender: (state) => {
      state.ticketsForRender += 5;
    },
    addSortedTicketsArr: (state, action) => {
      state.sortedTicketsArr = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPackOfTickets.pending, (state) => {
        state.statusTicketsReceipt = 'loading';
      })
      .addCase(fetchPackOfTickets.fulfilled, (state, action) => {
        state.statusTicketsReceipt = 'resolved';
        state.successFetchCount += 1;
        state.ticketsArr.push(...action.payload.tickets);
        state.isGettingFinished = action.payload.stop;
      })
      .addCase(fetchPackOfTickets.rejected, (state, action) => {
        state.statusTicketsReceipt = 'rejected';
        state.errorTicketsReceiptArr.push(action.payload);
        state.errorFetchCount += 1;
      })

      .addMatcher(
        (action) => action.type.endsWith('Tr'),
        (state) => {
          state.ticketsForRender = 5;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('Btn'),
        (state) => {
          state.ticketsForRender = 5;
        },
      );
  },
});

export const { changeticketsForRender, addSortedTicketsArr } = ticketsSlice.actions;

export default ticketsSlice.reducer;
