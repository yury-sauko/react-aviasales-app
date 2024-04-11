import { createAsyncThunk } from '@reduxjs/toolkit';

export default createAsyncThunk('searchId/fetchSearchId', async (_, { rejectWithValue }) => {
  try {
    const url = 'https://aviasales-test-api.kata.academy/search';
    const response = await fetch(`${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received status ${response.status}`);
    }

    const data = await response.json();

    return data.searchId;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
