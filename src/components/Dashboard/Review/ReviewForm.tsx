import { createReview, updateReview } from "@/api/review";
import CustomFormField from "@/components/shared/CustomFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Review } from "@/interfaces/review";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

type ReviewFormProps = {
  review?: Review | null;
};

const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

const reviewSchema = z.object({
  name: z.string().min(1, "Name is required"),
  designation: z.string().min(1, "Designation is required"),
  review: z.string().min(1, "Review is required"),
  reviewLink: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value === "") return true;

        return urlRegex.test(value as string);
      },
      {
        message: "Please provide a valid URL",
      },
    ),
});

const ReviewForm: React.FC<ReviewFormProps> = ({ review = null }) => {
  const isUpdate = !!review?._id;

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: review?.name || "",
      designation: review?.designation || "",
      review: review?.review || "",
      reviewLink: review?.reviewLink || "",
    },
  });

  const queryClient = useQueryClient();

  const reviewMutation = useMutation({
    mutationFn: (data: Review) => {
      if (isUpdate) {
        return updateReview(review?._id as string, data);
      } else {
        return createReview(data);
      }
    },
    onSuccess: (result) => {
      if (result.success) {
        toast.success(result.message);

        queryClient.invalidateQueries({
          queryKey: ["reviews"],
        });

        if (!isUpdate) {
          return navigate("/dashboard/admin/reviews");
        }
      } else {
        toast.error(result.message || "Something went wrong");
      }
    },
  });

  const handleSubmit = (data: Review) => {
    reviewMutation.mutate(data);
  };

  return (
    <div>
      <div className="mx-auto max-w-xl rounded-lg bg-white p-5 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold">Fill in the form</h2>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <CustomFormField
              label="Name"
              name="name"
              formControl={form.control}
              placeholder="Enter reviewer name"
              disabled={reviewMutation.isPending}
            />
            <CustomFormField
              label="Designation"
              name="designation"
              formControl={form.control}
              placeholder="Enter reviewer designation"
              disabled={reviewMutation.isPending}
            />
            <CustomFormField
              label="Review"
              name="review"
              formControl={form.control}
              placeholder="Enter review"
              isTextArea
              disabled={reviewMutation.isPending}
            />
            <CustomFormField
              label="Review Link"
              name="reviewLink"
              formControl={form.control}
              placeholder="Enter review link (optional)"
              disabled={reviewMutation.isPending}
            />
            <div className="flex justify-center">
              <Button
                className="block h-auto rounded-full bg-secondary px-5 py-3 text-base hover:bg-secondary/90"
                type="submit"
                disabled={reviewMutation.isPending}
              >
                {reviewMutation.isPending
                  ? isUpdate
                    ? "Updating..."
                    : "Adding..."
                  : isUpdate
                    ? "Update Review"
                    : "Add Review"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ReviewForm;
