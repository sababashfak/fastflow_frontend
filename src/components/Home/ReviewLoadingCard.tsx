import { FaRegComments } from "react-icons/fa6";
import { Skeleton } from "../ui/skeleton";

const ReviewLoadingCard = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center text-white">
      <div className="flex size-20 items-center justify-center rounded-full border border-white">
        <FaRegComments className="text-5xl" />
      </div>
      <div className="h-6 w-[1px] bg-white"></div>
      <div className="size-3.5 rounded-full border border-white"></div>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <Skeleton className="h-5 w-16 rounded-[4px]" />
        <Skeleton className="h-5 w-28 rounded-[4px]" />
        <Skeleton className="h-5 w-24 rounded-[4px]" />
        <Skeleton className="h-5 w-12 rounded-[4px]" />
        <Skeleton className="h-5 w-10 rounded-[4px]" />
        <Skeleton className="h-5 w-20 rounded-[4px]" />
        <Skeleton className="h-5 w-16 rounded-[4px]" />
        <Skeleton className="h-5 w-24 rounded-[4px]" />
        <Skeleton className="h-5 w-32 rounded-[4px]" />
        <Skeleton className="h-5 w-24 rounded-[4px]" />
        <Skeleton className="h-5 w-28 rounded-[4px]" />
        <Skeleton className="h-5 w-16 rounded-[4px]" />
        <Skeleton className="h-5 w-24 rounded-[4px]" />
        <Skeleton className="h-5 w-24 rounded-[4px]" />
        <Skeleton className="h-5 w-12 rounded-[4px]" />
        <Skeleton className="h-5 w-10 rounded-[4px]" />
        <Skeleton className="h-5 w-20 rounded-[4px]" />
        <Skeleton className="h-5 w-16 rounded-[4px]" />
        <Skeleton className="hidden h-5 w-24 rounded-[4px] sm:block" />
        <Skeleton className="hidden h-5 w-32 rounded-[4px] sm:block" />
        <Skeleton className="h-5 w-24 rounded-[4px]" />
        <Skeleton className="h-5 w-16 rounded-[4px]" />
        <Skeleton className="h-5 w-24 rounded-[4px]" />
      </div>
      <div className="my-7 h-0.5 w-10 bg-primary"></div>
      <Skeleton className="h-5 w-44" />
      <Skeleton className="mt-2 h-5 w-60" />
    </div>
  );
};

export default ReviewLoadingCard;
