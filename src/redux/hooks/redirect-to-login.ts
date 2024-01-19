import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRedirectToLogin = (user: { data: { token: string } }) => {
  //TODO: implement this hook to work fine
  const router = useRouter();
  useEffect(() => {
    if (!user.data.token) {
      router.push("/login");
    }
  }, [router, user?.data.token]);
};

export default useRedirectToLogin;
