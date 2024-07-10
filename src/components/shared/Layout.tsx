import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-svh bg-[#f5f5f5] font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
