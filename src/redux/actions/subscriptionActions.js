import { apiSlice } from "../../services/api";

export const subscriptionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubscription: builder.mutation({
        query: (requestBody) => ({
            url: "/billing/get_subscription_status",
          method: "POST",
          body: { ...requestBody },
        }),
      }),
  

  }),
});

export const {
  useGetSubscriptionMutation,
} = subscriptionApiSlice;
