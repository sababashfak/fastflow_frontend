import { forgotPassword } from "@/api/auth";
import CustomFormField from "@/components/shared/CustomFormField";
import FullpageLoader from "@/components/shared/FullpageLoader";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useAuth from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

const ForgotPassword = () => {
  const { isFetching, user } = useAuth();

  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (result) => {
      if (result.success) {
        toast.success(result.message || "Reset link sent successfully", {
          description: "Please check your email to reset your password",
        });

        form.reset();
      } else {
        toast.error(result.message || "Failed to send reset link");
      }
    },
  });

  const handleForgotPassword = (data: { email: string }) => {
    forgotPasswordMutation.mutate(data.email);
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
            Forgot Password
          </h2>
          <p className="mt-1.5 max-w-[280px] text-center text-sm leading-tight text-gray-600">
            Enter your email address below and we'll send you a link to reset
            your password.
          </p>
          <div className="mt-5">
            <Form {...form}>
              <form
                className="flex w-[260px] flex-col gap-3"
                onSubmit={form.handleSubmit(handleForgotPassword)}
              >
                <CustomFormField
                  name="email"
                  placeholder="Enter your email address"
                  formControl={form.control}
                  disabled={forgotPasswordMutation.isPending}
                />
                <Button
                  type="submit"
                  disabled={forgotPasswordMutation.isPending}
                  className="w-full bg-secondary py-[22px] hover:bg-secondary/90"
                >
                  {forgotPasswordMutation.isPending
                    ? "Sending..."
                    : "Send Reset Link"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
