import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import MobileNavbar from "./MobileNavbar";
import NavbarTop from "./NavbarTop";
import WhatsappButton from "./WhatsappButton";

export type MenuItem = {
  name: string;
  link: string;
};

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Book now", link: "/book-service" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const openNavbar = () => {
    setIsOpen(true);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    closeNavbar();
  }, [location.pathname]);

  return (
    <>
      <header>
        <NavbarTop />
        <div
          className={cn(
            "fixed left-0 top-[0] z-[999] w-full bg-white shadow-sm duration-300 md:top-[50px]",
            sticky && "top-0 shadow-md md:top-0",
          )}
        >
          <div className="relative w-full">
            <WhatsappButton />
            <div className="container">
              <div className="flex flex-wrap items-center justify-between gap-x-10 py-1.5 md:py-2">
                <Link to="/">
                  <img
                    src="/logo.png"
                    alt="Fastflow"
                    className={cn(
                      "h-[70px] duration-300",
                      sticky && "h-[60px]",
                    )}
                  />
                </Link>
                <div className="md:hidden">
                  <button onClick={openNavbar} className="flex items-center">
                    <IoMdMenu className="text-3xl text-dark" />
                  </button>
                </div>
                <ul className="hidden items-center gap-5 md:flex">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.link}
                        className="text-[13px] font-semibold uppercase text-dark duration-300 hover:text-primary [&.active]:text-primary"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <MobileNavbar
                  items={menuItems}
                  isOpen={isOpen}
                  closeNavbar={closeNavbar}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[82px] w-full md:h-[136px]"></div>
    </>
  );
};

export default Navbar;
