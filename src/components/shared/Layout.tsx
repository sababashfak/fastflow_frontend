import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="font-poppins min-h-svh bg-[#f5f5f5]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
