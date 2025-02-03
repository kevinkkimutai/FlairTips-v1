import { apiSlice } from "../../services/api";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (requestBody) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...requestBody },
      }),
    }),
    loginUser: builder.mutation({
      query: (requestBody) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...requestBody },
      }),
    }),
    getAllUsers: builder.query({
      query: () => "/users",
    }),
 
    getUserById: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
    getCurrentUser: builder.mutation({
      query: (requestBody) => ({
        url: "/users/get_user_by_token",
        method: "POST",
        body: { ...requestBody },
      }),
    }),
    getUser: builder.query({
      query: () => "/currentuser",
     
    }),

    updateUserById: builder.mutation({
      query: ({ userData }) => ({
        url: `/users/update_user_details`,
        method: "PUT",
        body: { ...userData },
      }),
    }),
  deleteUserById: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
    }),
    forgetPassword: builder.mutation({
      query: (requestBody ) => ({
        url: "/auth/forgot_password",
        method: "POST",
        body: { ...requestBody },
      }),
    }),
    
    resetPassword: builder.mutation({
      query: (requestBody) => ({
        url: "/auth/reset_password",
        method: "POST",
        body: { ...requestBody },
      }),
    }),
  
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),

  }),
});

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUserQuery,
  useGetCurrentUserMutation,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation,
} = userApiSlice;
