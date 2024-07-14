import { Review } from "@/interfaces/review";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const reviews: Review[] = [
  {
    name: "John Smith",
    designation: "Homeowner at Smith Residence",
    review:
      "Outstanding service and impeccable craftsmanship! Our home looks amazing, and the team was professional throughout. They paid attention to every detail and ensured that everything was perfect. We couldn't be happier with the results and highly recommend their services to anyone looking to renovate their home.",
  },
  {
    name: "Emily Johnson",
    designation: "Business Owner of Johnson & Co.",
    review:
      "Highly professional, timely, and within budget. They transformed our office space, making it modern and functional. The team was great to work with and very responsive to our needs. The quality of work exceeded our expectations, and we have received numerous compliments from our clients.",
  },
  {
    name: "Michael Williams",
    designation: "Architect at Williams Design Studio",
    review:
      "Their attention to detail is unmatched. They executed the design flawlessly and made the whole process seamless. The team was knowledgeable, skilled, and dedicated to delivering the best possible outcome. It was a pleasure working with them, and I look forward to collaborating on future projects.",
  },
  {
    name: "Sarah Brown",
    designation: "Interior Designer at Brown Interiors",
    review:
      "Transformed our space beautifully and efficiently. Their innovative ideas and dedication truly exceeded our expectations. They were attentive to our vision and worked tirelessly to bring it to life. The end result is a stunning space that perfectly reflects our style and needs.",
  },
  {
    name: "David Jones",
    designation: "Property Manager at Jones Properties",
    review:
      "Reliable, efficient, and exceptional quality work. They managed the entire project with professionalism and care. The team was always on time, kept us informed throughout the process, and delivered outstanding results. I highly recommend them for any renovation or construction project.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-[url(/review-cover.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/70 py-16 md:py-20">
        <div className="container relative z-[1]">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{ delay: 5000 }}
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
        </div>
      </div>
    </section>
  );
};

export default Reviews;
