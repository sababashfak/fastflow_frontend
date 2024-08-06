import { changePassword } from "@/api/auth";
import CustomFormField from "@/components/shared/CustomFormField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { ChangePassword } from "@/interfaces/user";
import useStore from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const passwordSchema = z.object({
  currentPassword: z.string().min(1, {
    message: "Please enter your current password",
  }),
  newPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  confirmNewPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

const ProfilePasswordForm = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: changePassword,
    onSuccess: async (result) => {
      if (result.success) {
        toast.success("Password updated successfully");

        localStorage.removeItem("token");

        queryClient.invalidateQueries({
          queryKey: ["user", "me"],
        });

        setUser(null);

        return navigate("/login");
      } else {
        toast.error(result.message || "An error occurred. Please try again.");
      }
    },
  });

  const handlePasswordChange = (data: ChangePassword) => {
    if (data.newPassword !== data.confirmNewPassword) {
      return toast.error("Passwords do not match", {
        description:
          "Please make sure the new password and confirm new password match",
      });
    }

    updateMutation.mutate(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-1">Change password</CardTitle>
        <CardDescription className="sm:text-[15px]">
          Change your password here. After saving, you'll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handlePasswordChange)}
          >
            <CustomFormField
              label="Current password"
              name="currentPassword"
              placeholder="Enter your current password"
              inputType="password"
              formControl={form.control}
              disabled={updateMutation.isPending}
            />
            <CustomFormField
              label="New password"
              name="newPassword"
              placeholder="Enter your new password"
              inputType="password"
              formControl={form.control}
              disabled={updateMutation.isPending}
            />
            <CustomFormField
              label="Confirm new password"
              name="confirmNewPassword"
              placeholder="Enter your new password again"
              inputType="password"
              formControl={form.control}
              disabled={updateMutation.isPending}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-secondary px-5 py-6 text-[15px] hover:bg-secondary/90"
                disabled={updateMutation.isPending}
              >
                {updateMutation.isPending ? "Updating..." : "Update password"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProfilePasswordForm;
