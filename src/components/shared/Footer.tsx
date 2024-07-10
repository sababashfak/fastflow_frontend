import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const quickLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Projects", link: "/projects" },
  { title: "Terms of Use", link: "/terms-of-use" },
  { title: "Privacy Policy", link: "/privacy-policy" },
];

const FooterTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="relative mb-8 border-b border-white/10 pb-5 text-[13px] font-semibold uppercase text-white lg:mb-10">
      {title}
      <span className="absolute bottom-[1px] left-0 block h-1 w-8 bg-primary"></span>
    </h2>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="bg-[url(/map.png)] bg-left-bottom bg-no-repeat pb-[60px] pt-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="">
              <FooterTitle title="About Us" />
              <p className="max-w-lg text-[13px] leading-[1.8] text-white/90">
                We are a leading renovation and remodeling company with over 12
                years of experience. Committed to quality and customer
                satisfaction, we transform spaces with expert craftsmanship and
                premium materials.
              </p>
              <Link
                to="/about"
                className="mt-4 inline-flex items-center gap-2.5 border-b border-dotted border-white/40 py-0.5 text-[13px] font-semibold text-primary hover:underline"
              >
                Read More
                <HiOutlineArrowNarrowRight className="text-sm text-white" />
              </Link>
            </div>
            <div className="">
              <FooterTitle title="Contact Info" />
              <div className="grid grid-cols-[auto_1fr] gap-4 text-[13px]">
                <div className="flex items-center gap-2.5">
                  <IoCallOutline className="text-base text-primary" />
                  <span className="text-white/50">Phone:</span>
                </div>
                <a
                  href="#"
                  className="text-white duration-200 hover:text-primary"
                >
                  +1-2345-6789-101
                </a>
                <div className="flex items-center gap-2.5">
                  <MdOutlineEmail className="text-base text-primary" />
                  <span className="text-white/50">Email:</span>
                </div>
                <a
                  href="#"
                  className="text-white duration-200 hover:text-primary"
                >
                  contact@construction.com
                </a>
                <div className="flex items-center gap-2.5">
                  <SlLocationPin className="text-base text-primary" />
                  <span className="text-white/50">Address:</span>
                </div>
                <a
                  href="#"
                  className="text-white duration-200 hover:text-primary"
                >
                  2627 Payne Street, Houston, texas, US
                </a>
              </div>
            </div>
            <div className="">
              <FooterTitle title="Quick Links" />
              <div className="grid max-w-[400px] grid-cols-2 justify-items-start gap-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.link}
                    className="flex items-center gap-3 text-[13px] font-medium text-white/90 duration-200 hover:text-primary"
                  >
                    <span className="block h-[1px] w-[5px] bg-primary"></span>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="flex items-center gap-5">
              <h4 className="text-[13px] font-medium text-white/95">
                Follow us:
              </h4>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex size-9 items-center justify-center border border-white/10 bg-[#333] text-xs text-primary"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="flex size-9 items-center justify-center border border-white/10 bg-[#333] text-xs text-primary"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="flex size-9 items-center justify-center border border-white/10 bg-[#333] text-xs text-primary"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="flex size-9 items-center justify-center border border-white/10 bg-[#333] text-xs text-primary"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#222] py-5">
        <div className="container flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-white/60">
            &copy; <span className="font-medium text-primary">Renovate</span>{" "}
            {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Developed by{" "}
            <a target="_blank" href="#" className="font-medium text-primary">
              Posh Coder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
