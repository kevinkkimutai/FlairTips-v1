import { apiSlice } from "../../services/api";

export const publicPredictionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicPredictions: builder.mutation({
        query: (requestBody) => ({
            url: "/fixtures/get_fixtures",
          method: "POST",
          body: { ...requestBody },
        }),
      }),
  

  }),
});

export const {
  useGetPublicPredictionsMutation,
} = publicPredictionsApiSlice;
