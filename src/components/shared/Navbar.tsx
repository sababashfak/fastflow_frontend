import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import NavbarTop from "./NavbarTop";

const menutItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

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

  return (
    <>
      <header>
        <NavbarTop />
        <div
          className={cn(
            "fixed left-0 top-[50px] w-full bg-white duration-300",
            sticky && "top-0",
          )}
        >
          <div className="container">
            <div className="flex flex-wrap justify-between gap-x-10 py-5">
              <h2 className="text-primary text-2xl font-bold uppercase">
                Renovate
              </h2>
              <ul className="flex items-center gap-3">
                {menutItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.link}
                      className="hover:text-primary text-dark [&.active]:text-primary text-[13px] font-semibold uppercase duration-300"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[122px] w-full"></div>
    </>
  );
};

export default Navbar;
