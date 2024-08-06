import DashboardHeader from "./DashboardHeader";

const DashNotFound = () => {
  return (
    <div>
      <DashboardHeader
        title="Not Found"
        desc="The page you are looking for does not exist"
      />
      <div className="flex h-[calc(100dvh-80px)] items-center justify-center overflow-y-auto">
        <img
          className="w-full max-w-2xl"
          src="/page-not-found.png"
          alt="Page not found"
        />
      </div>
    </div>
  );
};

export default DashNotFound;
