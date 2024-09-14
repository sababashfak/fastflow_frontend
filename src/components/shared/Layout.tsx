import { Outlet } from "react-router-dom";
import FloatingSocial from "./FloatingSocial";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToPageTop from "./ScrollToPageTop";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div className="min-h-svh bg-[#f5f5f5] font-poppins">
      <ScrollToPageTop />
      <Navbar />
      <FloatingSocial />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
