import { createSlice } from '@reduxjs/toolkit';

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    subscription: [],
    loading: false,
    error: null
  },
  reducers: {
    setSubscription: (state, action) => {
      state.subscription = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setSubscription, setLoading, setError } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
export const selectSubscription = (state) => state.subscription.subscription
