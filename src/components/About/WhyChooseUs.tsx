import { MdArrowRightAlt } from "react-icons/md";

const items = [
  "The client is why we exist",
  "Meet obligations no matter what",
  "Take no short cuts",
  "Leave work area clean",
  "Finish on time",
  "Arrive on time",
  "Maintain accurate records",
  "Be trustful",
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[3fr_2fr] lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="">
            <div className="mb-3 flex items-center gap-3 lg:mb-5">
              <span className="block h-0.5 w-10 bg-blue-400"></span>
              <p className="text-sm font-semibold text-blue-400">
                Why Choose Us?
              </p>
            </div>
            <h2 className="text mb-3 text-3xl font-bold text-secondary lg:mb-5 lg:text-balance lg:text-4xl lg:leading-snug">
              We Guarantee Quality With Every Service
            </h2>
            <p className="mb-5 font-roboto text-gray-500 lg:mb-6 lg:text-[17px]">
              Our number one priority is providing outstanding customer service
              for each and every job, so that you walk away 100% satisfied each
              and every time.
            </p>
            <ul className="grid grid-cols-1 gap-x-5 gap-y-2.5 lg:grid-cols-2">
              {items.map((item, index) => (
                <li
                  className="flex items-center gap-2 text-[15px] font-medium text-secondary"
                  key={index}
                >
                  <MdArrowRightAlt className="text-lg" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="row-start-1 md:row-start-auto">
            <img
              className="w-full object-cover md:h-full lg:aspect-[3/2.2] lg:h-auto"
              src="/about-choose-us.jpg"
              alt="Why Choose Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
