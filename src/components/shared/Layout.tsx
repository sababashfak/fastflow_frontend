import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToPageTop from "./ScrollToPageTop";
import ScrollToTop from "./ScrollToTop";
import WhatsappButton from "./WhatsappButton";

const Layout = () => {
  return (
    <div className="min-h-svh bg-[#f5f5f5] font-poppins">
      <ScrollToPageTop />
      <Navbar />
      <WhatsappButton />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
