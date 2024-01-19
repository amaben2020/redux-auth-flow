import { loginSchema } from "@/app/api/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Form = ({
  handleSendData,
  mode,
}: {
  handleSendData: (data: any) => void;
  mode?: "login" | "register";
}) => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit(handleSendData)}
      className="flex flex-col gap-y-5 w-[500px]"
    >
      {mode !== "login" && (
        <input
          className="p-2 rounded-lg text-black"
          type="text"
          {...register("username")}
          name="username"
          placeholder="username"
        />
      )}
      <input
        className="p-2 rounded-lg text-black"
        type="email"
        {...register("email")}
        name="email"
        placeholder="email"
      />
      <input
        className="p-2 rounded-lg text-black"
        type="password"
        {...register("password")}
        name="password"
        placeholder="password"
      />

      <button type="submit">{mode === "login" ? "Login" : "Register"}</button>
    </form>
  );
};

export default Form;
