import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DashboardHeader from "../shared/DashboardHeader";

const DashReview = () => {
  return (
    <div>
      <DashboardHeader title="Reviews" desc="Manage all of your reviews" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">All Reviews</h2>
            <Button className="bg-secondary hover:bg-secondary/90" asChild>
              <Link to="new">Add Review</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashReview;
