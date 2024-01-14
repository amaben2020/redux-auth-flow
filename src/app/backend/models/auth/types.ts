import { TProfile } from "@/app/(pages)/register/page";

export interface IUserCredentials {
  email: string;
  username: string;
  role: TProfile;
  password: string;
}
