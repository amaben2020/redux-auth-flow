import { ENDPOINTS, api } from "@/app/base/api/api";

export const registerUser = async () => {
  return await api.get(ENDPOINTS.register);
};
