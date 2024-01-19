import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );

    return response.data;
  } catch (error) {
    if (error instanceof Error) return error?.message;
  }
});
