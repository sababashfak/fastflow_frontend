import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "../../interfaces/slide";
import { Button } from "../ui/button";
import HeroSlide from "./HeroSlide";

const slides: Slide[] = [
  {
    title: "Trusted Experts",
    subtitle: "Exceptional Home Renovations and Remodels",
    description:
      "With over 3 years of experience and a focus on customer satisfaction, rely on us for impeccable renovations and remodeling projects.",
    image: "/images/hero/slide-1.jpg",
    btnText: "Learn More",
    btnUrl: "/about",
  },
  {
    title: "Innovative Designs",
    subtitle: "Modern Living Spaces Crafted to Perfection",
    description:
      "Cutting-edge renovations reflecting the latest trends and technologies, ensuring your home is stylish and practical.",
    image: "/images/hero/slide-4.jpg",
    btnText: "Our Services",
    btnUrl: "/services",
  },
  {
    title: "Unmatched Craftsmanship",
    subtitle: "Elevate Your Living Spaces with Us",
    description:
      "Dedicated professionals committed to enhancing your home's beauty and functionality with unparalleled craftsmanship.",
    image: "/images/hero/slide-2.jpg",
    btnText: "View Projects",
    btnUrl: "/projects",
  },
  {
    title: "Customer-Centric Approach",
    subtitle: "Your Dream Home Renovation Awaits",
    description:
      "Customized renovation solutions that exceed expectations, blending style and functionality for your perfect home.",
    image: "/images/hero/slide-3.jpg",
    btnText: "Get a Quote",
    btnUrl: "/contact",
  },
];

const Hero = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={"auto"}
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2">
        <Button className="hero-prev bg-black/70" size="icon">
          <HiMiniChevronLeft className="text-2xl text-primary" />
        </Button>
        <Button className="hero-next bg-black/70" size="icon">
          <HiMiniChevronRight className="text-2xl text-primary" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
