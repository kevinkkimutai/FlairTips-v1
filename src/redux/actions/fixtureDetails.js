import { apiSlice } from "../../services/api";

export const fixtureDetailsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFixtureDetails: builder.mutation({
        query: (requestBody) => ({
            url: "/fixtures/fixture_details",
          method: "POST",
          body: { ...requestBody },
        }),
      }),
  

  }),
});

export const {
  useGetFixtureDetailsMutation,
} = fixtureDetailsApiSlice;
