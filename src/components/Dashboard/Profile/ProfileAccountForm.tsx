import { updateAccount } from "@/api/auth";
import CustomFormField from "@/components/shared/CustomFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useStore from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import ProfileImage from "./ProfileImage";

const accountSchema = z.object({
  avatar: z.string().nullable(),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address",
    })
    .readonly(),
});

const ProfileAccountForm = () => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const form = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      avatar: user?.avatar || null,
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const setAvatarImage = (avatar: string) => {
    form.setValue("avatar", avatar);
  };

  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: updateAccount,
    onSuccess: (result) => {
      if (result.success) {
        toast.success("Profile updated successfully");

        queryClient.invalidateQueries({
          queryKey: ["user", "me"],
        });

        setUser(result.data?.user);
      } else {
        toast.error(result.message || "An error occurred. Please try again.");
      }
    },
  });

  const handleAccountUpdate = (data: any) => {
    updateMutation.mutate(data);
  };

  return (
    <div>
      {user?._id && (
        <ProfileImage
          image={user?.avatar}
          setAvatarImage={setAvatarImage}
          isUpdating={updateMutation.isPending}
        />
      )}
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(handleAccountUpdate)}
        >
          <CustomFormField
            label="Full Name"
            name="name"
            placeholder="Enter your full name"
            formControl={form.control}
            disabled={updateMutation.isPending}
          />
          <CustomFormField
            label="Email"
            name="email"
            placeholder="Enter your email address"
            formControl={form.control}
            disabled
          />
          <div className="pt-2 text-center">
            <Button
              disabled={updateMutation.isPending}
              className="bg-secondary px-6 py-[25px] text-[15px] hover:bg-secondary/90"
              type="submit"
            >
              {updateMutation.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileAccountForm;
