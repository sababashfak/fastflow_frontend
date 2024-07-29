import usePopularCategories from "@/hooks/usePopularCategories";
import chunkArray from "@/lib/chunkArray";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoriesList from "../Category/CategoriesList";
import SectionTop from "../shared/SectionTop";

const Categories = () => {
  const categories = usePopularCategories();
  const chunkedCategories = chunkArray(categories, 6);

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionTop
          title="Categories"
          subtitle="Browse Our Popular Categories"
          subtitleClass="xl:text-3xl"
        />
        <div className="mt-8 flex items-center gap-1.5 sm:mt-12 sm:gap-2 md:gap-3">
          <button className="category-prev flex size-8 shrink-0 items-center justify-center rounded-full bg-[#008FD3] text-white sm:size-10">
            <GoChevronLeft className="size-5 sm:size-6" />
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{ delay: 5000 }}
            navigation={{
              nextEl: ".category-next",
              prevEl: ".category-prev",
            }}
          >
            {chunkedCategories.map((categories, index) => (
              <SwiperSlide key={index}>
                <CategoriesList categories={categories} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="category-next flex size-8 shrink-0 items-center justify-center rounded-full bg-[#008FD3] text-white sm:size-10">
            <GoChevronRight className="size-5 sm:size-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
