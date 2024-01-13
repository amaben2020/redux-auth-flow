import { useForm } from "react-hook-form";

const Form = ({ role }: { role: string }) => {
  const { register } = useForm();
  return (
    <form>
      <input type="text" {...register("username")} name="username" />
      <input type="email" {...register("email")} name="email" />
      <input type="password" {...register("password")} name="password" />

      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
