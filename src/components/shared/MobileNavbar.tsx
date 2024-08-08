import useAuth from "@/hooks/useAuth";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { MenuItem } from "./Navbar";

type MobileNavbarProps = {
  isOpen: boolean;
  closeNavbar: () => void;
  items: MenuItem[];
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  items,
  isOpen,
  closeNavbar,
}) => {
  const { user, isFetching } = useAuth();

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-screen w-full overflow-y-auto bg-dark p-5 duration-500 md:hidden",
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-full opacity-0",
      )}
    >
      <div className="flex items-center pb-10">
        <Link to="/">
          <img src="/logo.png" alt="Fastflow" className="h-14" />
        </Link>
        <button
          onClick={closeNavbar}
          className="ml-auto text-3xl text-gray-200 duration-300 hover:text-white"
        >
          <MdOutlineClose />
        </button>
      </div>
      <ul className="flex flex-col gap-3 border-b border-white/10 pb-5">
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              className={cn(
                "flex items-center gap-5 py-1 font-semibold uppercase text-gray-200 duration-300 hover:text-white [&.active]:text-primary",
              )}
              to={item.link}
            >
              {item.name}
              <FaArrowRightLong className="text-base" />
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            className={cn(
              "flex items-center gap-5 py-1 font-semibold uppercase text-gray-200 duration-300 hover:text-white [&.active]:text-primary",
            )}
            to={
              isFetching || !user?._id ? "/login" : `/dashboard/${user?.role}`
            }
          >
            {isFetching || !user?._id ? "Login" : "Dashboard"}
            <FaArrowRightLong className="text-base" />
          </NavLink>
        </li>
      </ul>
      <div className="flex flex-wrap gap-x-8 gap-y-3.5 py-5">
        <div className="flex items-center gap-2.5">
          <IoMdCall className="text-lg text-primary" />
          <a
            href="tel:+447946193824"
            className="text-sm font-medium uppercase text-[#fffc] duration-300 hover:text-primary"
          >
            +44-7946-193824
          </a>
        </div>
        <div className="flex items-center gap-2.5">
          <IoMdMail className="text-lg text-primary" />
          <a
            href="mailto:fastflowgassafeengineer@gmail.com"
            className="text-sm font-medium uppercase text-[#fffc] duration-300 hover:text-primary"
          >
            fastflowgassafeengineer@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
