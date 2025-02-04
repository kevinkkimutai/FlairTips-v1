import { apiSlice } from "../../services/api";

export const countriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCountries: builder.mutation({
        query: (countryRequestBody) => ({
            url: "/fixtures/event_countries",
          method: "POST",
          body: { ...countryRequestBody },
        }),
      }),
  

  }),
});

export const {
  useGetCountriesMutation,
} = countriesApiSlice;
