import { createSlice } from '@reduxjs/toolkit';

const PaymentSlice = createSlice({
  name: 'payment',
  initialState: {
    payment: [],
    loading: false,
    error: null
  },
  reducers: {
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setPayment, setLoading, setError } = PaymentSlice.actions;
export default PaymentSlice.reducer;
// export const selectPayment = (state) => state.payment.payment
