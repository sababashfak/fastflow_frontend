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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

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
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
      />
      <div className="h-full w-full overflow-hidden">
        <Outlet context={[sidebarOpen, setSidebarOpen]} />
      </div>
    </main>
  );
};

export default Dashboard;
