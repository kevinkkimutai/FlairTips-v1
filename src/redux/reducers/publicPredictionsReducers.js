import { createSlice } from "@reduxjs/toolkit";

const publicPredictionsSlice = createSlice({
  name: "publicpredictions",
  initialState: {
    publicpredictions: [], // Store data from each page as an array of objects
    loading: false,
    error: null,
  },
  reducers: {
    setPublicPredictions: (state, action) => {
      const { publicpredictions, page } = action.payload;

      // Ensure publicpredictions is always an object
      const newData = publicpredictions && typeof publicpredictions === "object" ? publicpredictions : {};

      if (page === 1) {
        // Reset when loading the first page
        state.publicpredictions = [newData]; // Store the first page's data as the first item in the array
      } else {
        // Append the new data as a new object in the array
        state.publicpredictions.push(newData);
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPublicPredictions, setLoading, setError } = publicPredictionsSlice.actions;
export default publicPredictionsSlice.reducer;
export const selectPublicPredictions = (state) => state.publicpredictions.publicpredictions;