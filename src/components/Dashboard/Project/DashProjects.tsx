import { getProjects } from "@/api/project";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import DashboardHeader from "../shared/DashboardHeader";
import DashProjectsTable from "./DashProjectsTable";

const DashProjects = () => {
  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });

  const projects = projectsQuery.data?.data?.projects || [];

  return (
    <div>
      <DashboardHeader title="Projects" desc="Manage all of your projects" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">All Projects</h2>
            <Button className="bg-secondary hover:bg-secondary/90" asChild>
              <Link to="new">Add Project</Link>
            </Button>
          </div>
          <DashProjectsTable
            projects={projects}
            isFetching={projectsQuery.isFetching}
          />
        </div>
      </div>
    </div>
  );
};

export default DashProjects;
