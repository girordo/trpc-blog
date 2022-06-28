import { router } from "@trpc/server";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../schema/user.schema";
import { trpc } from "../utils/trpc";

function RegisterPage() {
  const { handleSubmit, register } = useForm<CreateUserInput>();

  const { mutate, error } = trpc.useMutation(["usersregister-user"], {
    onError: (error) => {},
    onSuccess: () => {
      router.push("/login");
    },
  });

  function onSubmit(values: CreateUserInput) {
    mutate(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <input
          type="email"
          placeholder="john.doe@example.com"
          {...register("email")}
        />
        <input type="text" placeholder="John" {...register("name")} />
        <button>Register</button>
      </form>
      <Link href="/login">Login</Link>
    </>
  );
}

export default RegisterPage;
