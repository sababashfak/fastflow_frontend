import { TSidebarItem } from "@/hooks/useSidebarItems";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<TSidebarItem> = ({ path, title, icon }) => {
  return (
    <NavLink
      to={`${path}`}
      className={
        "flex items-center gap-3 border-white px-8 py-3 font-light text-[#808080] duration-300 hover:bg-[#eceff1] hover:text-secondary sm:py-3.5 sm:text-base [&.active]:border-r-4 [&.active]:border-secondary [&.active]:bg-[#eceff1] [&.active]:text-secondary"
      }
    >
      <span className="text-lg sm:text-xl">{icon}</span>
      <span className="text-sm font-normal sm:text-[15px]">{title}</span>
    </NavLink>
  );
};

export default MenuLink;
