import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div className="min-h-svh bg-[#f5f5f5] font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
