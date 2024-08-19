import { getReviews } from "@/api/review";
import { Review } from "@/interfaces/review";
import { useQuery } from "@tanstack/react-query";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import ReviewLoadingCard from "./ReviewLoadingCard";

const Reviews = () => {
  const reviewsQuery = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews({}),
  });

  const reviews: Review[] = reviewsQuery.data?.data?.reviews || [];

  return (
    <section className="bg-[url(/review-cover.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="bg-black/70 py-16 md:py-20">
        {!reviewsQuery.isLoading && reviews.length > 0 && (
          <div className="container relative flex items-center gap-1 sm:gap-2 lg:gap-5">
            <button className="review-prev flex size-10 shrink-0 items-center justify-center rounded-full border border-white bg-transparent text-white duration-300 hover:bg-white hover:text-dark md:size-14">
              <GoChevronLeft className="size-6 md:size-7" />
            </button>
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              loop={true}
              speed={1000}
              autoplay={{ delay: 3000 }}
              navigation={{
                nextEl: ".review-next",
                prevEl: ".review-prev",
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="review-next flex size-10 shrink-0 items-center justify-center rounded-full border border-white bg-transparent text-white duration-300 hover:bg-white hover:text-dark md:size-14">
              <GoChevronRight className="size-6 md:size-7" />
            </button>
          </div>
        )}
        <div className="container">
          {reviewsQuery.isFetching && <ReviewLoadingCard />}
          {!reviewsQuery.isFetching && reviews.length === 0 && (
            <div className="flex justify-center py-10">
              <p className="rounded-md border border-white/30 bg-white/5 px-10 py-7 text-center text-xl text-white backdrop-blur-sm">
                No reviews found
              </p>
            </div>
          )}
          {!reviewsQuery.isFetching && (
            <div className="container mt-8 flex justify-center">
              <Link
                className="block rounded-full border border-primary px-6 py-[18px] text-white duration-300 hover:bg-primary hover:text-dark"
                to="https://www.trustpilot.com/"
                target="_blank"
              >
                Leave us a Review
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
