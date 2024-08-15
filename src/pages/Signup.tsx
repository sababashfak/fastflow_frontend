import { signup } from "@/api/auth";
import AuthLayout from "@/components/Auth/AuthLayout";
import GoogleLoginBtn from "@/components/Auth/GoogleLoginBtn";
import CustomFormField from "@/components/shared/CustomFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SignupUser } from "@/interfaces/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string().min(3, {
    message: "Name is required",
  }),
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
  confirmPassword: z
    .string({
      message: "Confirm password is required",
    })
    .min(8, {
      message: "Confirm password must be at least 8 characters long",
    }),
});

const Signup = () => {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (result) => {
      if (result.success) {
        toast.success("Account created successfully!", {
          description:
            "Verification email has been sent to your email address. Please verify your email to login.",
        });

        form.reset();
      } else {
        toast.error("Signup failed!", {
          description: result.errorSources[0]?.message || result.message,
        });
      }
    },
  });

  const handleSignup = (data: SignupUser) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    signupMutation.mutate(data);
  };

  return (
    <AuthLayout>
      <h2 className="mb-2 text-3xl font-bold text-gray-800 sm:text-[34px]">
        Sign up
      </h2>
      <p className="mb-5 text-[15px] text-gray-500 sm:text-base lg:mb-7">
        Already have an account?{" "}
        <Link
          className="text-blue-500 underline hover:no-underline"
          to="/login"
        >
          Log in
        </Link>
      </p>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(handleSignup)}>
          <CustomFormField
            name="name"
            label="Full name"
            placeholder="Enter your full name"
            formControl={form.control}
            disabled={signupMutation.isPending}
          />
          <CustomFormField
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            formControl={form.control}
            disabled={signupMutation.isPending}
          />
          <CustomFormField
            name="password"
            label="Password"
            placeholder="Enter your password"
            inputType="password"
            formControl={form.control}
            disabled={signupMutation.isPending}
          />
          <CustomFormField
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Enter your password again"
            inputType="password"
            formControl={form.control}
            disabled={signupMutation.isPending}
          />
          <Button
            className="w-full bg-secondary py-6 hover:bg-secondary/90"
            type="submit"
            disabled={signupMutation.isPending}
          >
            Sign up
          </Button>
        </form>
      </Form>
      <GoogleLoginBtn isSignup={true} />
    </AuthLayout>
  );
};

export default Signup;
