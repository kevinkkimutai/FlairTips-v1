import { createSlice } from '@reduxjs/toolkit';

const publicPredictionsSlice = createSlice({
  name: 'publicpredictions',
  initialState: {
    publicpredictions: [],
    loading: false,
    error: null
  },
  reducers: {
    setPublicPredictions: (state, action) => {
      state.publicpredictions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setPublicPredictions, setLoading, setError } = publicPredictionsSlice.actions;
export default publicPredictionsSlice.reducer;
export const selectPublicPredictions = (state) => state.publicpredictions.publicpredictions
