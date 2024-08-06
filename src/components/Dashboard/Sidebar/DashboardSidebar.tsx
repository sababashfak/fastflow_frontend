import useSidebarItems from "@/hooks/useSidebarItems";
import useStore from "@/store";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SidebarProps = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const DashboardSidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  const location = useLocation();
  const user = useStore((state) => state.user);
  const sidebarItems = useSidebarItems(user?.role);

  console.log(sidebarItems);

  useEffect(() => {
    closeSidebar();
  }, [closeSidebar, location.pathname]);

  return <div>DashboardSidebar</div>;
};

export default DashboardSidebar;
