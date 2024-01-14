"use client";
import Form from "@/components/form";
import { userProfiles } from "@/constants/userProfile";
import { registerUser } from "@/redux/features/auth/services/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
export type TProfile = "student" | "school" | "teacher";
const RegisterPage = () => {
  const [selectedProfile, setSelectedProfile] = useState<TProfile>("school");
  const profiles = userProfiles;

  const router = useRouter();

  const handleProfileSelect = (profile: TProfile) => {
    setSelectedProfile(profile);
  };

  // use swr mutation to make post request

  const handleSendData = async (data: any) => {
    try {
      const { data: user } = await registerUser({
        ...data,
        role: selectedProfile,
      });

      if (user?.message === "user create success") {
        toast.success("Register success");
        router.push("/login");
      }

      if (user.message.includes("fail")) {
        toast.error("Register fail");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed");
    }
  };

  return (
    <div>
      RegisterPage
      <div className="flex gap-5">
        {profiles.map((profile) => (
          <button
            key={profile}
            className={twMerge(
              selectedProfile === profile &&
                "bg-white text-black border border-black",
              "rounded-lg p-3 border",
            )}
            onClick={() => handleProfileSelect(profile as TProfile)}
          >
            {profile}
          </button>
        ))}
      </div>
      <div className="py-5">
        {/* {selectedProfile === "school" && <div>SCHOOL</div>}
        {selectedProfile === "teacher" && <div>TEACHER</div>}
        {selectedProfile === "student" && <div>STUDENT</div>} */}

        <h2 className="my-3">
          You are creating account as a{" "}
          <span className="capitalize font-bold">{selectedProfile} </span>
        </h2>
        <Form handleSendData={handleSendData} />
      </div>
    </div>
  );
};

export default RegisterPage;
