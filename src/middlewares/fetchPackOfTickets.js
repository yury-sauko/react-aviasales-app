import { createAsyncThunk } from '@reduxjs/toolkit';

export default createAsyncThunk(
  'tickets/fetchPackOfTickets',
  async (searchId, { rejectWithValue }) => {
    try {
      const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;
      const response = await fetch(`${url}`);

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, received status ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
