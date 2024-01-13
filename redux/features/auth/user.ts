import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default userSlice.reducer;
