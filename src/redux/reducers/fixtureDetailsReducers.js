import { createSlice } from '@reduxjs/toolkit';

const fixtureDetailsSlice = createSlice({
  name: 'fixturedetails',
  initialState: {
    fixturedetails: [],
    loading: false,
    error: null
  },
  reducers: {
    setFixtureDetails: (state, action) => {
      state.fixturedetails = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setFixtureDetails, setLoading, setError } = fixtureDetailsSlice.actions;
export default fixtureDetailsSlice.reducer;
export const selectFixtureDetails = (state) => state.fixturedetails.fixturedetails
