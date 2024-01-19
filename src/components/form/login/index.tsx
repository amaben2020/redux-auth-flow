import { loginSchema } from "@/app/api/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
const LoginForm = ({
  handleSendData,
}: {
  handleSendData: (data: any) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(handleSendData)}
      className="flex flex-col gap-y-5 w-[500px]"
    >
      <input
        className={twMerge(
          errors.email && "text-red-600 border-2 border-red-600",
          "p-2 rounded-lg text-black",
        )}
        type="email"
        {...register("email")}
        name="email"
        placeholder="email"
      />
      <input
        className={twMerge(
          errors.email && "text-red-600 border-2 border-red-600",
          "p-2 rounded-lg text-black",
        )}
        type="password"
        {...register("password")}
        name="password"
        placeholder="password"
      />

      <button
        type="submit"
        className="button-base"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
