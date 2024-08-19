import { getReviewById } from "@/api/review";
import Loader from "@/components/shared/Loader";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import DashboardHeader from "../shared/DashboardHeader";
import ReviewForm from "./ReviewForm";

const UpdateReview = () => {
  const { reviewId } = useParams();

  const reviewQuery = useQuery({
    queryKey: ["reviews", reviewId],
    queryFn: () => getReviewById(reviewId!),
  });

  const review = reviewQuery.data?.data?.review || {};

  if (!reviewQuery.isFetching && !review._id) {
    toast.error("Review not found", {
      description: "The review you are trying to update does not exist",
    });

    return <Navigate to="/dashboard/admin/reviews" />;
  }

  return (
    <div>
      <DashboardHeader title="Update Review" desc="Update an existing review" />
      <div className="mx-auto h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="h-full p-3 sm:p-5 xl:p-10">
          {!reviewQuery.isFetching || review?._id ? (
            <ReviewForm review={review} />
          ) : (
            <div className="flex h-full items-center justify-center gap-3">
              <div className="rounded-md bg-white px-20 py-10">
                <Loader />
                <p className="text-gray-500">Please wait</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
