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
  reducers: {
    logoutUser: (state) => {
      state.data = {
        _id: "",
        username: "",
        role: "school",
        email: "",
        token: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(loginUser.fulfilled, (state, action: any) => {
      const { _id, username, role, email, token } = action.payload?.data?.user;

      state.data = { _id, username, role, email, token };

      state.loading = "idle";
    });
  },
});

export default userSlice.reducer;

export const { logoutUser } = userSlice.actions;
