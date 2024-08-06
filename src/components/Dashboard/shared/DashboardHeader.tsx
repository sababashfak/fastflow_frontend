import { SidebarContext } from "@/pages/Dashboard";
import { RiMenu3Line } from "react-icons/ri";
import { useOutletContext } from "react-router-dom";

type DashboardHeaderProps = {
  title: string;
  desc: string;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, desc }) => {
  const { openSidebar } = useOutletContext<SidebarContext>();

  return (
    <div className="flex h-16 items-center gap-2 border-b border-[#eee]/70 bg-white px-3 sm:h-20 sm:gap-3 sm:px-5 xl:px-10">
      <button
        className="flex aspect-square w-9 items-center justify-center rounded-md border border-primary/10 bg-[#e2e8fe] text-secondary sm:w-10 lg:hidden"
        onClick={openSidebar}
      >
        <span className="text-2xl">
          <RiMenu3Line />
        </span>
      </button>
      <div>
        <h1 className="mb-0.5 text-xl font-semibold text-[#1d1d1d] sm:text-[22px]">
          {title}
        </h1>
        <p className="hidden text-[15px] leading-tight text-gray-400 sm:block sm:text-base">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
