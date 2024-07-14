import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
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
  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-screen w-full bg-dark p-5 duration-500 md:hidden",
        isOpen ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="flex items-center pb-10">
        <h2 className="text-2xl font-bold uppercase text-white">
          Fast<span className="text-primary">flow</span>
        </h2>
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
            to={"/login"}
          >
            Login
            <FaArrowRightLong className="text-base" />
          </NavLink>
        </li>
      </ul>
      <div className="flex flex-wrap gap-x-8 gap-y-3.5 py-5">
        <div className="flex items-center gap-2.5">
          <IoMdCall className="text-lg text-primary" />
          <a
            href="#"
            className="text-sm font-medium uppercase text-[#fffc] duration-300 hover:text-primary"
          >
            +1-2345-6789-101
          </a>
        </div>
        <div className="flex items-center gap-2.5">
          <IoMdMail className="text-lg text-primary" />
          <a
            href="#"
            className="text-sm font-medium uppercase text-[#fffc] duration-300 hover:text-primary"
          >
            contact@reconstruction.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
