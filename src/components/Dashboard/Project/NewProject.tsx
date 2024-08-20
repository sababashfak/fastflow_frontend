import DashboardHeader from "../shared/DashboardHeader";
import ProjectForm from "./ProjectForm";

const NewProject = () => {
  return (
    <div>
      <DashboardHeader title="New Project" desc="Add a new project" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          <ProjectForm />
        </div>
      </div>
    </div>
  );
};

export default NewProject;
