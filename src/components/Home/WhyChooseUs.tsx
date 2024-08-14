import SectionTop from "../shared/SectionTop";

const items = [
  {
    title: "Over 03 Years Experience",
    description:
      "With over 03 years of experience, we bring expertise and dedication to every project.",
    icon: "why-us-1.png",
  },
  {
    title: "Best Materials",
    description:
      "We use only the best materials, ensuring durability and quality in every project.",
    icon: "why-us-2.png",
  },
  {
    title: "Professional Standards",
    description:
      "We uphold professional standards for safety, efficiency, and customer satisfaction.",
    icon: "why-us-3.png",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <SectionTop
          title="Why Choose Us"
          subtitle="Discover Why We're Your Best Choice"
        />
        <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-3 md:gap-y-10 lg:mt-16">
          {items.map(({ title, description, icon }, index) => (
            <div
              className="mx-auto flex max-w-[290px] flex-col items-center text-center"
              key={index}
            >
              <div className="flex size-[120px] items-center justify-center rounded-full border border-gray-200 sm:size-[110px] md:size-[140px]">
                <img
                  src={`/images/icons/${icon}`}
                  alt={title}
                  className="size-16"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="h-5 w-[1px] bg-gray-200"></div>
                <div className="size-3 rounded-full border border-gray-200"></div>
              </div>
              <h3 className="mt-5 font-semibold uppercase text-dark lg:text-[17px]">
                {title}
              </h3>
              <span className="mt-5 block h-0.5 w-10 bg-primary"></span>
              <p className="mt-5 text-[15px] text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
