import { apiSlice } from "../../services/api";

export const userProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.mutation({
      query: (requestBody) => ({
        url: "/users/get_user_by_token",
        method: "POST",
        body: { ...requestBody },
      }),
    }),

  }),
});

export const {
useGetUserProfileMutation
} = userProfileApiSlice;
