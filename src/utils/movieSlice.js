import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "movies",
  initialState: {},
  reducers: {
    addNowPlayingMovies: (state, action) => {
      return action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addNowPlayingMovies } = userSlice.actions;
