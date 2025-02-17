import { createSlice } from '@reduxjs/toolkit';

const paymentHistorySlice = createSlice({
  name: 'paymenthistory',
  initialState: {
    paymenthistory: [],
    loading: false,
    error: null
  },
  reducers: {
    setPaymentHistory: (state, action) => {
      state.paymenthistory = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setPaymentHistory, setLoading, setError } = paymentHistorySlice.actions;
export default paymentHistorySlice.reducer;
export const selectPaymentHistory = (state) => state.paymenthistory.paymenthistory
