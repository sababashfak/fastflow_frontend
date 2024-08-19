import { deleteReview } from "@/api/review";
import { Button } from "@/components/ui/button";
import { Review } from "@/interfaces/review";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import DashDataTable from "../shared/DashDataTable";

interface DashReviewsTableProps {
  reviews: Review[];
  isFetching: boolean;
}

const DashReviewsTable: React.FC<DashReviewsTableProps> = ({
  reviews,
  isFetching,
}) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: (result) => {
      if (result.success) {
        toast.success("Review deleted successfully");
        queryClient.invalidateQueries({
          queryKey: ["reviews"],
        });
      } else {
        toast.error(result.message || "Failed to delete review");
      }
    },
  });

  const handleDeleteReview = (reviewId: string) => {
    toast("Are you sure you want to delete this review?", {
      description:
        "This action cannot be undone and will permanently delete the review.",
      cancel: (
        <Button onClick={() => toast.dismiss()} size="sm" variant="outline">
          Cancel
        </Button>
      ),
      action: (
        <Button
          onClick={() => {
            deleteMutation.mutate(reviewId);
            toast.dismiss();
          }}
          size="sm"
          variant="destructive"
        >
          Delete
        </Button>
      ),
      position: "top-center",
      classNames: {
        toast: "flex-wrap [&_[data-content]]:w-full justify-end",
        title: "text-sm",
        description: "mb-2",
      },
    });
  };

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
      enableHiding: false,
      cell: (props: any) => (
        <span className="block text-nowrap">{props.getValue()}</span>
      ),
    },
    {
      header: "Designation",
      accessorKey: "designation",
      enableHiding: false,
    },
    {
      header: "Review",
      accessorKey: "review",
      enableHiding: false,
      cell: (props: any) => (
        <span className="block min-w-[220px] max-w-sm">{props.getValue()}</span>
      ),
    },
    {
      accessorFn: (row: any) => row._id,
      header: "Edit",
      cell: (props: any) => (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button
            className="text-blue-500"
            variant="outline"
            size="icon"
            asChild
          >
            <Link to={`edit/${props.getValue()}`}>
              <TbEdit className="text-lg" />
            </Link>
          </Button>
        </div>
      ),
      enableHiding: false,
    },
    {
      accessorFn: (row: any) => row._id,
      header: "Delete",
      cell: (props: any) => (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button
            onClick={() => handleDeleteReview(props.getValue())}
            className="text-[#FF5556]"
            variant="outline"
            size="icon"
            disabled={deleteMutation.isPending}
          >
            <MdDeleteOutline className="text-lg" />
          </Button>
        </div>
      ),
      enableHiding: false,
    },
  ];

  return (
    <div>
      <DashDataTable
        columns={columns}
        data={reviews}
        isLoading={isFetching}
        filterPlaceholder="Search reviews..."
      />
    </div>
  );
};

export default DashReviewsTable;
