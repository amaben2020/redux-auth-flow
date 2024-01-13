import { useForm } from "react-hook-form";

const Form = ({ handleSendData }: { handleSendData: () => void }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit(handleSendData)}
      className="flex flex-col gap-y-5 w-[400px]"
    >
      <input
        className="p-2 rounded-lg text-black"
        type="text"
        {...register("username")}
        name="username"
      />
      <input
        className="p-2 rounded-lg text-black"
        type="email"
        {...register("email")}
        name="email"
      />
      <input
        className="p-2 rounded-lg text-black"
        type="password"
        {...register("password")}
        name="password"
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
