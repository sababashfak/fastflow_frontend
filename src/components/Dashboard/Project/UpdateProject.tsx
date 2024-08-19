import DashboardHeader from "../shared/DashboardHeader";

const UpdateProject = () => {
  return (
    <div>
      <DashboardHeader
        title="Update Project"
        desc="Update an existing project"
      />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">{/* Projects Table */}</div>
      </div>
    </div>
  );
};

export default UpdateProject;
