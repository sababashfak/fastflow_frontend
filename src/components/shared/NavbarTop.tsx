import { IoMdCall, IoMdMail, IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className="fixed left-0 top-0 z-[999] hidden w-full bg-dark md:block">
      <div className="container">
        <div className="flex items-center justify-between gap-x-10">
          <div className="flex gap-6 border-l border-r border-[#ffffff36] px-5">
            <div className="flex items-center gap-2.5">
              <IoMdCall className="text-primary" />
              <a
                href="tel:+447946193824"
                className="text-[11px] font-medium uppercase text-[#fffc] duration-300 hover:text-primary"
              >
                +44-7946-193824
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdMail className="text-primary" />
              <a
                href="mailto:fastflowgassafeengineer@gmail.com"
                className="text-[11px] font-medium uppercase text-[#fffc] duration-300 hover:text-primary"
              >
                fastflowgassafeengineer@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2.5">
              <IoMdPerson className="text-primary" />
              <Link
                to="/login"
                className="text-[11px] font-medium uppercase text-[#fffc] duration-300 hover:text-primary"
              >
                Login
              </Link>
            </div>
            <Link
              to="/contact"
              className="text-darkt-primary flex h-[50px] items-center bg-primary px-4 text-[11px] font-semibold uppercase duration-300 hover:bg-primary/90"
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
