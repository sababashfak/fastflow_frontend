import { deleteBlog } from "@/api/blog";
import { Button } from "@/components/ui/button";
import { TBlog } from "@/interfaces/blog";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { LuEye } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import DashDataTable from "../shared/DashDataTable";

interface DashBlogsTableProps {
  blogs: TBlog[];
  isFetching: boolean;
}

const DashBlogsTable: React.FC<DashBlogsTableProps> = ({
  blogs,
  isFetching,
}) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: (result) => {
      if (result.success) {
        toast.success("Blog deleted successfully");
        queryClient.invalidateQueries({
          queryKey: ["blogs"],
        });
      } else {
        toast.error(result.message || "Failed to delete blog");
      }
    },
  });

  const handleDeleteBlog = (blogId: string) => {
    toast("Are you sure you want to delete this blog?", {
      description:
        "This action cannot be undone and will permanently delete the blog.",
      cancel: (
        <Button onClick={() => toast.dismiss()} size="sm" variant="outline">
          Cancel
        </Button>
      ),
      action: (
        <Button
          onClick={() => {
            deleteMutation.mutate(blogId);
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
      accessorKey: "title",
      header: "Title",
      cell: (props: any) => {
        return <span className="block min-w-[200px]">{props.getValue()}</span>;
      },
      enableHiding: false,
    },
    {
      accessorKey: "publishedDate",
      header: "Pubished Date",
      cell: (props: any) => {
        return (
          <span className="block min-w-[100px] text-nowrap">
            {format(props.getValue(), "dd MMM yyyy")}
          </span>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (props: any) => {
        return (
          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-[13px] font-medium",
              props.getValue() === "published"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600",
            )}
          >
            {props.getValue()}
          </span>
        );
      },
    },
    {
      accessorFn: (row: any) => row._id,
      header: "View",
      cell: (props: any) => (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button
            className="text-secondary"
            variant="outline"
            size="icon"
            asChild
          >
            <Link
              target="_blank"
              rel="noreferrer"
              to={`/blog/${props.getValue()}`}
            >
              <LuEye className="text-lg" />
            </Link>
          </Button>
        </div>
      ),
      enableHiding: false,
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
            onClick={() => handleDeleteBlog(props.getValue())}
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
    <DashDataTable
      columns={columns}
      data={blogs}
      isLoading={isFetching}
      filterPlaceholder="Search blogs..."
    />
  );
};

export default DashBlogsTable;
