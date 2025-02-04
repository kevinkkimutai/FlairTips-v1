import { createSlice } from '@reduxjs/toolkit';

const CountriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    loading: false,
    error: null
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setCountries, setLoading, setError } = CountriesSlice.actions;
export default CountriesSlice.reducer;
export const selectCountries = (state) => state.countries.countries
