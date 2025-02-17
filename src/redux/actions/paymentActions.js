import { apiSlice } from "../../services/api";

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPayment: builder.mutation({
        query: (requestBody) => ({
            url: "/deposits/initiate_payment",
          method: "POST",
          body: { ...requestBody },
        }),
      }),
  

  }),
});

export const {
  useGetPaymentMutation,
} = paymentApiSlice;
