import DashboardHeader from "../shared/DashboardHeader";

const NewProject = () => {
  return (
    <div>
      <DashboardHeader title="New Project" desc="Add a new project" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">{/* Projects Table */}</div>
      </div>
    </div>
  );
};

export default NewProject;
