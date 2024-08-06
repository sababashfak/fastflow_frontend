import DashboardSkeleton from "@/components/Dashboard/shared/DashboardSkeleton";
import DashboardSidebar from "@/components/Dashboard/Sidebar/DashboardSidebar";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export interface SidebarContext {
  openSidebar: () => void;
}

type DashboardProps = {
  allowedRoles: string[];
};

const Dashboard: React.FC<DashboardProps> = ({ allowedRoles }) => {
  const { isFetching, user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
    <main className="grid h-screen grid-cols-1 bg-gray-200 lg:grid-cols-[280px_1fr]">
      <DashboardSidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />
      <div className="h-full w-full overflow-hidden">
        <Outlet context={{ openSidebar } satisfies SidebarContext} />
      </div>
    </main>
  );
};

export default Dashboard;
