import Loader from "@/components/shared/Loader";
import useSidebarItems from "@/hooks/useSidebarItems";
import { cn } from "@/lib/utils";
import useStore from "@/store";
import { useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import MenuLink from "./MenuLink";

type SidebarProps = {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
};

const DashboardSidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  closeSidebar,
}) => {
  const location = useLocation();
  const user = useStore((state) => state.user);
  const sidebarItems = useSidebarItems(user?.role);

  useEffect(() => {
    closeSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div
      className={cn(
        "group invisible fixed left-0 top-0 z-[50] h-full w-full bg-black/10 opacity-0 backdrop-blur-[2px] duration-300 lg:visible lg:static lg:opacity-100 [&.active]:visible [&.active]:opacity-100 [&.active]:duration-100",
        isSidebarOpen && "active",
      )}
      onClick={(e) => {
        const target = e.target as HTMLDivElement;

        if (target.classList.contains("group")) {
          closeSidebar();
        }
      }}
    >
      <aside className="sidebar h-full w-64 -translate-x-full bg-white duration-300 group-[&.active]:-translate-x-0 lg:w-full lg:-translate-x-0 lg:border-r lg:border-[#eee]/70">
        <div className="flex h-16 items-center overflow-hidden border-b border-[#eee]/70 px-8 sm:h-20">
          <NavLink to="/">
            <img className="h-14" src="/logo.png" alt="Fastflow" />
          </NavLink>
        </div>
        <div className="sidebarContent h-[calc(100vh-64px)] overflow-y-auto pb-5 sm:h-[calc(100vh-80px)] sm:pb-10">
          {user && (
            <>
              <p className="px-8 py-4 text-sm font-medium uppercase text-secondary">
                Menu
              </p>
              <nav className="flex flex-col gap-1 sm:gap-1.5">
                {sidebarItems.map(({ title, path, icon }, index) => (
                  <MenuLink path={path} title={title} icon={icon} key={index} />
                ))}
                <hr className="border-gray-200/70" />
                <MenuLink path="profile" title="Profile" icon={<FiUser />} />
                <LogoutButton />
              </nav>
            </>
          )}
          {!user && (
            <div className="flex h-full items-center justify-center">
              <Loader />
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default DashboardSidebar;
