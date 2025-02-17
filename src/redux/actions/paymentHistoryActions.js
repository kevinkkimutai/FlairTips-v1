import { apiSlice } from "../../services/api";

export const paymentHistoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentHistory: builder.mutation({
        query: (requestBody) => ({
            url: "/deposits/get_my_recent_payments",
          method: "POST",
          body: { ...requestBody },
        }),
      }),
  

  }),
});

export const {
  useGetPaymentHistoryMutation,
} = paymentHistoryApiSlice;
