import SectionTop from "@/components/shared/SectionTop";
import { cn } from "@/lib/utils";
import useStore from "@/store";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Complete Bathroom Renovations",
    description:
      "Transform your old bathroom into a modern, stylish space with our comprehensive renovation services, including fixtures, tiling, and design.",
    image: "service-1.jpg",
    identifier: "bathrooms",
  },
  {
    name: "Expert Boiler Repair",
    description:
      "Ensure your boiler runs smoothly with our expert repair services. We diagnose and fix issues quickly to keep your heating system efficient.",
    image: "service-2.jpg",
    identifier: "boiler-repair",
  },
  {
    name: "Professional Central Heating Systems",
    description:
      "Install or upgrade your central heating system with our professional services to ensure optimal warmth and efficiency throughout your home.",
    image: "service-3.jpg",
    identifier: "central-heating",
  },
  {
    name: "Custom Kitchen Installations",
    description:
      "Revamp your kitchen with tailored installation services, including cabinets, countertops, and appliances, designed to fit your style and needs.",
    image: "service-4.jpg",
    identifier: "kitchen-fitting",
  },
  {
    name: "Full Home Insulation",
    description:
      "Improve your home's energy efficiency with our complete insulation services, keeping your space warm in winter and cool in summer.",
    image: "service-5.jpg",
    identifier: "insulation",
  },
  {
    name: "Comprehensive Loft Conversions",
    description:
      "Maximize your home’s space with our loft conversion services, transforming unused attics into functional living areas or additional rooms.",
    image: "service-6.jpg",
    identifier: "loft-conversion",
  },
  {
    name: "Expert Groundwork and Foundations",
    description:
      "Lay a solid foundation for your building projects with our expert groundwork services, ensuring stability and durability for new constructions.",
    image: "service-7.jpg",
    identifier: "groundwork-foundations",
  },
  {
    name: "Advanced Gas Work Services",
    description:
      "Get reliable gas installation and repair services from certified professionals, ensuring safety and efficiency for all your gas appliances.",
    image: "service-8.jpg",
    identifier: "gas-works",
  },
  {
    name: "Efficient Demolition and Clearance",
    description:
      "Clear out old structures and make way for new projects with our thorough demolition and clearance services, handling all debris and waste.",
    image: "service-9.jpg",
    identifier: "demolition-clearance",
  },
  {
    name: "Precision Plumbing Services",
    description:
      "Address all your plumbing needs with our skilled professionals, offering everything from pipe repairs to full plumbing installations.",
    image: "service-10.jpg",
    identifier: "plumber",
  },
  {
    name: "Modern Conservatory Installations",
    description:
      "Enhance your home with a stylish conservatory, designed and installed to provide a bright, versatile space for relaxation or entertaining.",
    image: "service-11.jpg",
    identifier: "conservatories",
  },
  {
    name: "Skilled Electrical Work",
    description:
      "Ensure your electrical systems are safe and up-to-date with our skilled electricians, offering installations, repairs, and maintenance services.",
    image: "service-12.jpg",
    identifier: "electrician",
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
            subtitle="Quality Service is Our Guarantee"
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
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-5 py-3 text-white shadow-[0_3px_10px_rgba(59,130,246,.5)] duration-200 hover:bg-blue-600"
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
