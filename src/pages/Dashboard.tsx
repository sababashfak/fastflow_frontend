import DashboardSkeleton from "@/components/Dashboard/shared/DashboardSkeleton";
import DashboardSidebar from "@/components/Dashboard/Sidebar/DashboardSidebar";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

type DashboardProps = {
  allowedRoles: string[];
};

const Dashboard: React.FC<DashboardProps> = ({ allowedRoles }) => {
  const { isFetching, user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  if (isFetching) {
    return <DashboardSkeleton />;
  }

  if (!isFetching && !user) {
    return <Navigate to="/login" replace />;
  }

  if (!isFetching && !allowedRoles.includes(user!.role)) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="bg-light-bg grid h-screen grid-cols-1 lg:grid-cols-[280px_1fr]">
      <DashboardSidebar
        isSidebarOpen={isSidebarOpen}
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
      />
      <div className="h-full w-full overflow-hidden">
        <Outlet context={[isSidebarOpen, openSidebar, closeSidebar]} />
      </div>
    </main>
  );
};

export default Dashboard;
