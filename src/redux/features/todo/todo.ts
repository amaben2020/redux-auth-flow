import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState, 
  extraReducers: (builder) => {
    builder.addCase()
  }

})