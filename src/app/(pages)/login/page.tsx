"use client";
import Form from "@/components/form";
import { loginUser } from "@/redux/features/auth/services/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export type TProfile = "student" | "school" | "teacher";
const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  console.log("USER", user);
  const router = useRouter();
  // use swr mutation to make post request

  const handleSendData = async (data: any) => {
    try {
      console.log(data);

      dispatch(loginUser(data));
      if (user.data.role.includes("school")) {
        router.push("/dashboard/school");
      }
      if (user.data.role.includes("student")) {
        router.push("/dashboard/student");
      }
      if (user.data.role.includes("teacher")) {
        router.push("/dashboard/teacher");
      }
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

export default RegisterPage;
