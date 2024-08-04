import AuthLayout from "@/components/Auth/AuthLayout";
import CustomFormField from "@/components/shared/CustomFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LoginUser } from "@/interfaces/user";
import useStore from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({
      message: "Email address is required",
    })
    .email({
      message: "Please provide a valid email address",
    }),
  password: z
    .string({
      message: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    }),
});

const Login = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data: LoginUser) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <h2 className="mb-2 text-3xl font-bold text-gray-800 sm:text-[34px]">
        Log in
      </h2>
      <p className="mb-5 text-[15px] text-gray-500 sm:text-base lg:mb-10">
        Don't have an account?{" "}
        <Link
          className="text-blue-500 underline hover:no-underline"
          to="/signup"
        >
          Sign up
        </Link>
      </p>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(handleLogin)}>
          <CustomFormField
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            formControl={form.control}
            disabled={false}
          />
          <CustomFormField
            name="password"
            label="Password"
            placeholder="Enter your password"
            formControl={form.control}
            disabled={false}
          />
          <Button
            className="w-full bg-secondary py-6 hover:bg-secondary/90"
            type="submit"
          >
            Log in
          </Button>
        </form>
      </Form>
      <div className="mt-3 text-right">
        <Link
          to="/forgot-password"
          className="text-[15px] text-blue-500 underline hover:no-underline"
        >
          Forgot Password?
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
