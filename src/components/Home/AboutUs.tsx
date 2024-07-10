import { useState } from "react";
import { cn } from "../../lib/utils";
import SectionTop from "../shared/SectionTop";

const aboutItems = [
  {
    title: "Transformation",
    description:
      "Our commitment to excellence is unwavering. With every project, we bring new life to aging structures, turning visions into reality with precision and dedication.",
    bullets: [
      "Client-centered",
      "Researched strategies",
      "Innovative methods",
      "Quality focus",
    ],
  },
  {
    title: "Customization",
    description:
      "We believe in the power of customization, providing solutions that meet the unique needs of each client. From modernizing outdated kitchens to creating luxurious bathrooms, our expertise covers a wide range of renovation services.",
    bullets: [
      "Quality service",
      "Professional skills",
      "Personalized plans",
      "Detail-oriented",
    ],
  },
  {
    title: "Satisfaction",
    description:
      "With over 12 years of experience, our team is driven by a passion for excellence. We prioritize customer satisfaction, ensuring that every detail is meticulously handled and that your home renovation experience is seamless and enjoyable.",
    bullets: [
      "Customer-first",
      "High satisfaction",
      "Responsive support",
      "Reliable results",
    ],
  },
  {
    title: "Innovation",
    description:
      "Combining cutting-edge designs with lasting quality, we ensure that your renovated spaces are both beautiful and functional. Our innovative approach to reconstruction guarantees that your investment will stand the test of time.",
    bullets: [
      "Modern designs",
      "Latest trends",
      "Tech integration",
      "Sustainable solutions",
    ],
  },
];

const AboutUs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container grid grid-cols-1 items-center gap-x-10 md:grid-cols-[auto_1fr] xl:gap-x-16">
        <div className="w-full md:max-w-sm lg:max-w-md xl:max-w-lg">
          <img
            src="/about.jpg"
            alt=""
            className="aspect-[5/3] w-full object-cover md:aspect-auto md:h-full lg:aspect-[6/8] xl:aspect-[7/8]"
          />
        </div>
        <div className="py-5">
          <SectionTop
            title="About Us"
            subtitle="We Transform Everything You Need"
            containerClass="items-start text-left"
          />
          <div className="mt-8">
            <p className="mb-7 text-[15px] text-gray-600">
              The reconstruction and renovation industry has become vital in
              transforming homes and commercial spaces across the world. Our
              focus on quality craftsmanship and innovative solutions sets us
              apart, revitalizing neighborhoods and enhancing property values.
            </p>
            <div className="flex flex-wrap gap-4">
              {aboutItems.map((item, index) => (
                <button
                  onClick={() => setActive(index)}
                  className={cn(
                    "text-secondary hover:border-secondary border px-5 py-3 text-sm duration-300",
                    active === index &&
                      "border-secondary bg-secondary text-white",
                  )}
                  key={index}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="mt-5 text-[15px]">
              <p className="text-gray-600">{aboutItems[active].description}</p>
              <ul className="mt-4 grid list-inside grid-cols-[auto_1fr] gap-x-10 gap-y-3 text-gray-500">
                {aboutItems[active].bullets.map((bullet, index) => (
                  <li className="flex items-center" key={index}>
                    <span className="bg-secondary mr-2 block size-1.5"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
