import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WhatsappButton = () => {
  return (
    <Link
      to="https://wa.me/447946193824"
      className="absolute right-0 top-full z-[99] grid translate-x-[calc(100%-40px)] grid-cols-[auto_1fr] items-center bg-[#00D757] text-white duration-300 hover:translate-x-0"
      target="_blank"
      rel="noreferrer"
    >
      <span className="flex w-10 justify-center py-2">
        <FaWhatsapp className="text-2xl" />
      </span>
      <span className="block pr-2 text-[15px] font-medium">01772230145</span>
    </Link>
  );
};

export default WhatsappButton;
