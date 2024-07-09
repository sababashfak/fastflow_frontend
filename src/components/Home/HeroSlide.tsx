import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "../../interfaces/slide";

type SlideProps = {
  slide: Slide;
};

const HeroSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="relative min-h-[650px]">
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-black/60"></div>
      <div className="z-30">
        <div className="container relative py-36">
          <h4 className="mb-3 text-[15px] font-semibold uppercase tracking-wide text-primary">
            {slide.title}
          </h4>
          <h2 className="mb-5 max-w-lg text-[42px] font-bold leading-tight text-white">
            {slide.subtitle}
          </h2>
          <p className="mb-5 max-w-md text-base text-gray-100">
            {slide.description}
          </p>
          <Link
            to={slide.btnUrl!}
            className="inline-block rounded-full border-2 border-primary bg-transparent px-5 py-3 font-semibold text-primary duration-300 hover:bg-primary hover:text-white"
          >
            {slide.btnText}
          </Link>
          <div className="absolute bottom-[60px] left-[-100px] z-[-1] h-[250px] w-[400px] bg-black/20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
