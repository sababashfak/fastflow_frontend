import { getProjectById } from "@/api/project";
import Loader from "@/components/shared/Loader";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import DashboardHeader from "../shared/DashboardHeader";
import ProjectForm from "./ProjectForm";

const UpdateProject = () => {
  const { projectId } = useParams();

  const projectQuery = useQuery({
    queryKey: ["projects", projectId],
    queryFn: () => getProjectById(projectId as string),
  });

  const project = projectQuery.data?.data?.project || {};

  if (!projectQuery.isFetching && !project._id) {
    toast.error("Project not found", {
      description: "The project you are trying to update does not exist",
    });

    return <Navigate to="/dashboard/admin/projects" />;
  }

  return (
    <div>
      <DashboardHeader
        title="Update Project"
        desc="Update an existing project"
      />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          {!projectQuery.isFetching && project._id && (
            <ProjectForm project={project} />
          )}
          {projectQuery.isFetching && (
            <div className="flex flex-col items-center justify-center rounded-md bg-white py-16">
              <Loader />
              <p className="mt-2 text-gray-600">Please wait</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProject;
