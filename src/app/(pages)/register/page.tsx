"use client";
import Form from "@/components/form";
import { userProfiles } from "@/constants/userProfile";
import { useState } from "react";
type TProfile = "student" | "school" | "teacher";
const RegisterPage = () => {
  const [selectedProfile, setSelectedProfile] = useState<TProfile>("school");
  const profiles = userProfiles;

  const handleProfileSelect = (profile: TProfile) => {
    setSelectedProfile(profile);
  };

  const handleSendData = () => {};

  return (
    <div>
      RegisterPage
      <div className="flex gap-5">
        {profiles.map((profile) => (
          <button
            key={profile}
            className="rounded-lg p-3 border"
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

        <Form handleSendData={handleSendData} />
      </div>
    </div>
  );
};

export default RegisterPage;
