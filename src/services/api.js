// services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";


const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.flairtips.com/api/v1/",
  // baseUrl:"https://shoe-lnwb.onrender.com/v1/",
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth.access_token;
    const token = Cookies.get("access_token");
  // const token = request.cookies.get("access_token")?.value;

    console.log("token: " + token);
    
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    const refreshToken = api.getState().auth.access_token;
    if (refreshToken) {
      // Implement your refresh token logic here
      // Example: const refreshResult = await baseQuery("/refresh", api, extraOptions);
      // If refresh is successful, update credentials
      api.dispatch(setCredentials({ token: token }));
      result = await baseQuery(args, api, extraOptions); 
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export const {

} = apiSlice;
