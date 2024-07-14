import { Review } from "@/interfaces/review";
import { FaRegComments } from "react-icons/fa6";

type ReviewCardProps = {
  review: Review;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center text-white">
      <div className="flex size-20 items-center justify-center rounded-full border border-white">
        <FaRegComments className="text-5xl" />
      </div>
      <div className="h-6 w-[1px] bg-white"></div>
      <div className="size-3.5 rounded-full border border-white"></div>
      <p className="mt-5 font-light text-gray-200 md:text-lg">
        " {review.review} "
      </p>
      <div className="my-7 h-0.5 w-10 bg-primary"></div>
      <h4 className="font-light uppercase">{review.name}</h4>
      <p className="mt-1 text-sm font-light uppercase tracking-wide">
        {review.designation}
      </p>
    </div>
  );
};

export default ReviewCard;
