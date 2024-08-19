import DashboardHeader from "../shared/DashboardHeader";
import ReviewForm from "./ReviewForm";

const NewReview = () => {
  return (
    <div>
      <DashboardHeader title="New Review" desc="Add a new review" />
      <div className="mx-auto h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default NewReview;
