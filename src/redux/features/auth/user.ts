import { TProfile } from "@/app/(pages)/register/page";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./services/user";

type TUserData = {
  _id: string;
  username: string;
  role: TProfile;
  email: string;
  token: string;
};
type TUser = {
  data: TUserData;
  loading: "loading" | "idle";
  error: string | undefined;
};

const initialState: TUser = {
  data: { _id: "", username: "", role: "school", email: "", token: "" },
  loading: "loading",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      //   "user": {
      //     "_id": "65a2d5c9de925f83b94c146d",
      //     "username": "algobosss",
      //     "email": "amaben2@gmail.comm",
      //     "role": "student",
      //     "createdAt": "2024-01-13T18:26:17.772Z",
      //     "updatedAt": "2024-01-13T18:26:17.772Z",
      //     "__v": 0,
      //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsZ29ib3NzcyIsImVtYWlsIjoiYW1hYmVuMkBnbWFpbC5jb21tIiwiaWQiOiI2NWEyZDVjOWRlOTI1ZjgzYjk0YzE0NmQiLCJpYXQiOjE3MDUxNzIwMjF9.HIhmXVugzhjxx3xU-s5kEZ1S1EFpLRsXkcXwOWqDujw"
      // }
      // action should just be the user
      const { _id, username, role, email, token } = action.payload?.data.user;
      console.log("STATE", state);
      console.log(action);
      state.data = { _id, username, role, email, token };

      state.loading = "idle";
      console.log("after state", state);
    });
  },
});

export default userSlice.reducer;
