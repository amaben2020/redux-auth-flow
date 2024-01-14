"use client";
import Form from "@/components/form";
import { loginUser } from "@/redux/features/auth/services/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { toast } from "react-toastify";
export type TProfile = "student" | "school" | "teacher";
const RegisterPage = () => {
  const [selectedProfile, setSelectedProfile] = useState<TProfile>("school");

  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.user);
  console.log("USER", user);

  // use swr mutation to make post request

  const handleSendData = async (data: any) => {
    try {
      console.log(data);

      dispatch(loginUser(data));
    } catch (error) {
      console.log(error);
      toast.error("Registration failed");
    }
  };

  return (
    <div>
      Login Page
      <div className="py-5">
        <h2 className="my-3">
          You are creating account as a{" "}
          <span className="capitalize font-bold">{selectedProfile} </span>
        </h2>
        <Form handleSendData={handleSendData} mode="login" />
      </div>
    </div>
  );
};

export default RegisterPage;
