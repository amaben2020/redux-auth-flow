import { IUserCredentials } from "@/app/backend/models/auth/types";
import { ENDPOINTS, api } from "@/app/base/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: Pick<IUserCredentials, "email" | "password">) => {
    return await api.post(ENDPOINTS.register);
  },
);

export const registerUser = async ({
  email,
  password,
  username,
  role,
}: IUserCredentials) => {
  return await api.post("");
};
