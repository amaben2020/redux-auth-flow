"use client";
import Form from "@/components/form";
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
  // use swr mutation to make post request

  // useEffect(() => {
  //   redirectBasedOnRole(user, router);
  // }, [router, user]);

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
    <div>
      Login Page
      <div className="py-5">
        <Form handleSendData={handleSendData} mode="login" />
      </div>
    </div>
  );
};

export default LoginPage;
