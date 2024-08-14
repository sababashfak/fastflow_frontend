import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className={cn(
        "invisible fixed bottom-10 right-4 z-[99] translate-y-[30px] opacity-0 duration-300",
        isVisible && "visible translate-y-0 opacity-100",
      )}
    >
      <img
        src="/images/icons/top.png"
        alt="Top"
        className="w-[45px] sm:w-[50px]"
      />
    </button>
  );
};

export default ScrollToTop;
