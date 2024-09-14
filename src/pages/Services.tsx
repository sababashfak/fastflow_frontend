import SectionTop from "@/components/shared/SectionTop";
import { cn } from "@/lib/utils";
import useStore from "@/store";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Boiler Service, Repair, and Installation",
    description:
      "Ensure your home stays warm and efficient with our expert boiler services, including repairs, maintenance, and new installations tailored to your needs.",
    image: "service-1.jpg",
    identifier: "boiler-repair",
  },
  {
    name: "Comprehensive Gas and Heating Services",
    description:
      "From heating system installations to repairs and maintenance, we provide all-encompassing gas and heating solutions to keep your home safe and warm year-round.",
    image: "service-2.jpg",
    identifier: "gas-works",
  },
  {
    name: "Electric and Gas Safety Certificates",
    description:
      "Get peace of mind with our certified safety checks for gas and electrical systems, ensuring your property complies with the latest safety regulations.",
    image: "service-3.jpg",
    identifier: "electrician",
  },
  {
    name: "Expert Plumbing Solutions",
    description:
      "Whether it's a small leak or a major plumbing overhaul, our expert team delivers reliable solutions for residential and commercial properties.",
    image: "service-4.jpg",
    identifier: "plumber",
  },
  {
    name: "All Types of Electrical Work",
    description:
      "From wiring and lighting installations to repairs and upgrades, we offer a full range of electrical services to meet your needs with precision and care.",
    image: "service-5.jpg",
    identifier: "electrician",
  },
  {
    name: "Renovations and Refurbishments",
    description:
      "Our comprehensive renovation and refurbishment services help you transform your living or commercial space, from small updates to full property makeovers.",
    image: "service-6.jpg",
    identifier: "restoration-refurbishment",
  },
  {
    name: "Kitchen Extensions and Upgrades",
    description:
      "Expand and enhance your kitchen with custom designs, high-quality materials, and expert installation to create a space that meets your lifestyle needs.",
    image: "service-7.jpg",
    identifier: "kitchen-fitting",
  },
  {
    name: "Bathroom Renovations and Extensions",
    description:
      "Upgrade your bathroom with modern designs, new fixtures, and customized extensions to create a luxurious, functional space that enhances your home.",
    image: "service-8.jpg",
    identifier: "bathrooms",
  },
  {
    name: "Flooring Installation and Repairs",
    description:
      "We provide expert flooring installation and repair services for all materials, ensuring durable and beautiful results that complement your home’s design.",
    image: "service-9.jpg",
    identifier: "carpets-lino-flooring",
  },
  {
    name: "Home Decorating and Painting Services",
    description:
      "Transform your home with our professional painting and decorating services, including interior and exterior work that brings new life to any space.",
    image: "service-10.jpg",
    identifier: "painter",
  },
];

const Services = () => {
  const user = useStore((state) => state.user);

  const isUser = user?.role === "user";

  return (
    <main>
      <section className="bg-[url(/service-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 py-20">
          <div className="container text-center">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">
              Our <span className="text-primary">Services</span>
            </h3>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionTop
            title="Our Services"
            subtitle="Where Quality and Service Flow Together"
          />
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                className={cn(
                  "group bg-white p-4 shadow-[0_0_5px_rgba(0,0,0,0.1)] xl:p-5",
                  isUser && "relative pb-20 xl:pb-20",
                )}
                key={index}
              >
                {isUser && (
                  <Link
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-5 py-2.5 text-white duration-200 hover:bg-blue-600"
                    to={`/book-service?category=${service.identifier}`}
                  >
                    Book Now
                  </Link>
                )}
                <div className="aspect-[4/2.6] w-full overflow-hidden">
                  <img
                    src={`/images/services/services/${service.image}`}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center px-3 pt-5 text-center">
                  <h3 className="mb-3 text-xl font-semibold text-secondary">
                    {service.name}
                  </h3>
                  <div className="mb-3.5 h-[3px] w-[50px] bg-red-600"></div>
                  <p className="font-roboto text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[url(/service-callback.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="bg-black/75 py-24 text-center text-white md:py-28">
          <div className="container">
            <h4 className="mb-5 font-medium uppercase text-primary lg:mb-6 lg:text-[17px]">
              We offer the best solutions
            </h4>
            <h2 className="mb-5 text-[26px] font-semibold leading-tight lg:mb-6 lg:text-4xl lg:font-bold">
              For Both Residential & Commercial
            </h2>
            <h3 className="font-semibold lg:text-lg">24/7 Customer Support</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
