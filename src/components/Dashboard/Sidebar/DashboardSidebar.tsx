type SidebarProps = {
  sidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const DashboardSidebar: React.FC<SidebarProps> = () => {
  return <div>DashboardSidebar</div>;
};

export default DashboardSidebar;
