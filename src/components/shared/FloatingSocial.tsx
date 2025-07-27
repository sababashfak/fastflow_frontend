import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/ffhpltd",
    icon: <FaFacebookF />,
    className: "bg-[#1974EC]",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@FastflowHeatingPlumbing",
    icon: <FaYoutube />,
    className: "bg-[#1D9CEB]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/fastflow-heating-plumbing/",
    icon: <FaLinkedinIn />,
    className: "bg-[#0077B5]",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/fastflowpreston/",
    icon: <FaInstagram />,
    className: "bg-[#F72270]",
  },
];

const FloatingSocial = () => {
  return (
    <div className="fixed left-0 top-[100px] z-[999] flex flex-col gap-0.5 rounded-r-md backdrop-blur-lg md:top-[160px] md:p-1.5 md:pl-0">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className={`flex size-8 items-center justify-center text-sm text-white duration-200 md:size-[38px] md:text-base lg:hover:bg-primary lg:hover:text-dark ${social.className}`}
          target="_blank"
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingSocial;
