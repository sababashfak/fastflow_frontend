import { resetPassword } from "@/api/auth";
import CustomFormField from "@/components/shared/CustomFormField";
import FullpageLoader from "@/components/shared/FullpageLoader";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useAuth from "@/hooks/useAuth";
import { TResetPassword } from "@/interfaces/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const resetPasswordSchema = z.object({
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

const ResetPassword = () => {
  const navigate = useNavigate();
  const { isFetching, user } = useAuth();
  const { resetToken } = useParams();

  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: (data: TResetPassword) => resetPassword(resetToken!, data),
    onSuccess: (result) => {
      if (result.success) {
        toast.success(result.message || "Password reset successfully", {
          description: "You can now login with your new password",
        });

        return navigate("/login", { replace: true });
      } else {
        toast.error(result.message || "Failed to reset password", {
          description: "Please try again with a valid reset link",
        });

        return navigate("/forgot-password", { replace: true });
      }
    },
  });

  const handleResetPassword = (data: TResetPassword) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match", {
        description: "Please enter the same password in both fields",
      });
    }

    resetPasswordMutation.mutate(data);
  };

  if (isFetching) {
    return <FullpageLoader />;
  }

  if (!isFetching && user?._id) {
    toast.error("You are already logged in", {
      description: "Please logout to reset your password",
    });

    return <Navigate to="/" />;
  }

  return (
    <main className="bg-gray-200">
      <div className="container flex justify-center py-20">
        <div className="flex w-full max-w-sm flex-col items-center rounded-md bg-white px-5 py-7">
          <h2 className="mt-3 text-center text-xl font-semibold text-secondary">
            Reset Password
          </h2>
          <p className="mt-1.5 max-w-[280px] text-center text-sm leading-tight text-gray-600">
            Enter your new password below to reset your password.
          </p>
          <div className="mt-5">
            <Form {...form}>
              <form
                className="flex w-[300px] flex-col gap-3"
                onSubmit={form.handleSubmit(handleResetPassword)}
              >
                <CustomFormField
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  inputType="password"
                  formControl={form.control}
                  disabled={resetPasswordMutation.isPending}
                />
                <CustomFormField
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Enter your password again"
                  inputType="password"
                  formControl={form.control}
                  disabled={resetPasswordMutation.isPending}
                />
                <Button
                  type="submit"
                  disabled={resetPasswordMutation.isPending}
                  className="w-full bg-secondary py-[22px] hover:bg-secondary/90"
                >
                  {resetPasswordMutation.isPending
                    ? "Resetting..."
                    : "Reset Password"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
