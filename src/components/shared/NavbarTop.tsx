import { IoMdCall, IoMdMail, IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className="bg-dark fixed left-0 top-0 w-full">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-x-10">
          <div className="flex gap-6 border-l border-r border-[#ffffff36] px-5">
            <div className="flex items-center gap-2.5">
              <IoMdCall className="text-primary" />
              <a
                href="#"
                className="hover:text-primary text-[11px] font-medium uppercase text-[#fffc] duration-300"
              >
                +1-2345-6789-101
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdMail className="text-primary" />
              <a
                href="#"
                className="hover:text-primary text-[11px] font-medium uppercase text-[#fffc] duration-300"
              >
                contact@reconstruction.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2.5">
              <IoMdPerson className="text-primary" />
              <Link
                to="/login"
                className="hover:text-primary text-[11px] font-medium uppercase text-[#fffc] duration-300"
              >
                Login
              </Link>
            </div>
            <Link
              to="/contact"
              className="bg-primary text-darkt-primary hover:bg-primary/90 flex h-[50px] items-center px-4 text-[11px] font-semibold uppercase duration-300"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
