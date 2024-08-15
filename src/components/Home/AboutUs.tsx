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
      "With over 3 years of experience, our team is driven by a passion for excellence. We prioritize customer satisfaction, ensuring that every detail is meticulously handled and that your home renovation experience is seamless and enjoyable.",
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

const images = ["/about.jpg", "/about-2.jpg", "/about-3.jpg", "/about-4.jpg"];

const AboutUs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-[auto_1fr] md:gap-x-4 lg:gap-x-10 xl:gap-x-16">
        <div className="w-full md:max-w-sm lg:max-w-md xl:max-w-lg">
          <div className="relative w-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={images[active]}
                alt=""
                className={cn(
                  "aspect-[5/3] w-full object-cover duration-300 md:aspect-[3/5] lg:aspect-[6/8] xl:aspect-[7/8]",
                  index !== active && "absolute left-0 top-0 opacity-0",
                )}
              />
            ))}
          </div>
        </div>
        <div className="py-1 lg:py-5">
          <SectionTop
            subtitle="We Transform Everything You Need"
            containerClass="items-start text-left"
            subtitleClass="lg:text-4xl xl:text-5xl xl:leading-[1.1]"
          />
          <div className="mt-8">
            <p className="mb-7 text-[15px] text-gray-600 lg:text-base xl:text-[17px]">
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
                    "border px-5 py-3 text-sm text-secondary duration-300 hover:border-secondary",
                    active === index &&
                      "border-secondary bg-secondary text-white",
                  )}
                  key={index}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="mt-5 text-[15px] lg:text-base xl:text-[17px]">
              <p className="text-gray-600">{aboutItems[active].description}</p>
              <ul className="mt-4 grid list-inside grid-cols-[auto_1fr] gap-x-10 gap-y-3 text-gray-500">
                {aboutItems[active].bullets.map((bullet, index) => (
                  <li className="flex items-center" key={index}>
                    <span className="mr-2 block size-1.5 bg-secondary"></span>
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
