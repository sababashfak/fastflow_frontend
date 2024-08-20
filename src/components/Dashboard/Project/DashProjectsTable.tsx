import { deleteProject } from "@/api/project";
import { Button } from "@/components/ui/button";
import { TProject } from "@/interfaces/project";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import DashDataTable from "../shared/DashDataTable";

interface DashProjectsTableProps {
  projects: TProject[];
  isFetching: boolean;
}

const DashProjectsTable: React.FC<DashProjectsTableProps> = ({
  projects,
  isFetching,
}) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: (result) => {
      if (result.success) {
        toast.success("Project deleted successfully");
        queryClient.invalidateQueries({
          queryKey: ["projects"],
        });
      } else {
        toast.error(result.message || "Failed to delete project");
      }
    },
  });

  const handleDeleteProject = (projectId: string) => {
    toast("Are you sure you want to delete this project?", {
      description:
        "This action cannot be undone and will permanently delete the project.",
      cancel: (
        <Button onClick={() => toast.dismiss()} size="sm" variant="outline">
          Cancel
        </Button>
      ),
      action: (
        <Button
          onClick={() => {
            deleteMutation.mutate(projectId);
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
      accessorKey: "image",
      header: "Image",
      cell: (props: any) => {
        const displayUrl = `${import.meta.env.VITE_BACKEND_URL}/images/${props.getValue()}`;

        return (
          <img
            src={displayUrl}
            alt={props.row.original.name}
            className="size-[70px] rounded-md object-cover"
          />
        );
      },
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Project Name",
      enableHiding: false,
    },
    {
      accessorKey: "description",
      header: "Description",
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
            onClick={() => handleDeleteProject(props.getValue())}
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
        data={projects}
        isLoading={isFetching}
        filterPlaceholder="Search projects..."
      />
    </div>
  );
};

export default DashProjectsTable;
