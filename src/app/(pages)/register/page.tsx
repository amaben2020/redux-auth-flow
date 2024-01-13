"use client";
import Form from "@/components/form";
import { userProfiles } from "@/constants/userProfile";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
type TProfile = "student" | "school" | "teacher";
const RegisterPage = () => {
  const [selectedProfile, setSelectedProfile] = useState<TProfile>("school");
  const profiles = userProfiles;

  const handleProfileSelect = (profile: TProfile) => {
    setSelectedProfile(profile);
  };

  const handleSendData = () => {
    // make api call to extraReducer
    // display toast
    // display loading spinner
    // direct to dashboard which is gonna be an authenticated route
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
