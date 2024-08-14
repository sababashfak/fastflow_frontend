import SectionTop from "../shared/SectionTop";

const items = [
  {
    title: "Innovative Solutions and Ideas",
    description:
      "We constantly monitor all of the innovations in the construction market and use them in our work.",
    icon: "/images/about/building.png",
  },
  {
    title: "Latest Technologies",
    description:
      "We use the latest equipment, materials, technologies and developments to deliver better service.",
    icon: "/images/about/crane.png",
  },
  {
    title: "Impressive Design Solutions",
    description:
      "Our talented and experienced designers can create any project in any style you want.",
    icon: "/images/about/geometry.png",
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <SectionTop title="Core Values" subtitle="Our Strategy" />
        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-3 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-md border border-secondary/10 bg-white p-4"
            >
              <div className="flex size-24 shrink-0 items-center justify-center rounded-full border-[10px] border-gray-100">
                <img
                  className="size-[50px] object-contain duration-300 group-hover:scale-110"
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              <div className="">
                <h4 className="mb-3 text-lg font-semibold leading-tight text-secondary">
                  {item.title}
                </h4>
                <p className="text-[15px] text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
