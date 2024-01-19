"use client";
import LoginForm from "@/components/form/login";
import { redirectBasedOnRole } from "@/redux/features/auth/services/helpers";
import { loginUser } from "@/redux/features/auth/services/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export type TProfile = "student" | "school" | "teacher";
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const router = useRouter();
  //TODO: use swr mutation to make post request

  const handleSendData = async (data: any) => {
    try {
      dispatch(loginUser(data));
      redirectBasedOnRole(user, router);
    } catch (error) {
      console.log(error);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="flex mx-auto flex-col items-center border rounded-lg p-10">
      Login Page
      <div className="py-5">
        <LoginForm handleSendData={handleSendData} />
      </div>
    </div>
  );
};

export default LoginPage;
