"use client";
import Form from "@/components/form";
import { redirectBasedOnRole } from "@/redux/features/auth/services/helpers";
import { loginUser } from "@/redux/features/auth/services/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
export type TProfile = "student" | "school" | "teacher";
const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const router = useRouter();
  // use swr mutation to make post request

  useEffect(() => {
    redirectBasedOnRole(user, router);
  }, [router, user]);

  const handleSendData = async (data: any) => {
    try {
      dispatch(loginUser(data));
      redirectBasedOnRole(user, router);
    } catch (error) {
      console.log(error);
      toast.error("Registration failed");
    }
  };
  const { data, mutate } = useSWR("/api/user", handleSendData);
  console.log(data);

  return (
    <div>
      Login Page
      <div className="py-5">
        <Form handleSendData={mutate} mode="login" />
      </div>
    </div>
  );
};

export default RegisterPage;
